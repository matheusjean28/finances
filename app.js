const express = require('express')
const app = express()
const port = 3000

const userCheck = require('./user_check/user_check')
app.use(express.json())
app.use('/', userCheck)


app.listen(port, () => {
  console.log(`App is running on port ${port}`)
})
