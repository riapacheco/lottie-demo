import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { LottieModule } from 'ngx-lottie';
import { NgModule } from '@angular/core';
import { SplashScreenComponent } from './shared/splash-screen/splash-screen.component';
import player from 'lottie-web';
import { StepTwoComponent } from './views/step-two/step-two.component';

export function playerFactory(): any {
  return import('lottie-web');
}

@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent,
    StepTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
