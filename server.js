const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose')

dotenv.config({ path: 'config/config.env' });

const connectDatabase = function () {
    mongoose.connect("mongodb://localhost:27017/AFFinals", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }, (error) => {
        if (error) {
            console.log('Database Error : ', error.message);
        }
    })

    mongoose.connection.once('open', () => {
        console.log('Database Connected.........!');
    })

}

connectDatabase();

app.listen(process.env.PORT, () => {
    console.log(`Server Started at PORT ${process.env.PORT}`);
})