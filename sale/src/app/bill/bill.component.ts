import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss'],
})
export class BillComponent implements OnInit {
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
        oldPrice: 500000,
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
        oldPrice: 500000,
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
        oldPrice: 200000,
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
        oldPrice: 200000,
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
        oldPrice: 2000000,
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
        oldPrice: 2000000,
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
        oldPrice: 10000000,
        img: 'jacket.png',
      },
      color: '#4398E8',
    },
  ];
  toggleRecipe = false;
  listProducts = ['Giày Nike', 'Giày Nike 1', 'Giày Nike 2'];
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {}
  //get id
  id = this.route.snapshot.paramMap.get('orderId');
  //get data by id
  order = this.listOrders.find(({ orderId }) => orderId.toString() === this.id);
  ship: number = 10000;
  profit: number = 20000;
  otherCosts: number = 0;
  totalPrice =
    (this.order?.product)!.amount * (this.order?.product)!.price +
    this.ship +
    this.profit;
}
