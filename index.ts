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
  res.send('Hello World')
})

app.get('/hello', (req:Request, res:Response) => {
  // send hello world
  const params = req.query
  console.log(params)
  if (params.name) {
    res.send(`Hola ${params.name}`)
  } else {
    res.send('Hola anonimo')
  }
})

app.get('/goodbye', (req:Request, res:Response) => {
  // send hello world
  res.send('Goodbye, World')
})

// Execute APp
app.listen(port, () => console.log(`Express Server Running at http://localhost:${8000}`))
