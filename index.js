require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const errorHandler = require('./middlewares/errorHandler');

const swaggerDocument = YAML.load('./openapi.yaml');
const morgan = require('morgan');

const app = express();

connectDB();

app.use(express.json());
app.use(morgan('dev'));

app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
); 

app.get('/', (req, res) => {
    res.send('API is running...');
});


app.use('/', authRoutes);

app.use('/products', productRoutes);

console.log("Registering error-test route");

app.get('/error-test', (req,res,next)=>{

    const error = new Error('Testing Global Error Handler');

    next(error);

});

app.listen(8080, () => {
    console.log('Server running on port 8080');
})

app.use(errorHandler);