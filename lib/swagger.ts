import swaggerJSDoc from 'swagger-jsdoc';

export const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Referral Intake API',
    version: '1.0.0',
    description: 'API documentation for the Referral Intake form',
  },
  servers: [
    {
      url: 'http://localhost:3000', // Update this in production
    },
  ],
};

export const swaggerOptions = {
  swaggerDefinition,
  apis: ['./pages/api/**/*.ts'], // Path to your API route definitions
};

export const swaggerSpec = swaggerJSDoc(swaggerOptions);