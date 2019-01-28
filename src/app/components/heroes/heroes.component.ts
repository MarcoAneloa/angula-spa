import { Component, OnInit } from '@angular/core';
import {HeroesService,Heroe} from '../../servicios/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes:Heroe[]=[];
  constructor(private  _heroeService:HeroesService,private router:Router) { }

  ngOnInit() {
    this.heroes=this._heroeService.getHeroes();
  }

  verHeroe(idx:number){
    this.router.navigate(['/heroe',idx])
  }
}
