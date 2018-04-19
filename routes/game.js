var express = require('express');
var router  = express.Router();
//++++++++++++++
var game_dal = require ('../dal/game_dal');


/* Get users listing. */
router.get('/all', function(req, res, next){
    game_dal.getAll(function(err, result){
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('game/game_view_all', {games: result});
        }
    })
});

router.get('/add', function(req,res){
    res.render('game/game_add');
});

router.get('/insert', function(req,res){
    game_dal.insert(req.query,function(err, result){
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            res.redirect(302,'/game/all');
        }
    });
});

module.exports= router;
