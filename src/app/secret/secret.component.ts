import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css']
})
export class SecretComponent implements OnInit {
  contentCreated = false;
  allowNewContent = false;
  counter = 0;
  status: string = 'none';

  constructor() { 

  }

  ngOnInit(): void {
  }

  onCreateContent() {
    this.contentCreated = !this.contentCreated;
    this.counter += 1;
    this.status = this.counter > 5 ? 'class' : 'none'
  }

  getColor() {
    return this.status === 'class' ? 'dodgerBlue' : 'white'
  }

}
