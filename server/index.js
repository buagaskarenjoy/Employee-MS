import express from 'express'
import cors from 'cors'
import { AdminRoute } from './Routes/AdminRoute.js'

const app = express()
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ['GET', 'POST', 'PUT'],
    credentials: true
}))
app.use(express.json())
app.use('/auth', AdminRoute)

app.listen(1000, () => {
    console.log('Server is running')
    })