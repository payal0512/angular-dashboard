import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snippet',
  templateUrl: './snippet.component.html',
  styleUrls: ['./snippet.component.scss']
})
export class SnippetComponent implements OnInit {

  snippets: snippet = [
    {
      imageUrl: './assets/img/Group 1170.svg',
      name: 'Events'
    },
    {
      imageUrl: './assets/img/Group 1219.svg',
      name: 'Teams'
    },
    {
      imageUrl: './assets/img/Vector.svg',
      name: 'Merchandises'
    },
    {
      imageUrl: './assets/img/Group.svg',
      name: 'Commentators'
    },
    {
      imageUrl: './assets/img/Group 1219_2.svg',
      name: 'Sponsers'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
type snippet = Array<{
  imageUrl: string; 
  name: string;
  
}>;
