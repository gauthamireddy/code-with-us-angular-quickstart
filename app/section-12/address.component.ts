import { Component, Input, OnInit } from '@angular/core';
import { DataService }   from './data.service';
import { Address } from './model';

@Component({
  moduleId: module.id,
  selector: 'my-address',
  templateUrl: 'address.component.html'
})
export class AddressComponent implements OnInit() {
  @Input() address: Address;
  states: string[];

  constructor( private dataService: DataService) {}

  regions   = ['East', 'Midwest', 'North', 'South', 'West'];

  ngOnInit() {
    this.getStates();
  }

  getStates() {
    this.dataService.getStates().subscribe((states) => {
      this.states = states;
    })
  }

}


