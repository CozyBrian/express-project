const model = require('../models/friends.model')

function getFriends(req, res) {
  res.json(model);
};

function getFriend(req, res) {
  const id = Number(req.params.id);
  const friend = model[id];
  if (friend) {
    res.json(model[id]);
  } else {
    res.status(404).json({
      id,
      error: "Friend does not exist"
    });
  }
};

function postFriend(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: 'Missing friend name!'
    });
  }

  const newFriend = {
    id: model.length,
    name: req.body.name,
  }
  model.push(newFriend);

  res.json(newFriend);
};

module.exports = {
  getFriend,
  getFriends,
  postFriend
}