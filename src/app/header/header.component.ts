import { Component, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output('features') featureSelected = new EventEmitter<string>();
  selectFeature(feature: string) {
    this.featureSelected.emit(feature);
  }
}
