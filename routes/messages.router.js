const express = require("express");
const MessagesController = require('../controllers/messages.controller');

const messagesRouter = express.Router();

messagesRouter.get('/', MessagesController.getMessages);

module.exports = messagesRouter;