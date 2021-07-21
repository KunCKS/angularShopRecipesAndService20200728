import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  onfeature: string = 'Recipes';
  title = 'angularAppPractice20200713';
  onFeatureSelected(features: string) {
    this.onfeature = features;
  }
}
