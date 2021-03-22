import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from './count.selector';

@Component({
  selector: 'app-selectors',
  templateUrl: './selectors.component.html',
  styleUrls: ['./selectors.component.scss']
})
export class SelectorsComponent implements OnInit {
  counter;
  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.counter = this.store.select(fromRoot.getCount(), { 
      id: 'counter2',
      multiply: 2
    })

    this.counter = this.store.select(fromRoot.getCount(), { 
      id: 'counter4',
      multiply: 4
    })

    this.counter = this.store.select(fromRoot.getCount(), { 
      id: 'counter6',
      multiply: 6
    })

    
  }

}
