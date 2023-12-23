const express = require('express');
const countOrdersByStatus = require('./apis/count_status');
const getDataDirectData = require('./apis/getData');
const bodyParser = require('body-parser');
const addIcons = require('./apis/addIcons');
const deleteDocument = require('./apis/deleteDocument');
const router = express();

router.use(bodyParser.json())

router.get('/orders_status_count', (req, res) => countOrdersByStatus(req, res));

router.get('/get_list', (req, res) => getDataDirectData(req, res));

router.post('/delete_document', (req, res) => deleteDocument(req, res));

router.post('/add_media', (req, res) => addIcons(req, res));


module.exports = router;