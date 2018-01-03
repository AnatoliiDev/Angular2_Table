import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Product } from './my-table/product';
import { MyTableComponent } from './my-table/my-table.component';
import { MyTableHostComponent } from './my-table/my-table-host.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    MyTableComponent,
    MyTableHostComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
