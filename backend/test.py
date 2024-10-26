import os
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# In-memory storage for messages (for demonstration purposes)
messages = [
    {"sender": "Alice", "text": "Hello!"},
    {"sender": "Bob", "text": "Hi, how are you?"},
    {"sender": "Alice", "text": "I'm good, thanks!"},
]

# Route to get messages
@app.route('/get-messages', methods=['GET'])
def get_messages():
    return jsonify(messages)

# Route to post a new message
@app.route('/send-message', methods=['POST'])
def send_message():
    data = request.json
    messages.append(data)  # Add the new message to the in-memory storage
    return jsonify({"status": "success", "message": "Message sent!"}), 201

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)  # Make sure to listen on all interfaces
