import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleNgrxRoutingModule } from './simple-ngrx-routing.module';
import { PageComponent } from './components/page/page.component';
import { DataService } from './services/data.service';


@NgModule({
  declarations: [PageComponent],
  imports: [
    CommonModule,
    SimpleNgrxRoutingModule
  ],
  providers: [
    DataService
  ]
})
export class SimpleNgrxModule { }
