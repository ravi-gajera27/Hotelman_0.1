var  mongoose = require('mongoose');

var authenticationSchema = mongoose.Schema({email:String,password:String});
var authenticationModel = module.exports = mongoose.model('admin',authenticationSchema,"admin");
module.exports.create_authentication = function(data){
    return new Promise(function(resolve,reject){
        authenticationModel.create(data,function(err,result){
            if(err){
              return  reject(err);
            }
            resolve('success');
        })
    })
}


