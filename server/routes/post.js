const express = require('express');
const router = express.Router();
const {getAllData, createData, deleteData} = require('../controller/post');

router.route('/').get(getAllData);
router.route('/').post(createData);
router.route('/:id').delete(deleteData);

module.exports = router;
