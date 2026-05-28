const User = require("../models/User");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");


// REGISTER USER
const registerUser = async (req, res) => {

    const { name, email, password } = req.body;

    try {

        // CHECK IF USER EXISTS
        const userExists = await User.findOne({ email });

        if (userExists) {

            return res.status(409).json({
                message: "Email already exists"
            });

        }

        // HASH PASSWORD
        const hashedPassword = await bcrypt.hash(password, 10);

        // CREATE USER
        const user = await User.create({

            name,
            email,
            password: hashedPassword

        });

        // RESPONSE
        res.status(201).json({

            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)

        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};



// LOGIN USER
const loginUser = async (req, res) => {

    const { email, password } = req.body;

    try {

        // FIND USER
        const user = await User.findOne({ email });

        // CHECK PASSWORD
        if (user && await bcrypt.compare(password, user.password)) {

            res.json({

                _id: user._id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id)

            });

        } else {

            res.status(401).json({
                message: "Invalid email or password"
            });

        }

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

const getMe = async (req, res) => {

    res.json(req.user);

};

// EXPORT
module.exports = {

    registerUser,
    loginUser,
    getMe

};

