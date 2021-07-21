import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredients } from '../../shared/Ingredient.model';
import { shoppingListService } from 'src/app/shoppingList.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
  // @ViewChild('ingNameInput', { static: true }) ingName: ElementRef;
  // @ViewChild('ingAmountInput', { static: true }) ingAmount: ElementRef;
  @ViewChild('f', { static: true }) shoppingListForm: NgForm;
  test: Ingredients;
  constructor(private ShoppingListService: shoppingListService) {}
  // @Output() addIngData = new EventEmitter<Ingredients>();
  ngOnInit(): void {}
  // addIng() {
  //   // const ingNameData = this.ingName.nativeElement.value;
  //   // const ingAmountData = this.ingAmount.nativeElement.value;
  //   this.ShoppingListService.addIngredients(
  //     new Ingredients(ingNameData, ingAmountData)
  //   );
  //   // this.addIngData.emit(new Ingredients(ingNameData, ingAmountData));
  // }
  onAddIng(form: NgForm) {
    console.log(form);
  }
}
