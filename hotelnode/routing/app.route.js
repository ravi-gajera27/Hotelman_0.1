const router = require('express').Router();
var adminController = require('../controller/admin-controller');
var recipeController = require('../controller/recipeContoller')
router.route('/authentication').post(adminController.checkAuthentication);
router.route('/add_recipe').post(recipeController.add_recipe);
router.route('/get_recipe').get(adminController.get_recipe);
router.route('/update_recipe/:id').post(adminController.update_recipe);
router.route('/delete_recipe/:id').delete(adminController.delete_recipe);

module.exports = router;