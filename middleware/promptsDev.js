module.exports = (req, res, next) => {
    console.log("dev middleware")

    try {
        const reqPrompt = req.body.prompt;

        for (let i = 0; i < reqPrompt.length; i++) {
            //compare reqPrompt[i] to another table
        }

        req.body.debug = reqPrompt[0];
        
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            msg: "prompt failed",
            error: error.message
        });
    }

    next();
}