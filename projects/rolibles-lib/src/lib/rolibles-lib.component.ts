import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment'

@Component({
  selector: 'lkn-calendar',
  templateUrl: './rolibles-lib.component.html',
  styleUrls: ['./rolibles-lib.component.css']
})
export class RoliblesLibComponent implements OnInit {
  @Input() set eventsFullYear(val) {
    if (val.length > 0) {
      this._eventsFullYear = val;
      const year = moment().year();
      this.setAllMonths(year);
    }
  };

  week: any = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo"
  ];
  _eventsFullYear: any[] = []
  monthSelect: any[];
  dateSelect: any;
  arrayMonths: any = [];
  selectedYear: any = null;

  constructor() {

  }

  ngOnInit(): void {
    const year = moment().year();
    this.selectedYear = year;
  }

  setAllMonths(year, clear = false) {
    if (clear) this.arrayMonths = []
    for (let i = 1; i <= 12; i++) {
      this.getDaysFromDate(i, year);
    }
  }


  getDaysFromDate(month, year) {
    const startDate = moment.utc(`${year}/${month}/01`)
    const endDate = startDate.clone().endOf('month')
    const diffDays = endDate.diff(startDate, 'days', true)
    const numberDays = Math.round(diffDays);
    const arrayDays = Object.keys([...Array(numberDays)]).map((a: any) => {
      a = parseInt(a) + 1;
      const dayObject = moment(`${year}-${month}-${a}`);
      return {
        name: dayObject.format("dddd"),
        value: a,
        indexWeek: dayObject.isoWeekday(),
        selected: this.checkEvents(year, month, a)
      };
    });
    this.monthSelect = arrayDays;
    this.setArrayMonths(month, year, startDate)
  }

  checkEvents(year, month, day) {
    let validateDate = true;
    this._eventsFullYear.forEach(event => {
      let splitDate = event.date.split('-');
      let dateEvent = moment.utc(`${splitDate[0]}/${splitDate[1]}/${splitDate[2]}`);
      let dateCalendar = moment.utc(`${year}/${month}/${day}`);
      let checkDate = moment(dateEvent).isSame(dateCalendar);
      if (checkDate) {
        validateDate = false;
        return false;
      }
    });
    if (validateDate) return false
    return true;
  }

  setArrayMonths(month, year, startDate) {
    let obj = {
      year: year,
      month: {
        number: month,
        name: startDate,
      },
      days: this.monthSelect,
    }
    this.arrayMonths.push(obj);
  }

  changeYear(flag) {
    const year = moment().year();
    if (flag === 1) {
      this.selectedYear = this.selectedYear ? this.selectedYear + 1 : year + 1;
    } else if (flag === -1) {
      this.selectedYear = this.selectedYear ? this.selectedYear - 1 : year - 1;
    }
    this.setAllMonths(this.selectedYear, true);
  }
}
