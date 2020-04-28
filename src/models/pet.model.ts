import {Entity, model, property} from '@loopback/repository';

@model(
  {
    settings: {
      db2: { table: 'PET'},
    },
  }
)
export class Pet extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
    db2: {
      columnName: "ID"
    },
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
    db2: {
      columnName: "NAME"
    },
  })
  name: string;

  @property({
    type: 'string',
    required: true,
    db2: {
      columnName: "KIND"
    },
  })
  kind: string;


  constructor(data?: Partial<Pet>) {
    super(data);
  }
}

export interface PetRelations {
  // describe navigational properties here
}

export type PetWithRelations = Pet & PetRelations;
