import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Pessoa extends Entity {
  @property({
    id: true,
    description: 'The unique identifier for a product',
  })
  _id: number;

  @property({
    type: 'string',
    required: true,
  })
  nome: string;

  @property({
    type: 'number',
    required: true,
  })
  idade: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Pessoa>) {
    super(data);
  }
}
