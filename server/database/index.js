
let mongoose = require('mongoose')
mongoose.Promise = global.Promise


let mongodb = 'mongodb://localhost:27017/icodeonlinedb' 

mongoose.connect(mongodb).then(
    () => { 
    
        console.log('Connected!');
        
    },
    err => {
         
         console.log('Error with Mongo: ')
         console.log(err);
         
        }
  );


module.exports = mongoose.connection