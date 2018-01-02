import { Component, Output, EventEmitter} from "@angular/core";
import { Product } from "./product";


const Products: Product[] = [
    { id: 1, name : "product 1", price : 100, Category : "Category 2" },
    { id: 2, name : "product 2", price : 200, Category : "Category 3" },
    { id: 3, name : "product 3", price : 300, Category : "Category 1" },
    { id: 4, name : "product 4", price : 400, Category : "Category 1" },
    { id: 5, name : "product 5", price : 500, Category : "Category 3" },
    { id: 6, name : "product 6", price : 600, Category : "Category 2" },
    { id: 7, name : "product 7", price : 700, Category : "Category 3" },
    { id: 8, name : "product 8", price : 800, Category : "Category 3" },
    { id: 9, name : "product 9", price : 900, Category : "Category 2" },
    { id: 10, name : "product 10", price : 1000, Category : "Category 2" }];


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
    safeProdArr: Product[];

    @Output()
    delete: EventEmitter<object> = new EventEmitter();;

    ngOnInit() {
        this.prodArr = this.ProductList.slice(0, +this.rows);
        this.safeProdArr = this.prodArr;
    }    

    delRow(prod) {        
        this.index = this.prodArr.indexOf(prod);        
        this.prodArr.splice(this.index, 1);
        this.delete.emit(prod);                
    }

    addTextRed(prod) {
        if (prod.price > 500) return "red";
    }
    
    filter(temp) {       
        this.prodArr = this.safeProdArr.filter((item)=>{
            return item.Category == temp.target.value;
        })
        
    }
}