const CRUDOperationInDynamodb = require('./repo/CRUD.repo');



const signupDetails = async (data) => {
    let returnObject;

    try {
        const param = {
            TableName: "Remainder-Signup",
            Key: {
                email: data.email
            }
        }

        const result = await CRUDOperationInDynamodb.getRecordInDynamodb(param);

        if (result.Item) {
            returnObject = {
                message: "You are already signed in",
                status: 504
            }
        }
        else {
            const params = {
                TableName: "Remainder-Signup",
                Item: {
                    email: data.email,
                    name: data.name,
                    password: data.password,
                    userNanoid: data.userNanoid
                }
            }

            await CRUDOperationInDynamodb.createRecordInDynamodb(params);
            returnObject = {
                message: "user created succesfully",
                status: 200
            }
        }
    }
    catch (error) {
        returnObject = {
            message: "Invalid user",
            status: 500
        }
    }
    return returnObject;
}


const loginDetails = async (data) => {

    let returnObject;

    try {
        const params = {
            TableName: "Remainder-Signup",
            Key: {
                email: data.email
            }
        }

        const result = await CRUDOperationInDynamodb.getRecordInDynamodb(params);
        if (result.Item) {
            if (result.Item.password == data.password) {
                returnObject = {
                    userNanoid: result.Item.userNanoid,
                    status: 200
                }
            }
            else {
                returnObject = {
                    message: "Incorrect Username or Password",
                    status: 504
                }
            }
        }

    }
    catch (error) {
        console.log("Function name:loginDetails -->" + error);
    }
    return returnObject;
}


const getUserDetails = async (data) => {

    let returnObject;

    try {
        const param = {
            TableName: "Remainder-Signup",
            Key: {
                userNanoid: data.userNanoid
            }
        }
        const isPresent = await CRUDOperationInDynamodb.getRecordInDynamodb(param);
        if (isPresent.Item) {
            returnObject = true;
        }
        else {
            returnObject = false;
        }

    }
    catch (error) {
        console.log("Function name: getUserDetails --> " + error)
    }
    return returnObject;

}


const userRemainderDetails = async (data) => {

    let returnObject;

    try {
        if (getUserDetails(data)) {
            const params = {
                TableName: "User-Remainder-Details",
                Item: {
                    userNanoid: data.userNanoid,
                    title: data.title,
                    description: data.description,
                    date: data.date,
                    time: data.time,
                    remainderNanoid:data.remainderNanoid
                }
            }

            const result = await CRUDOperationInDynamodb.createRecordInDynamodb(params);
            returnObject = {
                message: "Remainder added successfully",
                status: 200
            }
        }
        else {
            returnObject = {
                message: "Invalid user id",
                status: 504
            }
        }
    }
    catch (error) {
        console.log("Function name: userRemainderDetails -->" + error);
    }
    return returnObject;
}




module.exports = {
    signupDetails,
    userRemainderDetails,
    loginDetails
}