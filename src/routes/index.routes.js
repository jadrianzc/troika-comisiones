const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.render('index');
});

router.get('/factura', (req, res) => {
	res.render('factura');
});

router.get('/informe', (req, res) => {
	res.render('index');
});

module.exports = router;
