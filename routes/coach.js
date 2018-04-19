var express = require('express');
var router  = express.Router();
//++++++++++++++
var coach_dal = require ('../dal/coach_dal');


/* Get users listing. */
router.get('/all', function(req, res, next){
    coach_dal.getAll(function(err, result){
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('coach/coach_view_all', {coaches: result});
        }
    })
});

router.get('/add', function(req,res){
    res.render('coach/coach_add');
});

router.get('/insert', function(req,res){
    coach_dal.insert(req.query,function(err, result){
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            res.redirect(302,'/coach/all');
        }
    });
});

module.exports= router;
