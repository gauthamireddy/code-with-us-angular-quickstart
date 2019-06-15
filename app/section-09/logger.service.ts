// Observable Logger Servuce
import { Injectable } from '@angular/core';

import { Customer }  from './model';
import { createTestCustomers } from '../test-data';

@Injectable()
export class LoggerService {

  log(message: string) {
    console.log(message);
  }
}
