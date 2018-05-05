from flask import Flask
import json
import random

app = Flask(__name__)
word_list = json.load(open('data/words.json'))
word_dict = {}
for word in word_list:
    word_dict[word["id"]] = word["palavra"]

@app.route("/")
def hello():
    return "Hello World!"

@app.route("/get_random_word")
def get_random_word():
    return random.choice(word_dict.values())