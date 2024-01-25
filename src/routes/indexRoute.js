const meRouter = require('./meRoute');
const siteRouter = require('./siteRoute');
const accountRouter = require('./accountRoute');

function route(app) {
    app.use('/me', meRouter);
    app.use('/account', accountRouter);
    app.use('/', siteRouter);
}

module.exports = route;
