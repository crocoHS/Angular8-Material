import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: {icon: string, label: string, parent: boolean}[] = [
    {icon: 'group', label: 'Business Intelligence', parent: true},
    {icon: 'group', label: 'Advanced Targeting', parent: true},
    {icon: 'group', label: 'Cluster Analytics', parent: true},
    {icon: 'group', label: 'Email Campaigns', parent: true},
    {icon: 'group', label: 'Campaign Analytics', parent: true},
    {icon: 'group', label: 'Database', parent: true},
    {icon: 'group', label: 'Support', parent: false},
  ];

  constructor() { }

  ngOnInit() {
  }

}
