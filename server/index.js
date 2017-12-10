const library = require("./library");
library.express.start(1333);
library.mysql.connections("127.0.0.1","root","","mohammad");
library.mysql.data(['user'],['id','name','email','phone'],[100001,"'asasdd'","'dsa'",4555]);
library.express.newFile("/home","/index.html","comming back to home page ..");
library.express.newFile("/catogry","/json.json","loading json");
library.express.api("/catogry","/json.json");
