const Prods = require('../models/Prods');
const {
    mongooseToObject,
    mutipleMongooseToObject,
} = require('../../util/mongooseUtil');

class MeController {

    //[GET] /me/stored/Prods
    myHome(req, res, next) {
        Prods.find({})
            .then((prods) => {
                
                res.render('me/my-home', {
                    prods: mutipleMongooseToObject(prods),
                });
            })
            .catch(next);
    }

    //[GET] /product/:slug
    showMyProduct(req, res, next) {
        Prods.find({ author: req.params.id })
            .then((data) => {
                if (!data) {
                    res.status(500).json({
                        msg: 'Chưa có sản phẩm nào',
                    });
                } else {
                    res.render('me/storedProds', {
                        product: mutipleMongooseToObject(data),
                    });
                }
            })
            .catch(next);
    }

    //[GET] /v1/product/update/:id
    showUpdateMyProd(req, res, next){
            Prods.find({ _id: req.params.id })
            .then((data) => {
                if (!data) {
                    res.status(500).json({
                        msg: 'Lỗi',
                    });
                } else {

                    res.render('prods/updateProds', {
                        data: mutipleMongooseToObject(data),
                    });
                }
            })
       
    }

    //[GET] /v1/product/create/:id
    showCreateProd(req, res, next){
        let data = []
        res.render('prods/createProds', {
            product: mutipleMongooseToObject(data),
        });
    }

    //[POST] /myCards/:id
    updateMyProd(req, res, next) {
        let {
            params,
            name,
            description,
            price,
            author,
            image,
            phone,
        } = req.body;
        Prods.find({ _id: params })
        .then((data) => {
            if (!data) {
                const myProds = new Prods({
                    name,
                    description,
                    price,
                    author,
                    image,
                    phone,
                });
                myProds.save().then(
                    res.status(200).json({
                        msg: 'Đã khởi tạo',
                    }),
                    );
            } else {
                Prods.updateOne(
                    { _id: params },
                    {
                        name,
                        description,
                        price,
                        author,
                        image,
                        phone,
                    },
                ).then(
                    res.status(200).json({
                        msg: 'Đã cập nhât',
                    }),
                );
            }
        })
        .catch(next);
    }

    //[POST] /v1/product/update/:id
    updateMyProd(req, res, next) {
        let {
            params,
            name,
            description,
            price,
            author,
            image,
            phone,
        } = req.body;
            Prods.updateOne({ _id: params },
                {
                    name,
                    description,
                    price,
                    author,
                    image,
                    phone,
                },
                ).then(
                    res.status(200).json({
                        msg: 'Đã cập nhât',
                    }),
                )
        .catch(next);
    }

    //[POST] /v1/product/create
    createProd(req, res, next) {
        let {
            name,
            description,
            price,
            image,
            author,
            phone,
        } = req.body;
        const myProds = new Prods({
            name,
            description,
            price,
            image,
            author,
            phone,
            });
            myProds.save();
                res.status(200).json({
                    msg: 'Đã khởi tạo',
                })
    }

     //[DELETE] /v1/product/delete/:id
     destroyProd(req, res, next) {
        Prods.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new MeController();
