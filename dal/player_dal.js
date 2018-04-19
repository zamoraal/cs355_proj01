var mysql = require('mysql');
var db = require('./db_connection.js');


/*DATABASE CONFIGURATION*/
var connection = mysql.createConnection(db.config);


exports.getAll = function(callback){
    var query = 'SELECT * FROM player;';

    connection.query(query, function(err, result){
        callback(err, result);
    });
};

exports.insert = function(params, callback){

    var query = 'INSERT INTO player (jersey_num, first_name, last_name, height, position, team_id) VALUES), VALUES (?,?,?,?,?,?)';

    var queryData =[params.jersey_num,params.first_name, params.last_name,params.height, params.position,params.team_id];

    connection.query(query, queryData, function(err, result){
        callback(err, result);
    });
};