const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.ejs');
});

router.get('/registro', (req, res) => {
    
});

router.post('/registro', (req, res) => {
    
});

router.get('/ingreso', (req, res) => {
    
});

router.post('/ingreso', (req, res) => {
    
});

module.exports = router;