from flask import Flask, request, Response
from flask_cors import CORS
import requests
import json

app = Flask(__name__)
CORS(app)

OLLAMA_ENDPOINT = 'http://localhost:11434/api/generate'

@app.route('/prompt', methods=['GET'])  # <-- switched to GET
def prompt_ollama():
    user_prompt = request.args.get('prompt', '')

    def generate():
        with requests.post(OLLAMA_ENDPOINT, json={
            'model': 'llama2',
            'prompt': user_prompt,
            'stream': True
        }, stream=True) as r:
            for line in r.iter_lines():
                if line:
                    try:
                        part = json.loads(line)
                        token = part.get('response', '')
                        yield f"data: {token}\n\n"
                    except Exception as e:
                        print("Error parsing line:", e)
                        continue

    return Response(generate(), mimetype='text/event-stream')

if __name__ == '__main__':
    app.run(debug=True)
