const mongoose = require('mongoose')
const dbName = 'recipe-app'

// connect to the database
mongoose.connect(`mongodb://localhost/${dbName}`)
  .then(console.log(`Connected to the ${dbName} database`))
  .catch(console.error.bind(console, 'connection error:'))
})
