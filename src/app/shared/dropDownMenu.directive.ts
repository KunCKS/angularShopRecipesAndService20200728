import { Directive, HostListener, HostBinding } from '@angular/core';
@Directive({
  selector: '[AppdropDownMenu]',
})
export class dropDownMenu {
  @HostBinding('class.show') isOpen = false;
  @HostListener('click') toggleMenu() {
    this.isOpen = !this.isOpen;
  }
  constructor() {}
}
