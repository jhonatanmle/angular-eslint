import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: `<p>Test<p>`,
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  private test: string;

  constructor() {}

  ngOnInit(): void {
    this.test = 'Hola mundo';
  }
}
