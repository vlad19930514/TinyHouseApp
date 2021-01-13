import express from 'express'
import {ApolloServer} from 'apollo-server-express'
import {schema} from './graphql'
/* import bodyParser from 'body-parser'
import {listings} from './listings' */


const app = express()
const port = 9000 

const server = new ApolloServer({schema})
server.applyMiddleware({app, path:'/api'})

app.listen(port)
console.log(`[app]: http://localhost:${port}`)




/* app.get("/listings", (_req, res)=>{
   return res.send(listings)
})
 */
/* app.post("/delete-listing", (req,res)=>{
    const id:string = req.body.id

    for (let i=0; i<listings.length; i++){
if (listings[i].id === id){
    return res.send(listings.splice(i,1))
}
    }
    return res.send("failed to delete")
}) */

 
