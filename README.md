# lb4db2app

A small LoopBack 4 app using `loopback-connector-db2` connector to access a DB2 database

# Set up

## Update datasource config JSON

Update the values in `src/datasources/db-2-ds.datasource.config.json` so that you can successfully connect to your DB2 database.

```json
{
  "name": "db2ds",
  "connector": "db2",
  "host": "the ip address",
  "port": 50000,
  "user": "db2inst1",
  "password": "your password",
  "database": "testdb",
  "schema": "db2inst1"
}

```

## Look at the model and property settings

Open the `src/models/pet.model.ts` file and look at the model and property settings with regards to `db2`.
DB2 needs to have **uppercase** `table` and `columnName` values. See [Data Mapping Properties](https://loopback.io/doc/en/lb4/Model.html#data-mapping-properties)

```ts
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
```

# Running the application

If the table does NOT exist in the database yet, you must run

```sh
npm run migrate
```

to create the table in the database. You only need to do this once.

See [Database Migrations](https://loopback.io/doc/en/lb4/Database-migrations.html#overview)


To run the application

```sh
npm start
```

You will see:

```sh
Server is running at http://[::1]:3000
Try http://[::1]:3000/ping
```

- Open your browser to : http://[::1]:3000
- Click on API Explorer 
- Play with the REST API


## Discovering models from existing database

Instead of creating models by hand, and then having the tables automatically created by LoopBack 4, you can
also `discover` models from existing database tables using the `lb4 discover` command. Please see [Discovering models from relational databases](https://loopback.io/doc/en/lb4/Discovering-models.html) for details.

