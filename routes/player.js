var express = require('express');
var router  = express.Router();
//++++++++++++++
var player_dal = require ('../dal/player_dal');


/* Get users listing. */
router.get('/all', function(req, res, next){
    player_dal.getAll(function(err, result){
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('player/player_view_all', {players: result});
        }
    })
});

router.get('/add', function(req,res){
    res.render('player/player_add');
});

router.get('/insert', function(req,res){
    player_dal.insert(req.query,function(err, result){
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            res.redirect(302,'/player/all');
        }
    });
});

module.exports= router;
