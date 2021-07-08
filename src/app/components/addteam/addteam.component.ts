import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addteam',
  templateUrl: './addteam.component.html',
  styleUrls: ['./addteam.component.scss'],
})
export class AddteamComponent implements OnInit {
  show: boolean = false;

  constructor() {}

  addTeam() {
    this.show = !this.show;
    console.log(this.show, 'show');
  }

  ngOnInit(): void {}
}
