const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const uri = 'http://localhost:3000/contact/send';

const { mongoose } = require('./db.js');
const  productData = require('./src/model/productdata');
var ObjectId = require('mongoose').Types.ObjectId;

const app = new express();

app.use(bodyparser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.get('/',function(req,res)
{
    res.send("hello from server");
});

app.get('/products',function(req,res)
{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

    productData.find()
    .then (function(products)
                    {
                        res.send(products);
                    });
});

app.post('/insert',function(req,res)
{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
    console.log(req.body);
    
    var product ={
                    productId : req.body.productId,
                    productName : req.body.productName,
                    productCode : req.body.productCode,
                    releaseDate : req.body.releaseDate,
                    description : req.body.description,
                    price : req.body.price,
                    starRating : req.body.starRating,
                    imageUrl : req.body.imageUrl
                    }
     var product =new productData(product);
     product.save();               
    
});


app.put('/edit', (req, res) => {
  
    var product = {
        productId: req.body.productId,
        productName: req.body.productName,
        productCode: req.body.productCode,
        releaseDate: req.body.releaseDate,
        description: req.body.description,
        price: req.body.price,
        starRating: req.body.starRating,
        imageUrl: req.body.imageUrl
    }
    productData.findOneAndUpdate({_id:id},{$set:{productId:productId,productName:productName,productCode:productCode,releaseDate:releaseDate,description:description,price:price,starRating:starRating,imageUrl:imageUrl}},
        {new:true},function(err,edit)
        {
        if(err) {
         
             console.log("err");
             
                 }  
       res.json(edit);
       console.log("edit");
      //res.redirect("/books"); 
});
});

app.delete('/delete/:id',function(req, res)
         {  
            var id = req.params.id;
            productData.findOneAndRemove({_id: id})
            .then(function(product){
                res.status(200).send(product);
                
                console.log(product);
                console.log(id);
            });
        });

// app.get("products/delete/:id", (req, res) => {
//     let id = req.params.id;
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
//     productData.find({_id:id})
//     .then (function(products)
//                     {
//                         res.send(products);
//                     });
//                 });
        
//         (err, product) => {
//         if (err) {    
//             console.log(err);
//         } else {
//             console.log(product);
//             res.status(200).send(product);
//         }
//     });                              
// });
app.listen(3000,function(){
    console.log('listening to port 3000');    
});