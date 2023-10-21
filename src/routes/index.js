const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', (req, res) => {
    res.render('index.ejs');
});

router.get('/registro', (req, res) => {
    res.render('registro.ejs')
});

router.post('/registro', passport.authenticate('local-registro', {
    successRedirect: '/perfil',
    failureRedirect: '/registro',
    passReqToCallback: true
}));

router.get('/ingreso', (req, res) => {
    
});

router.post('/ingreso', (req, res) => {
    
});

router.get('/perfil', (req, res) => {
    res.render('perfil.ejs');        
});


module.exports = router;