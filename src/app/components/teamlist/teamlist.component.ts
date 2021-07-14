import { Component, Input, OnInit } from '@angular/core';
// import { Teams } from '../team-player/team-player.component';

@Component({
  selector: 'app-teamlist',
  templateUrl: './teamlist.component.html',
  styleUrls: ['./teamlist.component.scss'],
})
export class TeamlistComponent implements OnInit {
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
    ];

    console.log(this.teams);
  }
}

// type Team = Array<{
//   imageUrl: string;
//   shortname: string;
//   name: string;
//   player: string;
// }>;
