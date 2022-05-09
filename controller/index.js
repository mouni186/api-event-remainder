const controllerRepo = require('./repo/controller.repo');
const { nanoid } = require('nanoid');


const remainderSignup = async (req, res) => {

    try {
        const userData = {
            email: req.body.email,
            name: req.body.name,
            password: req.body.password,
            userNanoid: nanoid(8)
        }

        const result = await controllerRepo.remainderSignupDetails(userData);
        res.status(result.status).send(result);
    }
    catch (error) {
        console.log("Function Name:remainderSignup --> " + error);
    }
}


const remainderLogin = async (req, res) => {

    try {
        const loginData = {
            email: req.body.email,
            password: req.body.password
        }

        const result = await controllerRepo.remainderLoginDetails(loginData);
        res.status(result.status).send(result);
    }
    catch (error) {
        console.log("Function name:remainderLogin --> " + error);
    }
}


const remainderDetails = async (req, res) => {

    try {
        const remainderData = {
            userNanoid: req.body.userNanoid,
            title: req.body.title,
            description: req.body.description,
            date: req.body.date,
            time: req.body.time,
            remainderNanoid:nanoid(8)
        }

        const result = await controllerRepo.userRemainder(remainderData);
        res.status(result.status).send(result);
    }
    catch (error) {
        console.log("Function name:remainderDetails --> " + error);
    }
}

const viewRemainder = async(req,res) => {

}



module.exports = {
    remainderDetails,
    remainderSignup,
    remainderLogin
}