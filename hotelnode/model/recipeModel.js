var mongoose = require('mongoose');

var recipeSchema = mongoose.Schema({
    category:String,
    recipename:String,
    recipeprice:Number,
    imagepath:String
})

var recipeModel = module.exports = mongoose.model('recipe',recipeSchema,"recipe");
module.exports.add_recipe = function(data){
    return new Promise(function(resolve,reject){
        recipeModel.create(data,function(err,result){
            if(err){
              return  reject(err);
            }
            resolve('success');
        })
    })
}

module.exports.gets_recipe = function(type){
    return new Promise(function(resolve,reject){
        recipeModel.find({category: type},function(err,result){
            if(err){
                reject(err);
            }
            else{
                resolve(result);
            }
        })
    })
}

module.exports.get_recipe = function(){
    return new Promise(function(resolve,reject){
        recipeModel.find({},function(err,result){
            if(err){
                reject(err);
            }
            else{
                resolve(result);
            }
        })
    })
}

module.exports.update_recipe = function(id,data){
    return new Promise(function(resolve,reject){
        recipeModel.findByIdAndUpdate(id,data, {new:true}, function(err,result){
            if(err){
                reject(err);
            }
            else{
                resolve('success');
            }
        })
    })
}

module.exports.delete_recipe = function(id){
    return new Promise(function(resolve,reject){
        recipeModel.findByIdAndRemove(id, function(err,result){
            if(err){
                reject(err);
            }
            else{
                resolve('success');
            }
        })
    })
}