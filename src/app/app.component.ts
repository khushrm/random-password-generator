import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = ''
  length = 0;

  onLengthChange(value: string){
    const parsedValue = parseInt(value);
    if(!isNaN(parsedValue)){
      this.length = parsedValue;
    }
  }
  onUseLettersChange(){
    this.includeLetters = !this.includeLetters;
  }
  onUseNumbersChange(){
    this.includeNumbers = !this.includeNumbers;
  }
  onUseSymbolsChange(){
    this.includeSymbols = !this.includeSymbols;
  }
  generatePassword(){
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if(this.includeLetters) validChars += letters;
    if(this.includeNumbers) validChars += numbers;
    if(this.includeSymbols) validChars += symbols;

    let generatePassword = '';
    for(let i=0;i<this.length;i++){
      const index = Math.floor(Math.random() * validChars.length);

      generatePassword += validChars.charAt(index);
    }

    this.password = generatePassword;
  }
}
