import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

// Configurações para o Swagger
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'EWASTE API',
        version: '1.0.0',
        description: 'Informações sobre pontos de coleta de lixo eletrônico',
    },
    servers: [
        {
            url: 'https://squad4-projeto-final-m4.onrender.com',
            description: 'URL from the API',
        },
    ],
};

const options = {
    swaggerDefinition,
    apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

const setupSwaggerDocs = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log('Swagger Docs disponível em https://squad4-projeto-final-m4.onrender.com/api-docs');
};

export default setupSwaggerDocs;
