import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Pessoa} from '../models';
import {PessoaRepository} from '../repositories';

export class PessoaController {
  constructor(
    @repository(PessoaRepository)
    public pessoaRepository : PessoaRepository,
  ) {}

  @post('/pessoas', {
    responses: {
      '200': {
        description: 'Pessoa model instance',
        content: {'application/json': {schema: {'x-ts-type': Pessoa}}},
      },
    },
  })
  async create(@requestBody() pessoa: Pessoa): Promise<Pessoa> {
    return await this.pessoaRepository.create(pessoa);
  }

  @get('/pessoas/count', {
    responses: {
      '200': {
        description: 'Pessoa model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Pessoa)) where?: Where,
  ): Promise<Count> {
    return await this.pessoaRepository.count(where);
  }

  @get('/pessoas', {
    responses: {
      '200': {
        description: 'Array of Pessoa model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Pessoa}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Pessoa)) filter?: Filter,
  ): Promise<Pessoa[]> {
    return await this.pessoaRepository.find(filter);
  }

  @patch('/pessoas', {
    responses: {
      '200': {
        description: 'Pessoa PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() pessoa: Pessoa,
    @param.query.object('where', getWhereSchemaFor(Pessoa)) where?: Where,
  ): Promise<Count> {
    return await this.pessoaRepository.updateAll(pessoa, where);
  }

  @get('/pessoas/{id}', {
    responses: {
      '200': {
        description: 'Pessoa model instance',
        content: {'application/json': {schema: {'x-ts-type': Pessoa}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Pessoa> {
    return await this.pessoaRepository.findById(id);
  }

  @patch('/pessoas/{id}', {
    responses: {
      '204': {
        description: 'Pessoa PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() pessoa: Pessoa,
  ): Promise<void> {
    await this.pessoaRepository.updateById(id, pessoa);
  }

  @put('/pessoas/{id}', {
    responses: {
      '204': {
        description: 'Pessoa PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() pessoa: Pessoa,
  ): Promise<void> {
    await this.pessoaRepository.replaceById(id, pessoa);
  }

  @del('/pessoas/{id}', {
    responses: {
      '204': {
        description: 'Pessoa DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.pessoaRepository.deleteById(id);
  }
}
