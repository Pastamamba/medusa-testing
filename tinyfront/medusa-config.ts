import {defineConfig as mikroOrmDefineConfig} from '@mikro-orm/postgresql';
import path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, `.env.${process.env.NODE_ENV || 'development'}`) });

const ormConfig = mikroOrmDefineConfig({
  dbName: process.env.DB_NAME || 'medusa-db',
  user: process.env.DB_USER || 'medusa_user',
  password: process.env.DB_PASSWORD || 'password',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5436,
  entities: [path.resolve(__dirname, 'models')],
  migrations: {
    path: path.resolve(__dirname, 'migrations'),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  debug: process.env.NODE_ENV !== 'production',
});

// Export Medusa configuration with ORM config
module.exports = mikroOrmDefineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL || 'postgres://medusa_user:password@localhost:5436/medusa-db',
    redisUrl: process.env.REDIS_URL || 'redis://localhost:6379',
    http: {
      storeCors: process.env.STORE_CORS || 'http://localhost:8000',
      adminCors: process.env.ADMIN_CORS || 'http://localhost:9000',
      authCors: process.env.AUTH_CORS || 'http://localhost:7000',
      jwtSecret: process.env.JWT_SECRET || 'supersecret',
      cookieSecret: process.env.COOKIE_SECRET || 'supersecret',
    },
    orm: ormConfig, // Integrate Mikro-ORM configuration
  },
  modules: [
    // Lisää olemassa olevat moduulisi täällä
    // Esimerkiksi:
    // {
    //   resolve: "@medusajs/medusa-plugin-meilisearch",
    //   options: { ... }
    // }
  ],
});
