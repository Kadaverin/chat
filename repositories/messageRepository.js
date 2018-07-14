const Repository = require("./repository");
const Message = require("../models/message");

class MessageRepository extends Repository {
  constructor(){
    super();
    this.model = Message;
  }

  findInterlocutorsIdsByUserId(targetUserId , callback){
     let query = this.model.aggregate([ 
          {
            $match : {$or: [ { 'senderId': targetUserId } , { 'receiverId' : targetUserId }] }
          },
          {
            $group : {
                _id : null , 
                usersIds : { 
                  $addToSet : { 
                    $cond : [ { $eq : ["$senderId", targetUserId ] }, "$receiverId", "$senderId" ]
                  },
                }
            }
          }
     ]);
     query.exec(callback)
  }
}

module.exports = new MessageRepository();
