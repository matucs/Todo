import { Component, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges{
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log('changes: ',changes)
  }

  title = 'todo';
  list = [{ id: 0, text: 'hhh', icon: 'bx:bx-radio-circle' }];
  text = '';

  onCheck(index) {
    this.list[index].icon == 'bx:bx-radio-circle' ? this.list[index].icon = 'fe:check-circle-o':
    this.list[index].icon = 'bx:bx-radio-circle'
    console.log(this.list[index].icon)
  }
  onItemAdd() {
    this.text != '' ? this.list.push({ id: this.list.length, text: this.text, icon: 'bx:bx-radio-circle' }) : '';
    this.text = '';
  }
  onDelete(index) {
    this.list.splice(index, 1)
  }
}
