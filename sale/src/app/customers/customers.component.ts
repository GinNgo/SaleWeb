import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  public listCus = [
    {
      name: 'Phượng Chà Neo',
      acronym: 'PC',
      phone: '0365416555',
      color: '#D97C76',
    },
    {
      name: 'Hoài Phương',
      acronym: 'HP',
      phone: '0360016575',
      color: '#3A7F0D',
    },
    { name: 'Loan lé', acronym: 'LL', phone: '0360016012', color: '#AB79BD' },
    { name: 'Trầm Trồ', acronym: 'TT', phone: '0360016999', color: '#4398E8' },
    { name: 'Tú Te Tua', acronym: 'TT', phone: '0360016999', color: '#9D8F11' },
    { name: 'Sương Sa', acronym: 'SS', phone: '0360016039', color: '#7D3F7E' },
    { name: 'Giang Hồ', acronym: 'GH', phone: '0360016039', color: '#DDD85B' },
    { name: 'Tiêu Tùng', acronym: 'TT', phone: '0360016039', color: '#D20404' },
    { name: 'Anh Oách', acronym: 'AO', phone: '0360016039', color: '#F37CD9' },
  ];

  constructor() {}

  ngOnInit(): void {}
  getCus(data: any) {
    let a = data;
    console.log(a);
  }
}
