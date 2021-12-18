import express from "express"
import "./db/mongoose.js"
import userRoutes from "./routes/userRoutes.js"

const app = express()

app.use(express.json())
app.use(userRoutes)

const port = process.env.APP_PORT || 4040

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})

export default app