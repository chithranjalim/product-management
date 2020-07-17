const express = require("express");
const signupRouter = express.Router();
const signupdata =require('../model/signupdata');
function router()
    {
signupRouter.get('/',function(req,res)
                {
                    res.render("signup",
                    {
                        
                        title:'Product Manageent',
                        
                    });
                });
signupRouter.post('/save',function(req,res)
                {
                   var item={   entry:req.body.entry,
                                fname:req.body.fname,
                                lname :req.body.lname,
                                DOB :req.body.DOB,
                                gender:req.body.gender,
                                address :req.body.address,
                                username : req.body.username ,
                                password : req.body.password,
                                email: req.body.email,
                                mob: req.body.mob

                           }
                           var signup = signupdata(item);
                           signup.save();
                           res.redirect('/login');
                            });
    return signupRouter;
                            }
                        
module.exports =router;                               