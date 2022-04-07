import {Routes, RouterModule} from '@angular/router';
import {RecipesComponent} from '../app/component/recipes/recipes.component';
import {RecipeDetailComponent} from '../app/component/recipes/recipe-detail/recipe-detail.component';
import {RecipeListComponent} from '../app/component/recipes/recipe-list/recipe-list.component';
import {RecipeItemComponent} from '../app/component/recipes/recipe-list/recipe-item/recipe-item.component';
import {ShoppingListComponent} from '../app/component/shopping-list/shopping-list.component';
import {ShoppingEditComponent} from '../app/component/shopping-list/shopping-edit/shopping-edit.component';
import { NgModule } from '@angular/core';
import { RecipeEditComponent } from './component/recipes/recipe-edit/recipe-edit.component';
import { RecipesResolveService } from './component/recipes/recipes-resolve.service';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';



const appRoutes: Routes=[
    {path:'', redirectTo:'/auth', pathMatch:'full'},
    {path:'recipes', component: RecipesComponent , canActivate: [AuthGuard], children:[
        {path:'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
        {path:':id', component: RecipeDetailComponent, canActivate: [AuthGuard], resolve:[RecipesResolveService]},
        {path:'list', component: RecipeListComponent, canActivate: [AuthGuard], children:[
            {path:'item', component: RecipeItemComponent, canActivate: [AuthGuard]}
        ]},
        {path:':id/edit', component: RecipeEditComponent, resolve:[RecipesResolveService], canActivate: [AuthGuard]}


    ]},
    {path:'shopping-list', component: ShoppingListComponent, children:[
        {path:'edit', component: ShoppingEditComponent},
        
    ]},
    {path:'auth', component: AuthComponent},
    {path:'**', redirectTo: '/auth'}

]

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}