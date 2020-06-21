const mongoose = require('mongoose');

const siteSchema = new mongoose.Schema({
    businessName: {
        type: String
    },
    aboutBusiness: {
        type: String
    },
    heroImage: {
        type: String
    },
    products:[{
        image:{
            type: String
        },
        name:{
            type: String
        }
    }],
    galleryImages:[{
        image:{
            type: String
        },
        title:{
            type: String
        }
    }],
    contactInfo: {
        city : String,
        state: String,
        country: String,
        email: String,
        phone: Number
    }
});

const PortfolioSite = mongoose.model('Portfolio Site', {
    phoneNumber: {
        type: Number,
        required: true
    },
    siteURL: {
        type: String, 
    },
    password: {
        type: String
    },
    siteData : siteSchema
});

module.exports = PortfolioSite