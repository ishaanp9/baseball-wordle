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

personResponse_API = statsapi.get("person", params={"personId": 545361})
print(personResponse_API)
# print(personResponse_API['people'][0]['primaryPosition'])

teamData = {
    "DIAMONDBACKS": {"League": "National League", "Division": "West"},
    "BRAVES": {"League": "National League", "Division": "East"},
    "ORIOLES": {"League": "American League", "Division": "East"},
    "REDSOX": {"League": "American League", "Division": "East" },
    "CUBS": {"League": "National League", "Division": "Central"},
    "WHITESOX": {"League": "American League", "Division": "Central"},
    "REDS": {"League": "National League", "Division": "Central"},
    "GUARDIANS": {"League": "American League", "Division": "Central"},
    "ROCKIES": {"League": "National League", "Division": "West"},
    "TIGERS": {"League": "American League", "Division": "Central"},
    "ASTROS": {"League": "American League", "Division": "West" },
    "ROYALS": {"League": "American League", "Division": "Central"},
    "ANGELS": {"League": "American League", "Division": "West" },
    "DODGERS": {"League": "National League", "Division": "West"},
    "MARLINS": {"League": "National League", "Division": "East"},
    "BREWERS": {"League": "National League", "Division": "Central"},
    "TWINS": {"League": "American League", "Division": "Central"},
    "METS": {"League": "National League", "Division": "East"},
    "YANKEES": {"League": "American League", "Division": "East"},
    "ATHLETICS": {"League": "American League", "Division": "West"},
    "PHILLIES": {"League": "National League", "Division": "East"},
    "PIRATES": {"League": "National League", "Division": "Central"},
    "PADRES": {"League": "National League", "Division": "West"},
    "GIANTS": {"League": "National League", "Division": "West"},
    "MARINERS": {"League": "American League", "Division": "West"},
    "CARDINALS": {"League": "National League", "Division": "Central"},
    "RAYS": {"League": "American League", "Division": "East"},
    "RANGERS": {"League": "American League", "Division": "West"},
    "BLUE_JAYS": {"League": "American League", "Division": "East"},
    "NATIONALS": {"League": "National League", "Division": "East"},
}





# Route for fetching all mlb players
@app.route('/mlb-players')
def getMLBPlayers():

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


@app.route('/get-player-info/<playerName>')
def getSpecificPlayerInformation(playerName):

    print(playerName)
    if (request.method == 'GET'):


        dict = {"name": "", "team": "", "league": "", "division": "", "position": "",
            "height": "", "bats": "", "throws": "", "age": 0, "number": ""}
        id = statsapi.lookup_player(playerName)[0]["id"]
        personResponse_API = statsapi.get("person", params={"personId": id})
        team = statsapi.lookup_team(statsapi.lookup_player(playerName)[0]['currentTeam']['id'])[0]['teamName']
        if team == "White Sox":
            team = "WHITESOX"
        elif team == "Red Sox":
            team = "REDSOX"
        dict['name'] = playerName
        print(dict['name'])
        # NOTE: GET TEAM LEAGUE AND DIVISION INFO
        dict['team'] = statsapi.lookup_team(statsapi.lookup_player(playerName)[0]['currentTeam']['id'])[0]['name']
        print(dict['team'])
        dict['league'] = teamData[team.upper()]["League"]
        print(dict['league'])
        dict['division'] = teamData[team.upper()]["Division"]
        print(dict['division'])
        dict['position'] = personResponse_API['people'][0]['primaryPosition']['abbreviation']
        print(dict['position'])
        dict['height'] = personResponse_API["people"][0]['height']
        print(dict['height'])
        dict['bats'] = personResponse_API['people'][0]['batSide']['code']
        print(dict['bats'])
        dict['throws'] = personResponse_API['people'][0]['pitchHand']['code']
        print(dict['throws'])
        dict['age'] = personResponse_API["people"][0]['currentAge']
        print(dict['age'])
        dict['birthCountry'] =personResponse_API["people"][0]['birthCountry']
        print(dict['birthCountry'])
        dict['number'] = personResponse_API["people"][0]['primaryNumber']
        print(dict['number'])

        jsonString = json.dumps(dict);

        return (jsonString)


# Running app
if __name__ == '__main__':
    app.run(debug=True)
