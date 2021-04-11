import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { cardReducer } from "./simple-ngrx/ngrx/cart.reducers";
import { toDoReducer } from "./effects/todo.reducer";
import { TodoEffectsService } from "./effects/todo-effects.service";
import { EffectsModule } from "@ngrx/effects";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'store',
        loadChildren: () => import('./simple-ngrx/simple-ngrx.module').then(module => module.SimpleNgrxModule)
      },
      {
        path: 'effects',
        loadChildren: () => import('./effects/effects.module').then(module => module.EffectsModule)
      }
    ]),
    StoreModule.forRoot({
      cart: cardReducer,
      toDos: toDoReducer
    }),
    EffectsModule.forRoot([TodoEffectsService])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
