import { Component, OnInit } from '@angular/core';

import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent implements OnInit {
  stepTwoOptions: AnimationOptions = {
    path: '/assets/lottie/chat.json'
  };
  stepTwoTitle = 'Step 2';
  stepTwoParagraph = 'This is the second step of your stuff!';
  constructor() { }

  ngOnInit(): void {
  }

  clickNext(clickEvent): void {
    console.log(clickEvent);
  }
}
