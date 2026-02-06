from http.server import BaseHTTPRequestHandler, HTTPServer
import urllib.parse
import re
import csv
import smtplib
from email.message import EmailMessage
from routes import routes
from dotenv import load_dotenv
import os

# Load environment variables from .env
load_dotenv()
EMAIL_USER = os.getenv("EMAIL_HOST_USER")
EMAIL_PASS = os.getenv("EMAIL_HOST_PASSWORD")

def save_message(name, email, subject, message):
    """Save messages to CSV for record-keeping."""
    with open("messages.csv", "a", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow([name, email, subject, message])

def send_email(name, sender_email, subject, message):
    """Send the contact form message to your email using Gmail."""
    try:
        msg = EmailMessage()
        msg['Subject'] = f"New Contact Form Submission: {subject}"
        msg['From'] = "katuajoseph111@gmail.com"
        msg['To'] = "katuajoseph111@gmail.com"  # Receive at your own email
        msg.set_content(f"""
Name: {name}
Email: {sender_email}
Subject: {subject}
Message:
{message}
""")

        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
            smtp.login(EMAIL_USER, EMAIL_PASS)
            smtp.send_message(msg)

        print(f"📩 Email sent successfully for {name} ({sender_email})")
    except Exception as e:
        print(f"❌ Failed to send email: {e}")

class Server(BaseHTTPRequestHandler):

    def do_GET(self):
        if self.path in routes:
            self.serve_static(routes[self.path], "text/html")
        elif self.path.startswith("/static/"):
            content_type = "text/plain"
            if self.path.endswith(".css"): content_type = "text/css"
            elif self.path.endswith(".js"): content_type = "application/javascript"
            elif self.path.endswith(".png"): content_type = "image/png"
            elif self.path.endswith(".jpg") or self.path.endswith(".jpeg"): content_type = "image/jpeg"
            elif self.path.endswith(".ico"): content_type = "image/x-icon"
            self.serve_static(self.path.lstrip("/"), content_type)
        else:
            self.send_error(404, "Page not found")

    def do_POST(self):
        if self.path == "/contact":
            content_length = int(self.headers.get("Content-Length", 0))
            raw_body = self.rfile.read(content_length).decode("utf-8")

            # Parse POST data
            parsed_data = urllib.parse.parse_qs(raw_body)
            name = parsed_data.get("name", [""])[0].strip()
            email = parsed_data.get("email", [""])[0].strip()
            subject = parsed_data.get("subject", [""])[0].strip()
            message = parsed_data.get("message", [""])[0].strip()

            # Validation
            errors = []
            if not name or len(name) < 2:
                errors.append("Name must be at least 2 characters.")
            if not email or not re.match(r"[^@]+@[^@]+\.[^@]+", email):
                errors.append("Invalid email address.")
            if not subject or len(subject) < 3:
                errors.append("Subject must be at least 3 characters.")
            if not message or len(message) < 10:
                errors.append("Message must be at least 10 characters.")

            # Respond with HTML
            self.send_response(200)
            self.send_header("Content-Type", "text/html")
            self.end_headers()

            if errors:
                response = "<h3>Form Errors:</h3><ul>"
                for err in errors:
                    response += f"<li>{err}</li>"
                response += "</ul><a href='/contact'>Go Back</a>"
            else:
                # Save message locally
                save_message(name, email, subject, message)
                # Send email
                send_email(name, email, subject, message)

                response = "<h3>Thank you! Your message has been received and emailed.</h3>"
                response += "<a href='/contact'>Go Back</a>"

            self.wfile.write(response.encode())

    def serve_static(self, path, content_type):
        try:
            with open(path, "rb") as f:
                self.send_response(200)
                self.send_header("Content-Type", content_type)
                self.end_headers()
                self.wfile.write(f.read())
        except FileNotFoundError:
            self.send_error(404, "File not found")

if __name__ == "__main__":
    PORT = 8000
    print(f"Server running on http://localhost:{PORT}")
    HTTPServer(("", PORT), Server).serve_forever()
