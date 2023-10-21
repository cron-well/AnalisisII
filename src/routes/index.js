const router = require('express').Router();
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
    res.render('ingreso.ejs'); 
});

router.post('/ingreso', passport.authenticate('local-ingreso', {
    successRedirect: '/perfil',
    failureRedirect: '/ingreso',
    passReqToCallback: true
}));

router.get('/perfil', isAuthenticated, (req, res, next) => {
    res.render('perfil.ejs');        
});

router.get('/logout', (req, res, next) => {
    req.logout(function(err) {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});

function isAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
      return next();
    }
  
    res.redirect('/')
}

module.exports = router;