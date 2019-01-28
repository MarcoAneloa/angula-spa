import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe:any={};// voy ha recibir la informacion a la varible desdea fuera
  @Input() index:number;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router:Router) {
    this.heroeSeleccionado=new EventEmitter();

   }

  ngOnInit() {
  }

  verHeroe(){
    //this.heroeSeleccionado.emit(this.index);
    this.router.navigate(['/heroe',this.index]);
  }

}
