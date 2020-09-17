const router = require('express').Router();
var recipeController = require('../controller/recipeContoller')
router.route('/get_recipe/:type').get(recipeController.get_recipe);
module.exports = router;