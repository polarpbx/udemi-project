import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import {Recipe} from "../../recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe:Recipe=new Recipe('','','');

  @Output() detailInfo=new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }
  selectDetail(detailInfo:Recipe){
    this.detailInfo.emit(detailInfo);
  }
}
