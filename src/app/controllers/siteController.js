const Prods = require('../models/Prods');
const { mutipleMongooseToObject } = require('../../util/mongooseUtil');

class SiteController {
    //[GET] /
    home(req, res, next) {
        Prods.find({})
            .then((prods) => {
                res.render('home', {
                    prods: mutipleMongooseToObject(prods),
                });
            })
            .catch(next);
    }

}

module.exports = new SiteController();
