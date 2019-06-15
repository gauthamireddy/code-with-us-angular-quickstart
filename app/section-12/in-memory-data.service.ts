import { InMemoryDbService } from 'angular-in-memory-web-api';

import { createTestCustomers } from '../test-data';

export class InMemoryDataService implements InMemoryDbService {
  states    = ['California', 'Illinois', 'Jalisco', 'Quebec', 'FCCCCC'];
  createDb() {
    return { customers: createTestCustomers(), states: this.states };
  }
}
