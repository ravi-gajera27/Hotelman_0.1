module.exports.add_recipe = function(req,res){
    if(!req.body.category || !req.body.recipename || !req.body.recipeprice || !req.body.imagepath){
      return  res.json({
            message:'invalid parameter',
            status:'error'
        })
    }

    data = {
        category:req.body.category,
        recipename:req.body.recipename,
        recipeprice:req.body.recipeprice,
        imagepath:req.body.imagepath
    }

    var recipeModel = require('../model/recipeModel');
    recipeModel.add_recipe(data).then(function(result){
        if(result == 'success'){
            return res.json({
                message:'successfully added',
                status:'success'
            })
        }

        res.json({
            message:'not added',
            status:'error'
        })
    })
} 

module.exports.get_recipe = function(req,res){
   var recipeModel = require('../model/recipeModel');  
   var type = req.params.type; 
   recipeModel.gets_recipe(type).then(function(result){
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