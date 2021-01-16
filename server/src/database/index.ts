import dotenv from 'dotenv'
import { MongoClient } from "mongodb";
import { Database } from '../lib/types';

/* import mongoose from 'mongoose' */
dotenv.config()
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@cluster0.r5vky.mongodb.net/<dbname>?retryWrites=true&w=majority`;





export const connectDatabase = async (): Promise<Database> => {

  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const db = client.db("main");

  return {
    listings: db.collection("test_listings")
  };
};
