import express from 'express'
import cors from 'cors'
import { AdminRoute } from './Routes/AdminRoute.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/auth', AdminRoute)

app.listen(1000, () => {
    console.log('Server is running')
    })