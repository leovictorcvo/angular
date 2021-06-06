import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  passwordLength = 0;
  useLetters = false;
  useNumbers = false;
  useSymbols = false;
  password = '';

  onChangeLength = (event: Event) => {
    const parsedValue = parseInt((event.target as HTMLInputElement).value);

    if (isNaN(parsedValue)) {
      return;
    }

    this.passwordLength = parsedValue;
  }

  onChangeUseLetters = () => {
    this.useLetters = !this.useLetters;
  }

  onChangeUseNumbers = () => {
    this.useNumbers = !this.useNumbers;
  }

  onChangeUseSymbols = () => {
    this.useSymbols = !this.useSymbols;
  }

  private generatePassword = (): string => {
    let availableChars = '';

    if (this.useLetters) {
      availableChars += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (this.useNumbers) {
      availableChars += '1234567890';
    }
    if (this.useSymbols) {
      availableChars += '"!@#$%¨&*()_+¢¬§';
    }

    let generatedPassword = '';
    for(let i = 0; i < this.passwordLength; i++) {
      const index = Math.floor(Math.random() * availableChars.length);
      generatedPassword += availableChars[index];
    }

    return generatedPassword;
  }

  onButtonClick = () => {
    this.password = this.generatePassword();
  }
}
