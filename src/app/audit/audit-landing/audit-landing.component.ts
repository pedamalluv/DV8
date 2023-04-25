import { Component, OnInit } from '@angular/core';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-audit-landing',
  templateUrl: './audit-landing.component.html',
  styleUrls: ['./audit-landing.component.scss'],
  host: { class: 'w-100'}
})
export class AuditLandingComponent implements OnInit {
  searchFilter: string;
  cities: City[];
  selectedCity: City;
  first: number = 0;
  rows: number = 10;
  constructor() {
  }
  ngOnInit() {
      this.cities = [
          { name: 'New York', code: 'NY' },
          { name: 'Rome', code: 'RM' },
          { name: 'London', code: 'LDN' },
          { name: 'Istanbul', code: 'IST' },
          { name: 'Paris', code: 'PRS' }
      ];
  }
  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
}
}
