import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoEffectsService } from './todo-effects.service';



@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: TodoComponent
      }
    ])
  ]
})
export class EffectsModule { }
