import {EstudosApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {EstudosApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new EstudosApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server startou na ${url}`);

  return app;
}
