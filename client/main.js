import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players } from '../imports/api/players';

const renderPlayers = function (playersList) {
  return playersList.map((player) => {
    return <p key={player._id}>{player.name} has {player.score} point(s)</p>;
  });
};

Meteor.startup(() => {
  Tracker.autorun(function () {
    let players = Players.find().fetch();
    let title = 'Score keep';
    let name = 'Imanol';
    let jsx = (
      <div>
        <h1>{title}</h1>
        <p>Hello {name}!</p>
        <p>This is the second p</p>
        {renderPlayers(players)}
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });

  Players.insert({
    name: 'John', 
    score: 7
  });
});
