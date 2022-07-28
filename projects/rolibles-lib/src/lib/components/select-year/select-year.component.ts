import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-select-year',
  templateUrl: './select-year.component.html',
  styleUrls: ['./select-year.component.css']
})
export class SelectYearComponent implements OnInit {

  @Input() selectYear:any;
  @Output() changeYearEmit: EventEmitter<number> = new EventEmitter<number>();

  years:number[] = [];
  openDropdown:boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.setYears(2019)
  }

  setYears(initial){
    for(let i=initial; i<= (initial + 19); i++){
      this.years.push(i);
    }
  }

  changeYear(year){
    this.changeYearEmit.emit(year);
  }

  nextBackYear(flag){
    const firstElement = this.years[0];
    const lastElement = this.years[this.years.length - 1];
    this.years = [];
    if(flag === 1){
      this.setYears(lastElement)
    }
    else if(flag === -1){
      this.setYears(firstElement - 19)
    }
  }
}
