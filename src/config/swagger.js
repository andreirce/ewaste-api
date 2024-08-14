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
            url: 'http://localhost:4000',
            description: 'Servidor local',
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
    console.log('Swagger Docs disponível em http://localhost:4000/api-docs');
};

export default setupSwaggerDocs;
