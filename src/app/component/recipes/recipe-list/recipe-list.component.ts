import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from "../recipe.model";


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[]=[
    new Recipe('A Test Recipe', 'This is simple a test',
    'https://static01.nyt.com/images/2021/03/28/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg'),
    new Recipe('A Test Recipe', 'This is simple a test',
    'https://static01.nyt.com/images/2021/03/28/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg'),
    new Recipe('A Test Recipe Info', 'This is simple a test',
    'https://static01.nyt.com/images/2021/03/28/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg'),
    new Recipe('A Test Recipe', 'This is simple a test',
    'https://static01.nyt.com/images/2021/03/28/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg'),
    new Recipe('A Test Recipe', 'This is simple a test',
    'https://static01.nyt.com/images/2021/03/28/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg')
  ];


  @Output() detailInfo=new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }

  selectDetail(detailInfo:Recipe){
    this.detailInfo.emit(detailInfo);
  }

}
