import { Injectable } from '@angular/core';
import { InMemoryDbService} from 'angular-in-memory-web-api';
import { Hero } from './hero';



@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes =  [
      {id:12, name:'Cécile Fatiman'},
      {id:13, name:'Manbo Marinette'},
      {id:14, name:'Jean François Biassou'},
      {id:15, name:'Toussaint Louverture'},
      {id:16, name:'Henry Christophe'},
      {id:17, name:'Jeannot Bullet'},
      {id:18, name:'Franswa Makandal'},
      {id:19, name:'Jean Jacques Dessalines'},
      {id:20, name:'Capois La Mort'},
      {id:21, name:'Dutty Boukman'},
  ]
  return(heroes);
  }

  genId(heroes:Hero[]): number {
    return heroes.length>0?Math.max(...heroes.map(hero=>hero.id))+1:11;
  }

  constructor() { }
}
