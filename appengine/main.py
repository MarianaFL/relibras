from flask import Flask
import json
import random
import requests
import requests_toolbelt.adapters.appengine

requests_toolbelt.adapters.appengine.monkeypatch()

app = Flask(__name__)
word_list = json.load(open('data/words.json'))
word_dict = {}
for word in word_list:
    word_dict[word["id"]] = word["palavra"]


@app.route('/')
def index():
    return """Available endpoints: <br>
                /getRandomWord <br>
                /getWordByID<id>"""


@app.route("/getRandomWord")
def get_random_word():
    return get_word_by_id(random.choice(word_dict.keys()))


@app.route('/getWordByID/<word_id>')
def get_word_by_id(word_id):
    resp = requests.get('http://www.acessibilidadebrasil.org.br/libras_3/ajax/getWordById/' + str(word_id))
    return resp.content, resp.status_code, resp.headers.items()
