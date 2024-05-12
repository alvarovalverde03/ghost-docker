# Ghost blog setup

This project uses Docker Compose to run a Ghost blog in development and production environments. It also uses PM2 to manage the application processes.


## 📋 Requirements

To run this project, you will need:

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/)
- [PM2](https://pm2.keymetrics.io/) 

Please ensure that you have these installed before proceeding.


## 🛠️ Development
To start the development environment, run:

```bash
npm run start:dev
```

This will start the Docker Compose setup for development.


## 🚀 Production
Before running the production environment, make sure to complete the `/environments/.env.prod` file with your production environment variables.

To start the production environment, run:
```bash
npm run start:prod
```

This will start the Docker Compose setup for production.


## 🔄 Using PM2
This project uses PM2 to manage the application processes. You can start the development or production environment with PM2 using the following commands:

For development:
```bash
pm2 start app.config.js --only dev
```

For production:
```bash
pm2 start app.config.js --only prod
```

