import { Component, Input } from '@angular/core';

import { Address } from './model';

@Component({
  moduleId: module.id,
  selector: 'address-detail',
  templateUrl: 'address-detail.component.html'
})

export class AddressDetailComponent {
  @Input()
  address: Address;

  regions   = ['East', 'Midwest', 'North', 'South', 'West'];
  states    = ['California', 'Illinois', 'Jalisco', 'Quebec'];
}
