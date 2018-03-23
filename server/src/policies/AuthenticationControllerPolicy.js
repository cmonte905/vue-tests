const Joi = require('joi');  // Used for backend validation

const AuthenticationController = require('module');

module.exports = {
  registeration (req, res, next) {
    // Schema gets used as a template to compare what we want to validate
    // such as emails and passwords
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }

    const {error, value} = Joi.validate(req.body, schema)

    if(error){
      switch (error.details[0].context.key) {
        case 'email':
            res.status(400).send({
              error: 'You must provide a valid email address.'
            })
          break;
        case 'password':
            res.status(400).send({
              error: `The password you provided failed to match the following rules:
              <br>
              1. It must contain only the following characters: a lower case, an upper case and a numerical vaule
              <br>
              2. It must be at least 8 characters long and shorter than 32`
            })
          break;
        default:
          res.status(400).send({
            error: 'Invalid registeration information'
          })

      }
    }
    else {
      next()
    }
  }
}
