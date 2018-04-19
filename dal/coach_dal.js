var mysql = require('mysql');
var db = require('./db_connection.js');


/*DATABASE CONFIGURATION*/
var connection = mysql.createConnection(db.config);


exports.getAll = function(callback){
    var query = 'SELECT * FROM coach;';

    connection.query(query, function(err, result){
        callback(err, result);
    });
};

exports.insert = function(params, callback){

    var query = 'INSERT INTO coach (first_name, last_name, age, year_exp,, team_id) VALUES (?, ?, ?, ?, ?)';

    var queryData =[params.first_name, params.last_name, params.age, params.year_exp, params.team_id];

    connection.query(query, queryData, function(err, result){
        callback(err, result);
    });
};