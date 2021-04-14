import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input() public title: string = '';
  @Input() public text: string = '';
  @Input() public buttons: string[] = [];

  @Output() btnPressed = new EventEmitter<string>();  

  constructor() {
    
  }

  ngOnInit(): void {
    
  }

  public createAlert(text: string, buttons: string[],title?: string): void {
    this.title = !!title ? title : '';
    this.text = text;
    this.buttons = buttons;
  }

  buttonPressed(btn: string) {
    this.btnPressed.emit(btn);
  }

}
