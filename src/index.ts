import express, { Request, Response } from 'express'
import { router } from './routes/loginRoutes'
import bodyParser from 'body-parser'
import cookieSession from 'cookie-session'

const app = express()

app.use(bodyParser.urlencoded({ extended: true })) // middleware add a body property to a request
app.use(cookieSession({ keys: ['test'] })) 
app.use(router)

app.get('/', (req: Request, res: Response) => {
    res.send(`
        <div>
            <h1>Hi There!</h1>
        </div>
    `)
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})
 