const mongoose = require('mongoose');

const uri = "mongodb+srv://rachit:r4ch1t@usersdb-tig02.mongodb.net/usersDB?retryWrites=true&w=majority"
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})


