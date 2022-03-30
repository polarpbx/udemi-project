import {Routes, RouterModule} from '@angular/router';
import {RecipesComponent} from '../app/component/recipes/recipes.component';
import {RecipeDetailComponent} from '../app/component/recipes/recipe-detail/recipe-detail.component';
import {RecipeListComponent} from '../app/component/recipes/recipe-list/recipe-list.component';
import {RecipeItemComponent} from '../app/component/recipes/recipe-list/recipe-item/recipe-item.component';
import {ShoppingListComponent} from '../app/component/shopping-list/shopping-list.component';
import {ShoppingEditComponent} from '../app/component/shopping-list/shopping-edit/shopping-edit.component';
import { NgModule } from '@angular/core';
import { RecipeEditComponent } from './component/recipes/recipe-edit/recipe-edit.component';



const appRoutes: Routes=[
    {path:'', redirectTo:'/recipes', pathMatch:'full'},
    {path:'recipes', component: RecipesComponent, children:[
        {path:'new', component: RecipeEditComponent},
        {path:':id', component: RecipeDetailComponent},
        {path:'list', component: RecipeListComponent, children:[
            {path:'item', component: RecipeItemComponent}
        ]},
        {path:':id/edit', component: RecipeEditComponent}


    ]},
    {path:'shopping-list', component: ShoppingListComponent, children:[
        {path:'edit', component: ShoppingEditComponent},
        
    ]},

]

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}