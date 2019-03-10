import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './lb-4.datasource.json';

export class Lb4DataSource extends juggler.DataSource {
  static dataSourceName = 'lb4';

  constructor(
    @inject('datasources.config.lb4', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
