import express from "express"
import accountsRouter from "./routes/accounts.js"
const app = express() // instancia do express
import {promises as fs} from "fs";

const { readFile, writeFile } = fs
app.use("/account", accountsRouter);

app.use(express.json()); //retorno que espero do express tipo json

app.listen(3333, async()=> {
  try {
    await readFile("accounts.json")
    
  } catch (error) {
    const initialJson = {
      nextId: 1,
      accounts: []
    }
    writeFile("accounts.json", JSON.stringify(initialJson)).then(()=>{
      console.log("API STARTED! and file Created")
    }).catch(error => {
      console.log(error)
    })
  }
  console.log("APi Started")
});

