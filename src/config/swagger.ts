import swaggerJSDoc from 'swagger-jsdoc';
import { env } from './env.js';

const swaggerDefinition: swaggerJSDoc.SwaggerDefinition = {
  openapi: '3.0.3',
  info: {
    title: 'API Secretaria',
    version: '1.0.0',
    description:
      'Simple study REST API built with Node.js, TypeScript and the MVC pattern. ' +
      'This documentation is generated from JSDoc comments on the route files.',
  },
  servers: [
    {
      url: `http://localhost:${env.PORT}/api`,
      description: 'Local development server',
    },
  ],
  tags: [
    { name: 'Health', description: 'Service health check' },
    { name: 'Tasks', description: 'Task management endpoints' },
  ],
  components: {
    parameters: {
      TaskId: {
        name: 'id',
        in: 'path',
        required: true,
        description: 'Task UUID',
        schema: { type: 'string', format: 'uuid' },
      },
    },
    schemas: {
      Task: {
        type: 'object',
        properties: {
          id: { type: 'string', format: 'uuid', example: '3f2b1a10-...' },
          title: { type: 'string', example: 'Study TypeScript' },
          done: { type: 'boolean', example: false },
          createdAt: { type: 'string', format: 'date-time' },
        },
        required: ['id', 'title', 'done', 'createdAt'],
      },
      CreateTaskInput: {
        type: 'object',
        properties: {
          title: { type: 'string', example: 'Study TypeScript' },
        },
        required: ['title'],
      },
      UpdateTaskInput: {
        type: 'object',
        properties: {
          title: { type: 'string', example: 'Study TypeScript (updated)' },
          done: { type: 'boolean', example: true },
        },
      },
      Error: {
        type: 'object',
        properties: {
          error: {
            type: 'object',
            properties: {
              message: { type: 'string' },
            },
          },
        },
      },
    },
  },
};

const options: swaggerJSDoc.Options = {
  swaggerDefinition,
  apis: ['./src/routes/*.ts', './dist/routes/*.js'],
};

export const swaggerSpec = swaggerJSDoc(options);
