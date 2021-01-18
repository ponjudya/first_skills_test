import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public recipes = [];
  
  constructor(private _recipeService: RecipeService) { }

  ngOnInit(): void {
    // this._recipeService.getRecipes()
    //   .subscribe(data => this.recipes = data);
    //   console.log(this.recipes, "recipes");

    
      this._recipeService.getRecipes().subscribe(data => {
      this.recipes.push(data);
      console.log(this.recipes[0][0].recipes);
      this.recipes = this.recipes[0][0].recipes;

    });
  }

}
