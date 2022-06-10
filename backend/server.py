# Import flask and datetime module for showing date and time
from flask import Flask, request
from flask_cors import CORS, cross_origin
import statsapi
import numpy as np
import requests
import json


# Initializing flask app
app = Flask(__name__)
CORS(app)


# Route for fetching all mlb players
@app.route('/mlb-players')
def get_time():

    if (request.method == 'GET'):

        response_API = requests.get(
            'https://statsapi.mlb.com/api/v1/sports/1/players')
        data = response_API.text
        parse_json = json.loads(data)

        arr = []
        for index, value in enumerate(parse_json["people"]):
            arr.append(parse_json["people"][index]["fullName"])

        jsonString = json.dumps(arr)
        # jsonString.headers.add('Access-Control-Allow-Origin', '*')
        return (jsonString)



# Running app
if __name__ == '__main__':
    app.run(debug=True)
