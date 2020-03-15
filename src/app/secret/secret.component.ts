import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css']
})
export class SecretComponent implements OnInit {
  contentCreated = false;
  allowNewContent = false;
  status: string = 'none';
  counters = []

  constructor() { 

  }

  ngOnInit(): void {
  }

  onCreateContent() {
    this.contentCreated = !this.contentCreated;
    this.status = this.counters.length >= 5 ? 'class' : 'none';
    this.counters.push(this.counters.length + 1)
  }

}
