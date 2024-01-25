const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/meController');

// newsController.index

// router.get('/stored/cards/:id', meController.storedCards);
router.get('/my-home', meController.myHome);
router.get('/v1/product/list/:id', meController.showMyProduct);
router.get('/v1/product/update/:id', meController.showUpdateMyProd);
router.get('/v1/product/create', meController.showCreateProd);
router.post('/v1/product/update/:id', meController.updateMyProd);
router.post('/v1/product/create', meController.createProd);
router.delete('/v1/product/delete/:id', meController.destroyProd);

module.exports = router;
