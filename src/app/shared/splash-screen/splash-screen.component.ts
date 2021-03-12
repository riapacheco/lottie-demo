import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {

  @Input() options: AnimationOptions = {
    path: '/assets/lottie/piggy-bank.json'
  };
  @Input() titleText = 'Step 1';
  @Input() stepParagraph = 'Lorem ipsum blah blah blah';
  @Input() secondaryButtonText = 'Previous';
  @Input() primaryButtonText = 'Next';
  @Output() animationCreated = new EventEmitter();
  @Output() secondaryClick = new EventEmitter();
  @Output() primaryClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
    this.animationCreated.emit(animationItem);
  }

  onSecondaryClick(clickedSecondaryEvent): void {
    this.secondaryClick.emit(clickedSecondaryEvent);
  }
  onPrimaryClick(clickedPrimaryEvent): void {
    this.primaryClick.emit(clickedPrimaryEvent);
  }
}
