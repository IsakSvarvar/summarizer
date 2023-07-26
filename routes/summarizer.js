const express = require('express');
const router = express.Router();
const prompt = require('../middleware/prompts');
const promptsDev = require('../middleware/promptsDev');

//openAI api
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

//POST
router.post('/', prompt, async (req,res) => {
    try {
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ "role": "system", "content": req.body.prompt }, { "role": "user", "content": req.body.article }],
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

//POST
router.post('/dev',promptsDev, async (req, res) => {
    try {
        const response = "submitted prompt: " + req.body.prompt;

        res.status(200).json({
            success: true,
            response: response,
            debug: req.body.debug
        });
    } catch (error) {
        res.status(500).send({ msg: error.message });
    }
});

module.exports = router;