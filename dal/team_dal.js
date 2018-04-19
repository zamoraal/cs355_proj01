var mysql = require('mysql');
var db = require('./db_connection.js');


/*DATABASE CONFIGURATION*/
var connection = mysql.createConnection(db.config);


exports.getAll = function(callback){
    var query = 'SELECT * FROM team;';

    connection.query(query, function(err, result){
        callback(err, result);
    });
};

exports.insert = function(params, callback){

    var query = 'INSERT INTO team ( team_name, arena ) VALUES (?, ?)';

    var queryData =[params.team_name,params.arena];

    connection.query(query, queryData, function(err, result){
        callback(err, result);
    });
};