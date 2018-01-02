import { Component, Output, EventEmitter} from "@angular/core";
import { Product } from "./product";


const Products: Product[] = [
    { id: 1, name : "product 1", price : 100 },
    { id: 2, name : "product 2", price : 200 },
    { id: 3, name : "product 3", price : 300 },
    { id: 4, name : "product 4", price : 400 },
    { id: 5, name : "product 5", price : 500 },
    { id: 6, name : "product 6", price : 600 },
    { id: 7, name : "product 7", price : 700 },
    { id: 8, name : "product 8", price : 800 },
    { id: 9, name : "product 9", price : 900 },
    { id: 10, name : "product 10", price : 1000 }];


@Component({
    moduleId: module.id,
    selector: "my-table",
    templateUrl: "my-table.component.html",
    styleUrls: ["my-table.component.css"],
    inputs: ["rows"]
})
export class MyTableComponent {
    
    ProductList: Product[] = Products;
    rows: number;   
    prodArr: Product[];  
    visible: boolean = true;
    index: number;

    @Output()
    delete: EventEmitter<object> = new EventEmitter();;

    ngOnInit() {
        this.prodArr = this.ProductList.slice(0, +this.rows);
    }    

    delRow(prod) {        
        this.index = this.prodArr.indexOf(prod);        
        this.prodArr.splice(this.index, 1); 
        this.delete.emit(prod);                
    }

    addClassRed(prod) {
        if (prod.price > 500) return "red";
    }    
}