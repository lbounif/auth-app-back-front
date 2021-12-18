import User from "../models/user.js"

const registerUser = async(req, res) => {
    try {
        const {name, email, password} = req.body

        if(!(name && email && password)) {
            return res.status(400).json({
                message: "All inputs are required"
            })
        }
        const oldUser = await User.findOne({email})
        console.log("-----OldUser is: ", oldUser)
        if(oldUser) {
            return res.status(409).json({
                message: "User already exist. Please Login"
            })
        }
        //create a user
        const user = new User(req.body)

        // add token 
        const token = await user.generateAuthToken()
        console.log("token: ", token)

        res.status(201).json({
            message: "User created successfully",
            data: {
                user,
                token
            }
        })
    }catch(e){
        console.log(`Error: ${e}`)
        //send error response to client
        res.status(500).json({
            message: "Internal server error",
            error: e
        })
      }
}

const loginUser = async(req, res) => {
    try {
        const {email, password} = req.body
        const user = await User.findByCredentials(email, password)
        if(!user) {
            res.status(404).json({
                message: "User does not exist",
                data: {}
            })
        }
        const token = await user.generateAuthToken()
        res.status(200).json({
            message: "Logged successfully",
            data: {user, token}
        })

    } catch(err){
        console.log(`Error: ${err}`)
        //send error response to client
        res.status(500).json({
            message: "Internal server error",
            data: {}
        })
    }
   
}

export {
    registerUser,
    loginUser
}