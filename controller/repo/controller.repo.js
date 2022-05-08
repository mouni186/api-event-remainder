const dynamodbController = require('../../dynamodb');


const remainderSignupDetails = async (data) => {

    try {
        const response = await dynamodbController.signupDetails(data);
        return response;
    }
    catch (error) {
        console.log("Function name:remainderSignupDetails --> " + error);
    }
}

const remainderLoginDetails = async (data) => {

    try {
        const response = await dynamodbController.loginDetails(data);
        return response;
    }
    catch (error) {
        console.log("Function name:remainderLoginDetails -->" + error);
    }
}


const userRemainder = async (data) => {

    try {
        const response = await dynamodbController.userRemainderDetails(data);
        return response;
    }
    catch (error) {
        console.log("Function name:userRemainder --> " + error);
    }
}



module.exports = {
    userRemainder,
    remainderSignupDetails,
    remainderLoginDetails
}