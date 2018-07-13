const Repository = require("./repository");
const User = require("../models/user");

class UserRepository extends Repository {
  constructor(){
    super();
    this.model = User;
  }
}

module.exports = new UserRepository();