import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public recipes = [];
  constructor(private _cateringService: RecipeService) { }

  ngOnInit(): void {
    // this._cateringService.getRecipes()
    //   .subscribe(data => this.recipes = data);
  }

}
