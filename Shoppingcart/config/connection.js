const mongoClient = require('mongodb').MongoClient
const state = {
}
module.exports.connect = function (done) {
    const url = 'mongodb://127.0.0.1:27017';
    const dbName = 'shopping';
    mongoClient.connect(url, { useUnifiedTopology: true }, (err, data) => {
        if (err) {
            console.log(err);
            return done(err);
        }
        state.db = data.db(dbName);
        done();
    });
}
//console.log('err');
module.exports.get = function () {
    return state.db;
}
//mongoClient.connect(url,(err,data)=>{
