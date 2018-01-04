import { Component, Output, EventEmitter} from "@angular/core";
import { Product } from "./product";


const Products: Product[] = [
    { id: 1, name : "product 1", price : 100, Category : "Category 2", visible : true },
    { id: 2, name : "product 2", price : 200, Category : "Category 3", visible : true },
    { id: 3, name : "product 3", price : 300, Category : "Category 1", visible : true },
    { id: 4, name : "product 4", price : 400, Category : "Category 1", visible : true },
    { id: 5, name : "product 5", price : 500, Category : "Category 3", visible : true },
    { id: 6, name : "product 6", price : 600, Category : "Category 2", visible : true },
    { id: 7, name : "product 7", price : 700, Category : "Category 3", visible : true },
    { id: 8, name : "product 8", price : 800, Category : "Category 3", visible : true },
    { id: 9, name : "product 9", price : 900, Category : "Category 2", visible : true },
    { id: 10, name : "product 10", price : 1000, Category : "Category 2", visible : true }];


@Component({
    moduleId: module.id,
    selector: "my-table",
    templateUrl: "my-table.component.html",
    styleUrls: ["my-table.component.css"],
    inputs: ["rows"]
})
export class MyTableComponent {
    lastElem : number;
    productArr: Product[];
    rows: number;
    nCategory = "Category 1";
    //nCategory = "All Products";
    
    hidden: boolean = false;
    

    @Output()
    delete: EventEmitter<object> = new EventEmitter();   

    ngOnInit() {        
        this.productArr = Products;
        this.lastElem = this.productArr.length;        
    }
    
    get visibleProducts() {
        let i: number = 0;
        let j: number = 0;
        let prod = [];
        while (i < this.lastElem && j < this.rows) {
            /* if (this.productArr[i].visible && this.nCategory == "All Products") {
                prod[j] = this.productArr[i];
                j++;
            } */
            if (this.productArr[i].visible && this.nCategory == this.productArr[i].Category) {
                prod[j] = this.productArr[i];
                j++;
            }
            i++;
        }
        return prod;
    }

    removeRow(product) {        
        this.productArr[+product.id -1].visible = false;
        this.delete.emit(product);
                        
    }

    addTextRed(prod) {
        if (prod.price > 500) return "red";
    }

    addRow() {
        this.hidden = true;
        console.log("12345")
    }

    handleAddEvent(arg) {
        this.productArr.push(arg);
        this.lastElem++;
    }

    
}