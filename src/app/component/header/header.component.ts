import { Component } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  dropDownMenuBool=false;

  constructor(private dataStorageService: DataStorageService){}

  onSaveData(){
    this.dataStorageService.storeRecipes();
  }
  onFatchData(){
    this.dataStorageService.fetchRecipes().subscribe();
  }
}
