import { Component, Input, OnInit } from '@angular/core';
import { TeamlistComponent } from '../teamlist/teamlist.component';

@Component({
  selector: 'app-team-player',
  templateUrl: './team-player.component.html',
  styleUrls: ['./team-player.component.scss'],
})
export class TeamPlayerComponent implements OnInit {
  // @Input() teams: any;
  // @Input() teams: any;
  @Input() team: any;

  constructor() {}

  ngOnInit(): void {}
}

// type Team = Array<{
//   imageUrl: string;
//   shortname: string;
//   name: string;
//   player: string;
// }>;
