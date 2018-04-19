var express = require('express');
var router  = express.Router();
//++++++++++++++
var player_stats_dal = require ('../dal/player_stats_dal');


/* Get users listing. */
router.get('/all', function(req, res, next){
    player_stats_dal.getAll(function(err, result){
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('player_stats/player_stats_view_all', {player_stats: result});
        }
    })
});

router.get('/add', function(req,res){
    res.render('player_stats/player_stats_add');
});

router.get('/insert', function(req,res){
    player_stats_dal.insert(req.query,function(err, result){
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            res.redirect(302,'/player_stats/all');
        }
    });
});

module.exports= router;
