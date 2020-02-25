const jwt = require('jsonwebtoken')
const fs = require('fs')

// const privateKey = 'Web server by NodeJS'
const privateKey = fs.readFileSync(__dirname + '/../configs/private.key')
exports.authorization = (req, res, next) => {
    const verify = true
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if(verify) {
        if(token == null)
            return res.sendStatus(401)

        jwt.verify(token, privateKey, function(err, decoded) {
            if(err)
                return res.sendStatus(403)
            next()
        })
    }
    else
        next()
}

exports.genToken = (payload) => {
    return jwt.sign(payload, privateKey)
}