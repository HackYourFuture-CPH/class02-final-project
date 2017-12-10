const mysql = require("mysql");
const express = require("express");
const fs = require('fs');
const json = require("./json.json");
console.log(json);
app = express();
let connection;
module.exports = {
    express: {
        post: (url,data)=>{
        app.post(url,data);
        },
        start: (port)=>{
            app.get("/", (req, res) =>{    
                res.sendFile(__dirname+'/index.html'); 
                console.log("Home page loaded ...");     
            });
 app.listen(port,() =>
  console.log('Example app listening on  ' + port + " !"))        
},
api:(url,fileName)=>{
    app.get(url + "/:id",(req,res) => {
         res.send(json[req.params.id]);
                    });
},
newFile: (url,fileName,text) => {
app.get(url,(req,res) => {
    res.sendFile(__dirname+fileName); 
    console.log(text);
});
},
}, // end of express library
    mysql:{
      connections: (host_address,username,user_password,data)=>{
       connection = mysql.createConnection({
            host: host_address,
            user: username,
            password: user_password,
            database: data
            
        });
        connection.connect((error,res)=>{
                if (res){
                console.log(res);
                }
                if(error){
                    console.log(error);
                }
                });
    },
    query: (query)=>{
         connection.query(query , function(err,res){
            if (err){
                console.log("Error:" + err);
                return;
            }
                if (res) {
                console.log(res);
            }
            });
    },
    data:(table,table_name,value)=>{
        let querys = "insert into "+ table +" ("+ table_name +") value ("+ value +")";
     connection.query(querys, function(err,res){
         if (err){
         console.log("Error:" + err);
         return;
     }
         if (res) {
         console.log(res);     }
     });
    },

    }, // end of mysql library


//add more library here

}