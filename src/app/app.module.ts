import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { cardReducer } from "./simple-ngrx/ngrx/cart.reducers";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'simple',
        loadChildren: () => import('./simple-ngrx/simple-ngrx.module').then(module => module.SimpleNgrxModule)
      }
    ]),
    StoreModule.forRoot({
      cart: cardReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
