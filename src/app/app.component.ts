import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.el.nativeElement.focus();
  }
  @ViewChild('input', null) el: ElementRef;

  title = 'todo';
  list = [];
  text = '';

  onCheck(index) {
    var icon = this.list[index].icon == 'bx:bx-radio-circle' ? 'fe:check-circle-o' : 'bx:bx-radio-circle'
    var temp = { id: index, text: this.list[index].text, icon: icon, checked: !this.list[index].checked }
    this.list.splice(index, 1, temp);
  }
  onItemAdd() {
    this.text != '' ? this.list.push({ id: this.list.length, text: this.text, icon: 'bx:bx-radio-circle', checked: false }) : '';
    this.text = '';
    this.el.nativeElement.focus();
  }
  onDelete(index) {
    this.list.splice(index, 1)
  }
  onRemoveCheckedItems() {
    var temp = this.list.filter( s => s.checked == false ) 
    this.list = temp;
    this.el.nativeElement.focus();
  }
}
