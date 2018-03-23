 const {User} = require('../models');

module.exports = {
  async register (req, res) {

    try {
      const user = await User.create(req.body)
      res.send({
        user: user.toJSON(),
        message: `${req.body.email}: hello world, this is post, this is from register from a controller`,
        password: `${req.body.password}`
      })
    } catch (e) {
      res.status(400).send({
        error: 'This email is already registered'
      })
    }
  }
}
