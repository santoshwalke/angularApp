import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponents } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeItemsComponent } from './recipes/recipe-list/recipe-items/recipe-items.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const appRoutes : Routes = [
{
	path : '',
	redirectTo : '/recipes',
	pathMatch : 'full'
},
{
	path : 'recipes',
	component : RecipesComponents,
	children : [
		{
			path : '',
			component : RecipeStartComponent
		},
		{
			path : 'new',
			component : RecipeEditComponent
		},
		{
			path : ':id',
			component : RecipeDetailsComponent
		},
		{
			path : ':id/edit',
			component : RecipeEditComponent
		}
	] 
},
{
	path : 'shopping-list',
	component : ShoppingListComponent
}
]

@NgModule ({
	imports : [RouterModule.forRoot(appRoutes)],
	exports : [RouterModule]
})
export class AppRoutingModule {

}