const userSchema = require('../models/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET;

const login = (req, res) => {
    try {
        userSchema.findOne({ email: req.body.email }, (error, user) => {
            if(!user) {
                return res.status(401).send({
                    message: "Usuário não encontrado!",
                    email: `${req.body.email}`
                })
            }

            const validPassword = bcrypt.compareSync(req.body.password, user.password)

            if(!validPassword) {
                return res.status(401).send({
                    message: "Login não autorizado!"
                })
            }

            const token = jwt.sign({ name: user.name }, SECRET)

            res.status(200).send({
                message: "Login autorizado com sucesso!",
                token
            })
        })
    } catch(e) {
        console.error(e)
    }
};

module.exports = {
    login
};