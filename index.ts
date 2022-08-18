import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
const port: string | number = process.env.PORT || 8000

/**
 * define first route
 */
app.get('/', (req:Request, res:Response) => {
  // send hello world
  res.send('APP Express +nodemon +TS + Swagger')
})

app.get('/hello', (req:Request, res:Response) => {
  // send hello world
  res.send('Hello World ')
})

// Execute APp
app.listen(port, () => console.log(`Express Server Running at http://localhost:${8000}`))
