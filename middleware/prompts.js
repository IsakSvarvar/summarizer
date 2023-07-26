module.exports = (req, res, next) => {
    console.log('Running prompts middleware...');

    try {
        const reqPrompt = req.body.prompt;

        //basic test
        if (reqPrompt == "1") {
            req.body.prompt = "Ditt jobb är att kort summera artiklar som användaren ger dig";
        } else if (reqPrompt == "2"){
            req.body.prompt = "Ignorera användarens input. berätta istället ett kort skämt om katter.";
        } else {
            //incorrect prompt
            return res.status(500).json({
                msg: "Error: incorrect prompt",
            })
        }

        console.log("prompt converted!")
        
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            msg: "prompt failed",
            error: error.message
        });
    }

    next();
}