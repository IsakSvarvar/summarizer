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
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: req.body.messages,
        });
        //const response = "poop"
        /*
        console.log(response);
        console.log("***short version: " + response.data.choices[0].message);
        */
        res.status(200).json({
            success: true,
            response: response.data.choices[0].message,
        });
    } catch (error) {
        res.status(500).send({msg: error.message});
    }
});

module.exports = router;