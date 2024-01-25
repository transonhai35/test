const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://vipksnb35:Hai8042k2@clone0.g4fdqdq.mongodb.net/NEW_DATABASE_CLONE_01', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('connect successfully!!');
    } catch (error) {
        console.log('connect failure!!');
    }
}

module.exports = { connect };
