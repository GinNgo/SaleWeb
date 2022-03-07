import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Routes } from '@angular/router';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent implements OnInit {
  public listOrders = [
    {
      orderId: 1,
      name: 'Phượng Chà Neo',
      acronym: 'PC',
      period: { status: 'Đã đặt', color: '#7C731D', background: '#FFFBD4' },
      invoice: 'O-0246324537',
      time: '13:00',
      date: '21/06/2021',
      product: {
        name: 'Giày Nike',
        amount: 1,
        color: 'Bạc',
        price: 450000,
        img: 'shoe1.png',
      },
      color: '#D97C76',
    },
    {
      orderId: 2,
      name: 'Hoài Phương',
      acronym: 'HP',
      period: { status: 'Xác nhận', color: '#4199CA', background: '#DFF4FF' },
      invoice: 'O-0246324537',
      time: '13:00',
      date: '21/06/2021',
      product: {
        name: 'Giày Nike',
        amount: 1,
        color: 'Bạc',
        price: 450000,
        img: 'shoe1.png',
      },
      color: '#3A7F0D',
    },
    {
      orderId: 3,
      name: 'Loan lé',
      acronym: 'LL',
      period: {
        status: 'Chờ thanh toán',
        color: '#EB9025',
        background: '#FFEEDA',
      },
      invoice: 'O-0240024537',
      time: '18:00',
      date: '25/05/2021',
      product: {
        name: 'Son M.O.I',
        amount: 2,
        color: 'Xám',
        price: 100000,
        img: 'lipstick.png',
      },
      color: '#AB79BD',
    },
    {
      orderId: 4,
      name: 'Trầm Trồ',
      acronym: 'TT',
      period: {
        status: 'Chờ thanh toán',
        color: '#EB9025',
        background: '#FFEEDA',
      },
      invoice: 'O-0240024566',
      time: '18:00',
      date: '25/05/2021',
      product: {
        name: 'Son M.O.I',
        amount: 1,
        color: 'Xám',
        price: 100000,
        img: 'lipstick.png',
      },
      color: '#4398E8',
    },
    {
      orderId: 5,
      name: 'Phượng Chà Neo',
      acronym: 'PC',
      period: {
        status: 'Hoàn thành',
        color: '#247009',
        background: ' #ECFDD3',
      },
      invoice: 'O-0246324537',
      time: '13:00',
      date: '21/06/2021',
      product: {
        name: 'Giày Nike',
        amount: 1,
        color: 'Trắng',
        price: 1900000,
        img: 'shoe_adidas.png',
      },
      color: '#D97C76',
    },
    {
      orderId: 6,
      name: 'Tú Te Tua',
      acronym: 'TT',
      period: { status: 'Hủy', color: '#585958', background: ' #F4F4F3' },
      invoice: 'O-0206324537',
      time: '13:00',
      date: '21/04/2021',
      product: {
        name: 'Giày Adidas',
        amount: 1,
        color: 'Trắng',
        price: 1900000,
        img: 'shoe_adidas.png',
      },
      color: '#9D8F11',
    },
    {
      orderId: 7,
      name: 'Trầm Trồ',
      acronym: 'TT',
      period: { status: 'Nợ', color: '#DB645C', background: ' #FFE4E2' },
      invoice: 'O-9940024566',
      time: '18:00',
      date: '25/09/2022',
      product: {
        name: 'SAINT LAURENT',
        amount: 1,
        color: 'Xám',
        price: 97000000,
        img: 'jacket.png',
      },
      color: '#4398E8',
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}
  toggleActive: boolean = false;
  //get id
  id = this.route.snapshot.firstChild?.paramMap.get('orderId');

  //get data by id
  public order = this.listOrders.find(
    ({ orderId }) => orderId.toString() === this.id
  );
  urlChild = this.route.snapshot.firstChild?.url.toString();
  onclick(urlChildNew: string) {
    this.urlChild = urlChildNew;
    console.log(urlChildNew);
  }
}
