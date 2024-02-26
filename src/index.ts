import express from "express"
import categorieRoutes from "./Routes/categoryRoutes"
import productsRoutes from "./Routes/productsRoutes"
import swaggerUi from 'swagger-ui-express';

const PORT = 3000;

const app = express()


//Middlewares
app.use('/docs', swaggerUi.serve)
app.use(express.json())
app.use('/api',productsRoutes)
app.use('/api',categorieRoutes)


app.listen(PORT, ()=>{console.log(`Servidor levantado http://localhost:${PORT}/api`)})