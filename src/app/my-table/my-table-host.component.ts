import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "my-table-host",
    templateUrl: "my-table-host.component.html"    
})
export class MyTableHostComponent{
    delEvent(obj){
        console.log("Deleted row #" + obj.id);
    }
}