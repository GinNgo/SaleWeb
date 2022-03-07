import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  cuss = { id: '', name: '' };
  constructor() {}
  toggleCustomTime: boolean = false;
  toggleStatus: boolean = false;
  toggleCus: boolean = false;
  togglePeriod: boolean = false;
  persion = [
    { id: 1, name: 'Hoài Phương' },
    { id: 2, name: 'Loan Lé' },
    { id: 3, name: 'Phượng Chà Neo' },
    { id: 4, name: 'Trầm Trồ' },
    { id: 5, name: 'Tú Te Tua' },
    { id: 6, name: 'Sang Sang' },
  ];

  ngOnInit(): void {}
  addBook(data: string) {
    alert(data);
  }
}
