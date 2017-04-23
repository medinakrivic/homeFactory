var mongoose = require('mongoose');
var dburl='mongodb://homefactory.tk:gjucUfqH@80.65.165.60:2721/homefactory?authSource=admin';

mongoose.connect(dburl);

mongoose.connection.on('connected',function(){
  console.log('Mongoose connected to '+ dburl);
});

mongoose.connection.on('diconnected',function(){
  console.log('Mongoose diconnected');
});

mongoose.connection.on('error',function(err){
  console.log('Mongoose connection error:' + err);
});

process.on('SIGINT',function(){
  mongoose.connection.close(function(){
      console.log('Mongoose disconnected through app terminations (SIGINT)');
      process.exit(0);
  });
});

process.on('SIGUSR2',function(){
  mongoose.connection.close(function(){
      console.log('Mongoose disconnected through app terminations (SIGUSR2)');
      process.kill(process.pid, 'SIGUSR2');
  });
});


require('./users.model.js');
