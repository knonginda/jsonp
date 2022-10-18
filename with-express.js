let express = require('express')
let app = express()


app.get('/say', (req, res) => {
  let { wd, cb } = req.query
  console.log(wd);
  res.end(`${cb}('Hello Jett')`)
})
app.listen(3000)