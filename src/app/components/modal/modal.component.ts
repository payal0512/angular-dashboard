import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() show: any;
  teams: any;
  constructor() {}

  ngOnInit() {
    this.teams = [
      {
        imageUrl: './assets/img/team-logo.png',
        shortname: 'RCB',
        name: 'Royal Chalengers Bangalore',
        player: 'Players - 12',
      },
      {
        imageUrl: './assets/img/team-logo.png',
        shortname: 'RCB',
        name: 'Royal Chalengers Bangalore',
        player: 'Players - 5',
      },
      {
        imageUrl: './assets/img/team-logo.png',
        shortname: 'RCB',
        name: 'Royal Chalengers Bangalore',
        player: 'Players - 12',
      },
      {
        imageUrl: './assets/img/team-logo.png',
        shortname: 'RCB',
        name: 'Royal Chalengers Bangalore',
        player: 'Players - 12',
      },
      {
        imageUrl: './assets/img/team-logo.png',
        shortname: 'RCB',
        name: 'Royal Chalengers Bangalore',
        player: 'Players - 12',
      },
      {
        imageUrl: './assets/img/team-logo.png',
        shortname: 'RCB',
        name: 'Royal Chalengers Bangalore',
        player: 'Players - 5',
      },
      {
        imageUrl: './assets/img/team-logo.png',
        shortname: 'RCB',
        name: 'Royal Chalengers Bangalore',
        player: 'Players - 12',
      },
      {
        imageUrl: './assets/img/team-logo.png',
        shortname: 'RCB',
        name: 'Royal Chalengers Bangalore',
        player: 'Players - 12',
      },
      {
        imageUrl: './assets/img/team-logo.png',
        shortname: 'RCB',
        name: 'Royal Chalengers Bangalore',
        player: 'Players - 12',
      },
    ];

    console.log(this.teams);
  }

  close() {
    this.show = !this.show;
  }
}
