import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-select-color',
  templateUrl: './select-color.component.html',
  styleUrls: ['./select-color.component.scss']
})
export class SelectColorComponent implements OnInit {
  @Input()

  colorArray: Array<string> = [
    'red',
    'blue',
    'blue',
    "pink",
    "yellow",
    'green'
  ];
  select;

  result;
  constructor() { }

  ngOnInit(): void { }

  swapColor(){
    
      return this.result = this.colorArray[this.select];
  }

}
