import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() show: any;
  constructor() {}

  ngOnInit(): void {}

  close() {
    this.show = !this.show;
  }
}
