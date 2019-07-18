let express = require('express')
let router = express.Router()
let User = require('../database/models/user')
let passport = require('../passport')

router.post('/', (req, res) => {
    

    let { username, password } = req.body
    
    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log('Post error: ', err)
        } else if (user) {
            res.json({
                error: `Already a user with the username: ${username}`
            })
        }
        else {
            let newUser = new User({
                username: username,
                password: password
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
})

router.post(
    '/login',
    function (req, res, next) {
       
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        
        var userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
    }
)

router.get('/', (req, res, next) => {

    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})

module.exports = router