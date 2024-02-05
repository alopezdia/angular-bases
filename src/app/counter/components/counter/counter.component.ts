import { Component } from "@angular/core"
//import { CounterComponent } from './counter.component';

  @Component({
    selector: 'app-counter',
    template:`
      <h3>
        Counter: {{counter}}
      </h3>

      <button (click)="increaseBy(+1)">+1</button>
      <button (click)="Reset()">Reset</button>
      <button (click)="increaseBy(-1)">-1</button>
    `
  })

  export class CounterComponent{

    public counter:number = 10;

    increaseBy(value:number):void{
      this.counter+=value;
    }
    Reset():void{
      this.counter =10;
  }
}
