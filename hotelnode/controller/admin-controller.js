module.exports.checkAuthentication = function(req,res){
    if(!req.body.email || !req.body.pass){
        console.log(req.body.pass);
       return res.json({
            message:'parameter invalid',
            status:'error'
        })
    }

    var authenticationModel = require('../model/adminModel');
    authenticationModel.findOne({email:req.body.email,password:req.body.pass}).then(function(result){
        if(!result){
           return res.json({
               status:'error',
               message:'incorrect details'
           }) 
        }
        
        res.json({
            status:'success',
            message:'successfully login'

        })
    })

  /*  authenticationModel.create_authentication(data).then(function(result){
      if(result !== 'success'){
          return res.json({
              message:'invalid',
              status:'error'
          })
      }
      res.json({
          message:'valid',
          status:'success'
      })
    })*/  
}

module.exports.get_recipe = function(req,res){
    var recipeModel = require('../model/recipeModel');  
    recipeModel.get_recipe().then(function(result){
        if(result){
         return  res.json({
                status:'success',
                message:'successfully found',
                recipes:result
            })
        }
        res.json({
            status:'error',
            message:'not found'
        })
    })
 }

 module.exports.update_recipe = function(req,res){
     if(!req.body.category || !req.body.recipename || !req.body.recipeprice || !req.body.imagepath){
        return res.json({
            message:'parameter invalid',
            status:'error'
        })
     }

     else{
        data = {
            category:req.body.category,
            recipename:req.body.recipename,
            recipeprice:req.body.recipeprice,
            imagepath:req.body.imagepath
        }
        var recipeModel = require('../model/recipeModel');  
        var id = req.params.id;
        recipeModel.update_recipe(id,data).then((result)=>{
            if(result == 'success'){
                return  res.json({
                    status:'success',
                    message:'successfully update'
                })
            }
            res.json({
                status:'error',
                message:'not found'
            })
        })
     }
 }

 module.exports.delete_recipe = function(req,res){
    var recipeModel = require('../model/recipeModel'); 
    var id = req.params.id;
    recipeModel.delete_recipe(id).then((result)=>{
        if(result == 'success'){
            return  res.json({
                status:'success',
                message:'successfully deleted'
            })
        }
        res.json({
            status:'error',
            message:'not found'
        })
    }) 
 }



