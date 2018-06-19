import { Component} from '@angular/core';
import { RecipeService } from '../../recipes/recipe.service';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { AuthService } from '../../auth/auth.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html'
})

export class HeaderComponent {
	
	constructor(
		private recipeService: RecipeService,
		private shoppingListService : ShoppingListService,
		public authService: AuthService
		) {}
	
	onSaveData() {
		this.recipeService.saveRecipeData()
		.subscribe((recipes)=>{
		},(err)=>{
			console.log("error happend you should handel it",err);
			
		});

		this.shoppingListService.saveIngredientsData()
		.subscribe((ingredients)=>{
		},(err)=>{
			console.log("error happend you should handel it",err);
		})
	}

	onFetchData() {
		this.recipeService.getRecipeData()
		.subscribe((recipes)=>{
			this.recipeService.recipes = recipes;
			this.recipeService.recipeChange.emit(recipes);
		},(err)=>{
			console.log("error happend you should handel it",err);
		})
	}

	Logout() {
		this.authService.destroyToken()
	}
}