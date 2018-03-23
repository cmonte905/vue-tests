const AuthenticationController = require('./controllers/AuthenticationController')

const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

// App is passed in and gets information attached to it in this file
module.exports = (app) => {
  // Register end point for new users
  // Root endpoint, more of a test than anything else
  app.get('/', (req, res) => {
    res.send({
      message: 'hello world, this is root'
    })
  })

  // Register endpoint
  app.post('/register',
    AuthenticationControllerPolicy.registeration,
    AuthenticationController.register)
}
