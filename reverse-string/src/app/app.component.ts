import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputString:string='';
  reversedString:string='';
  reverseString(){
    this.reverseString=this.inputString.split('').reverse().join('');
  }
  title = 'reverse-string';
}
