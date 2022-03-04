const express = require('express');
const Repuestos = require('../models/Repuestos');
const router = express.Router();

router.get('/', (req, res) => {
	res.render('index');
});

router.get('/factura', async (req, res) => {
	res.render('factura');
});

router.post('/factura', async (req, res) => {
	const { codigo } = req.body;
	const repuesto = await Repuestos.find({ codigo }).lean();
	const [item] = repuesto;
	console.log(item);

	res.render('factura', { item: item });
});

router.get('/informe', (req, res) => {
	res.render('index');
});

module.exports = router;
