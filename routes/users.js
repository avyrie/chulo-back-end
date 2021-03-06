const express = require('express');
const router = express.Router();
const ctrl = require('../controllers')


// User Routes
router.get('/', ctrl.users.index);
router.get('/:id', ctrl.users.profile);
router.put('/:id', ctrl.users.update);
router.delete('/:id', ctrl.users.destroy);
router.put('/:id/my_movies/:movieId', ctrl.users.addMovie);
router.put('/:id/my_movies/:movieId/removemovie', ctrl.users.removeMovie);
router.put('/:id/paymentdelete', ctrl.users.destroyPayment);





module.exports = router;