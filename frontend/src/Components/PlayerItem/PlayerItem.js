import React, { useEffect } from 'react';
import './PlayerItem.css';

const PlayerItem = (props) => {

  console.log(props.finalPlayer);

  let teamColor = '';
  let positionColor = '';
  let leagueColor = '';
  let divisionColor = '';
  let heightColor = '';
  let batsColor = '';
  let throwsColor = '';
  let numberColor = '';
  let ageColor = '';
  let birthCountryColor = '';

  if (props.finalPlayer['team'] === props.team) {
    teamColor = 'lightgreen';
  } else {
    teamColor = 'red';
  }

  if (props.finalPlayer['position'] === props.position) {
    positionColor = 'lightgreen';
  } else {
    positionColor = 'red';
  }

  if (props.finalPlayer['league'] === props.league) {
    leagueColor = 'lightgreen';
  } else {
    leagueColor = 'red';
  }

  if (props.finalPlayer['division'] === props.division) {
    divisionColor = 'lightgreen';
  } else {
    divisionColor = 'red';
  }

  if (props.finalPlayer['height'] === props.height) {
    heightColor = 'lightgreen';
  } else {
    heightColor = 'red';
  }

  if (props.finalPlayer['bats'] === props.bats) {
    batsColor = 'lightgreen';
  } else {
    batsColor = 'red';
  }

  if (props.finalPlayer['throws'] === props.throws) {
    throwsColor = 'lightgreen';
  } else {
    throwsColor = 'red';
  }

  if (props.finalPlayer['number'] === props.number) {
    numberColor = 'lightgreen';
  } else {
    numberColor = 'red';
  }

  if (props.finalPlayer['age'] === props.age) {
    ageColor = 'lightgreen';
  } else {
    ageColor = 'red';
  }

  if (props.finalPlayer['birthCountry'] === props.birthCountry) {
    birthCountryColor = 'lightgreen';
  } else {
    birthCountryColor = 'red';
  }

  return (
    <div className="playerItemContainer">
      <div
        className="playerAttributeContainer"
        // style={{ backgroundColor: nameColor }}
      >
        <p>{props.name}</p>
      </div>
      <div
        className="playerAttributeContainer"
        style={{ backgroundColor: teamColor }}
      >
        <p>{props.team}</p>
      </div>
      <div
        className="playerAttributeContainer"
        style={{ backgroundColor: positionColor }}
      >
        <p>{props.position}</p>
      </div>
      <div
        className="playerAttributeContainer"
        style={{ backgroundColor: leagueColor }}
      >
        <p>{props.league}</p>
      </div>
      <div
        className="playerAttributeContainer"
        style={{ backgroundColor: divisionColor }}
      >
        <p>{props.division}</p>
      </div>
      <div
        className="playerAttributeContainer"
        style={{ backgroundColor: heightColor }}
      >
        <p>{props.height}</p>
      </div>
      <div
        className="playerAttributeContainer"
        style={{ backgroundColor: batsColor }}
      >
        <p>{props.bats}</p>
      </div>
      <div
        className="playerAttributeContainer"
        style={{ backgroundColor: throwsColor }}
      >
        <p>{props.throws}</p>
      </div>
      <div
        className="playerAttributeContainer"
        style={{ backgroundColor: numberColor }}
      >
        <p>{props.number}</p>
      </div>
      <div
        className="playerAttributeContainer"
        style={{ backgroundColor: ageColor }}
      >
        <p>{props.age}</p>
      </div>
      <div
        className="playerAttributeContainer"
        style={{ backgroundColor: birthCountryColor }}
      >
        <p>{props.birthCountry}</p>
      </div>
    </div>
  );
};

export default PlayerItem;
