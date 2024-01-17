const express = require('express');
const route6 = express.Router();
const PastQuestionsSchema = require('../models/pastQuestionsSchema');



route6.post('/create', async (req, res) => {
    try {
        
        const newPasco = await PastQuestionsSchema.create(req.body);
        res.status(200).json(newPasco);  


    }catch(error) {
        console.log(error.message);
    }
});


module.exports = route6;
