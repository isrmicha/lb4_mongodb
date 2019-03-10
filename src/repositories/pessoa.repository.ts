import {DefaultCrudRepository} from '@loopback/repository';
import {Pessoa} from '../models';
import {Lb4DataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PessoaRepository extends DefaultCrudRepository<
  Pessoa,
  typeof Pessoa.prototype.id
> {
  constructor(
    @inject('datasources.lb4') dataSource: Lb4DataSource,
  ) {
    super(Pessoa, dataSource);
  }
}
