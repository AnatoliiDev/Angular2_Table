import { Product } from "./product";
import { Injectable } from "@angular/core";


    @Injectable()
export class ProductsService{
    
    getData() {
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
                    
        return Products;
    }
}