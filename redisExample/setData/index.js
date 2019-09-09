const client = require('./db/db')
let user = {
    name: 'rocky',
    email: 'rocky@gmail.com'
}

//passing arguments as string format
client.set(101, JSON.stringify(user), function(err, reply) {
    console.log(reply);
  });

  //passing arguments as object format
client.hmset(102,user,function(err,data){
  console.log(data);
})


