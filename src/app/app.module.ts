import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { RecipesComponent } from './component/recipes/recipes.component';
import { RecipeListComponent } from './component/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './component/recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './component/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './component/shopping-list/shopping-edit/shopping-edit.component';
import { RecipeItemComponent } from './component/recipes/recipe-list/recipe-item/recipe-item.component';

import { DropdownDirective } from './shared/directive/dropdown.directive';

import  {ShoppingListService} from './component/shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeEditComponent } from './component/recipes/recipe-edit/recipe-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeService } from './component/recipes/recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeItemComponent,
    DropdownDirective,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
