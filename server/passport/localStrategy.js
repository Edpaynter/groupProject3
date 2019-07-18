let User = require('../database/models/user')
let LocalStrategy = require('passport-local').Strategy

let strategy = new LocalStrategy(
	
	function(username, password, done) {
		User.findOne({ username: username }, (err, user) => {
			if (err) {
				return done(err)
			}
			if (!user) {
				return done(null, false, { message: 'Sorry, Wrong username' })
			}
			if (!user.checkPassword(password)) {
				return done(null, false, { message: 'Sorry, Wrong password' })
			}
			return done(null, user)
		})
	}
)

module.exports = strategy
