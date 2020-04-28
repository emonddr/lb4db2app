import {DefaultCrudRepository} from '@loopback/repository';
import {Pet, PetRelations} from '../models';
import {Db2DsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PetRepository extends DefaultCrudRepository<
  Pet,
  typeof Pet.prototype.id,
  PetRelations
> {
  constructor(
    @inject('datasources.db2ds') dataSource: Db2DsDataSource,
  ) {
    super(Pet, dataSource);
  }
}
