const express = require("express");
const loginRouter = express.Router();
const signupdata =require('../model/signupdata');
function router()
    {
loginRouter.get('/',function(req,res)
                {
                    res.render("login",
                    {
                       
                        title:'Product Management',
                        
                    });
                });
loginRouter.post('/',function(req,res)
                {
                //    var entry=req.body.entry;
                //    var ent = document.getElementById('entry').value;
                //     var entry1 = ent.options[ent.selectedIndex].value;
                //     var entry = ent.options[ent.selectedIndex].text;
                    var username=req.body.username;
                    var password=req.body.password;
                    //var html = 'Hello:' + username;
                    // res.send(html);
                    // console.log(html);
        signupdata.findOne({username:username,password:password},function(err,user)
        {
            if(err)
                {
                    //res.send(html);
                    console.log("err");
                   // return res.status(500).send();
                }
               // res.json(user);
                 res.redirect('/');
                 //return res.status(200).send();
                });
                          
                         
                          
                            });

    return loginRouter;
                            }
                        
module.exports =router; 