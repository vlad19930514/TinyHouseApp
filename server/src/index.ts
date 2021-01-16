import dotenv from 'dotenv'

import express, {Application} from 'express';
import { ApolloServer } from 'apollo-server-express';
import { connectDatabase } from './database';
import { typeDefs, resolvers } from './graphql/index';


dotenv.config()


const mount = async (app: Application) => {
  const db = await connectDatabase();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ db }),
  });

  server.applyMiddleware({ app, path: '/api' });
  app.listen(process.env.PORT);

  console.log(`[app] : http://localhost:${process.env.PORT}`);

  
};

mount(express());

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

 
