const express = require("express");
const port = 3001;
const bing = express();
const cors = require("cors");
const connectToDB = require("./db");
const userModel = require("./models/user.model");
const jwt = require('jsonwebtoken');


async function generateAuthToekn() {
    try {
        let token = jwt.sign({
            email : email
        },
        secret = "123"
        )
    } catch (error) {
        console.log(error);
    }
}

connectToDB();
bing.use(express.json());
bing.use(cors());

bing.listen(port, console.log("server is listening on PORT - ", port));
bing.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    const existUser = await userModel.findOne({ email: email });
    if (existUser) {
        res.send({
            message: "user already exists"
        })
    }

    else {
        const newUser = new userModel({
            name, email, password
        })
        newUser.save(err => {
            if (err) {
                res.send(err)
            }
            else {
                res.send({
                    message: "Account created successfully",
                    token : 123})
            }

        })
    }
})

bing.post('/login', async (req, res) => {
    const {email, password} = req.body
    const user = await userModel.findOne({email : email})

    if(!user){
        return res.send({
            message : "user does not exist"
        })
    }

    if(password !== user.password) {
        return res.send({
            message : "incorrect password"
        })
    }

    const token = await user.generateAuthToekn();

    res.send({
        message : "login successfully",
        user
    })
})