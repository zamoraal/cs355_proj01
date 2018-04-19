var mysql = require('mysql');
var db = require('./db_connection.js');


/*DATABASE CONFIGURATION*/
var connection = mysql.createConnection(db.config);


exports.getAll = function(callback){
    var query = 'SELECT * FROM player_stats;';

    connection.query(query, function(err, result){
        callback(err, result);
    });
};

exports.insert = function(params, callback){

    var query = 'INSERT INTO player_stats (player_id, game_id, points, assists, rebounds, steals, blocks, turnovers) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';

    var queryData =[params.player_id,params.game_id, params.points, params.points, params.assists, params.rebounds, params.steals, params.blocks, params.turnovers];

    connection.query(query, queryData, function(err, result){
        callback(err, result);
    });
};