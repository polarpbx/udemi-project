import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';
import {Recipe} from "../../recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe:Recipe=new Recipe('','','',[new Ingredient('',0)]);
  @Input() id:number=-1;
  constructor() { }

  ngOnInit(): void {
  }
}
