import express from 'express'
const app = express()
const port = 9000

const one:number=1
app.get('/', (req,res)=>res.send(`'hello world' ${one}`))

 
app.listen(port)
console.log(`[app]: http://localhost:${port}`)