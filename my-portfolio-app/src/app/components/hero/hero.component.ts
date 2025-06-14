import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
   standalone: false
})
export class HeroComponent {
   fullName: string = 'Sripradosh';
  displayedName: string = '';
  typingSpeed: number = 150;
  pauseAfterTyping: number = 1000; 
    ngOnInit() {
     this.startTypingLoop();
  }

   startTypingLoop() {
    this.typeText().then(() => {
      setTimeout(() => {
        this.displayedName = '';
        this.startTypingLoop(); // repeat typing
      }, this.pauseAfterTyping);
    });
  }
   async typeText() {
    this.displayedName = '';
    for (let i = 0; i < this.fullName.length; i++) {
      this.displayedName += this.fullName[i];
      await this.sleep(this.typingSpeed);
    }
  }

  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  startTyping() {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < this.fullName.length) {
        this.displayedName += this.fullName.charAt(index);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, this.typingSpeed);
  }
}
