const client = require('./db/db')
let user = {
    name: 'rocky',
    email: 'rocky@gmail.com'
}


//get data of string type
  client.get(101,function(err,data){
      console.log(data);
  })

//get data of object type  
client.hgetall(102,function(err,data){
  console.log(data);
})