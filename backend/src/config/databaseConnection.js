const MongoClient = require('mongodb').MongoClient;

let mongoDB;

const setupDB = callback => {
  const uri = 'mongodb+srv://makadi:makadi@makadi-n26tm.mongodb.net/test?retryWrites=true&w=majority'
  

  MongoClient.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
      mongoDB = client.db('makadi');

      if (err) {
        return callback(err);
      } else {
        return callback('DB OK');
      }
    }
  );
};

const getDB = () => {
  return mongoDB;
};

module.exports = { setupDB, getDB };