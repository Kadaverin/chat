function responseHandler(err, data , res, badStatus = '400'){
  if (!err) {
      res.data = data;
      res.json(res.data);
    } else {
      res.status( badStatus );
      res.end();
    }
}

module.exports = responseHandler;