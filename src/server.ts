import express from 'express'

const app = express()

app.listen(3306, () => {
  console.log('server is running on port 3306')
})
