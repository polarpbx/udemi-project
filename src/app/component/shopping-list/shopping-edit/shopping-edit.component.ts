import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f', { static: false }) slForm: NgForm | undefined;
  subscription: Subscription | undefined;
  editMode = false;
  editedItemIndex: number | undefined;
  editedItem: Ingredient | undefined;

  constructor(private shoppingListService: ShoppingListService) { }


  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing
      .subscribe((index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.slForm?.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      });
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  onAddItem(form: NgForm) {
    const newIngredient = new Ingredient(form.value.name, form.value.amount);
    if (!this.editMode)
      this.shoppingListService.addIngredient(newIngredient);
    else {
      this.shoppingListService.updateIngredient(<number>this.editedItemIndex, newIngredient);
      this.editMode = false;
    }
    form.reset();
  }

  onDelete(){
    if(this.editMode&&this.editedItemIndex!==null){
      this.shoppingListService.deleteIngredient(<number>this.editedItemIndex);
      this.editMode=false;
      this.editedItemIndex=undefined;
      this.slForm?.reset();
    }
  }


}
