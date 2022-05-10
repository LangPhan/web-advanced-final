const Account = require('../models/Accounts')

class SiteController{
    //[GET] / 
    index(req,res,next){
        res.render('index',{title:'Hello'})
    }
    //[GET]/show
    show(rep,res,next){
        Account.find({})
        .then(accounts => res.render('index',{accounts,title:'Hello'}))
        .catch(next)       
    }
}

module.exports = new SiteController