const Repository = require("./repository");
const Message = require("../models/message");

class MessageRepository extends Repository {
  constructor(){
    super();
    this.model = Message;
  }
}

module.exports = new MessageRepository();
