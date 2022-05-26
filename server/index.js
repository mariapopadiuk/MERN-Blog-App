const express = require('express')
const app = express()
const port = 4000

app.get('/api/blogs', (req, res) => {
  res.send("[{ title: '123', tex: 'sex', id: 1 }, { title: '123', tex: 'sex', id: 2 }, { title: '123', tex: 'sex', id: 3 }]")
})
app.get('/api/coments', (req, res) => {
  res.send("[{ title: 'ffgsfg', tex: 'sex', id: 1 }, { title: 'sgfdgdf', tex: 'sex', id: 2 }, { title: 'dgf', tex: 'sex', id: 3 }]")
})
app.listen(port, () => {
  console.log(`Example   app listening on port ${port}`)
})