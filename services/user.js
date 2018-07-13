const UserRepository = require("../repositories/userRepository");
const MessageRepository = require("../repositories/messageRepository");

module.exports = {
  all: callback => {
    UserRepository.getAll((err, data) => {
      callback(null, data);
    });
  },

  findOne: (id, callback) => {
    UserRepository.getById(id, (err, data) => {
      if (!data && !err) err = new Error('Document not found');
      callback(err, data);
    });
  },

  createNewUser: (userInfo, callback) => {
    UserRepository.create(userInfo , (err, newUser) => {
      callback(err, newUser);
    })
  },

  updateUserById: (id, params, callback) => {
     UserRepository.updateById( id , params , (err, updatedUser) => {
       callback(err,  updatedUser)
     });
  },

  deleteUserById: (id, callback) => {
    UserRepository.deleteById( id, (err) => {
      callback(err);
    })
  },

  // найти всех собеседников

  findAllInterlocutor: (targetUserId , callback) => {
    let userIdsArr = [];
    const query = { $or: [ {'senderId': targetUserId} , {'receiverId' : targetUserId} ]};
    const options = {'_id': 0, 'text': 0, '__v': 0};

    MessageRepository.findAllByQuery(query, options , (err , filteredMessages) =>{
      filteredMessages.forEach( (receiverAndSenderIdsObj) => {
        for (let key in receiverAndSenderIdsObj.toObject()){
          let userId = receiverAndSenderIdsObj[key];
          if (userId != targetUserId ) { userIdsArr.push(userId); }
        }
      })
      UserRepository.findAllByQuery({"_id": { $in : userIdsArr }} , (err , users) => {
        callback(err, users);
      });
    })

  },
};