const express = require('express');
const router = express.Router();

//openAI api
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

//GET
router.get('/', async (req,res) => {
    try {
        const response = await openai.retrieveModel("text-davinci-003");
        //const response = "poop"
        res.status(200).json({
            success: true,
            msg: response,
        });
    } catch (error) {
        res.status(500).send({msg: error.message});
    }
});

module.exports = router;