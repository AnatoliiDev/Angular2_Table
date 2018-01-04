import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "add-row",
    templateUrl: "add-row.component.html",
    inputs: ["newId"],
    outputs: ["addEvent"]
})
export class AddRowComponent {
    public newId: number = 0;
    newName: string = "Product ";
    newPrice: string = "0";
    newCategory = "Category 1";
    isVisible: boolean = false;

    public addEvent: EventEmitter<any> = new EventEmitter();

    addNewData() {
        this.isVisible = true;
    }

    sendNewData() {
        this.isVisible = false;
        this.addEvent.emit({ "id" : this.newId + 1, "name" : this.newName, "price" : +this.newPrice, "Category" : this.newCategory, "visible" : true });
    }

}