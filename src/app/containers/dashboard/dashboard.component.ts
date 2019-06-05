import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  barData1 = [
    {label: '1 transaction', value: 9000},
    {label: '2 transaction', value: 12000},
    {label: '3 transaction', value: 2000},
    {label: '4 transaction', value: 500},
    {label: '5 transaction', value: 200},
    {label: '6 transaction', value: 100},
  ];

  barData2 = [
    {label: '$0.01', value: 1250},
    {label: '$25.00', value: 2000},
    {label: '$50.00', value: 5500},
    {label: '$100.00', value: 8500},
    {label: '$200.00', value: 4000},
    {label: '$350.00', value: 2200},
    {label: '$500.00', value: 400},
    {label: '$750.00', value: 100},
    {label: '$1000.00', value: 100},
    {label: '$1500.00', value: 50},
  ];

  pieData = [
    {label: 'Male', value: 45.7},
    {label: 'Female', value: 47},
    {label: '', value: 7.3},
  ];

  constructor() { }

  ngOnInit() {
  }

}
