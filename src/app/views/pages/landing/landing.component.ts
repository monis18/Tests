import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MarcaService } from "../../../services/marca.service";

export interface carModel {
  model: string,
  description: string
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  public items: carModel[];
  // public itemsSave: carModel[];
  private orderStatus: Boolean = false;
  public srcOrder: string;
  searchName = new FormControl();

  constructor(
    private marcaServices: MarcaService
  ) { }

  ngOnInit(): void {
    this.marcaServices.getModels()
    .subscribe(
      res => this.items = res
    );
    this.orderByName();
  }

  searchByName(){
    // const txt = this.searchName.value.toLowerCase();
    // for (let item of this.itemsSave) {
    //   let modelo = item.model.toLowerCase();
    //   this.items = [];
    //   console.log(modelo.indexOf(txt));
    //   if( modelo.indexOf(txt) !== -1 ){
    //     console.log(this.itemsSave[modelo.indexOf(txt)]);
    //     this.items.push(this.itemsSave[modelo.indexOf(txt)]);
    //   }
    // }
    // console.log(this.items);
    
  }

  orderByName(){
    if(this.orderStatus){
      this.srcOrder = '../../../../assets/sort-ascending-letters.svg';
      this.orderStatus = false;
    }else{
      this.srcOrder = '../../../../assets/sort-descending-letters.svg';
      this.orderStatus = true;
    }
    this.orderArrayByName();
  }

  orderArrayByName(){
    if(this.orderStatus){
      this.items.sort(function (a, b) {
        if (a.model > b.model) {
          return 1;
        }
        if (a.model < b.model) {
          return -1;
        }
        return 0;
      });
    }else{
      this.items.sort(function (a, b) {
        if (a.model < b.model) {
          return 1;
        }
        if (a.model > b.model) {
          return -1;
        }
        return 0;
      });
    }
  }

  

}
