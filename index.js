const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')
const studentsRoutes = require('./routes/students')

// autoriser le front end à accéder au serveur
app.use(cors())
// autoriser les requêtes
app.use(express.json())

app.use('/students', studentsRoutes)

// serveur
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})