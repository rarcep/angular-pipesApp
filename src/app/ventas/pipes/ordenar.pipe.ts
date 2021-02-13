import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar',
})
export class OrdenarPipe implements PipeTransform {
  transform(
    heroes: Heroe[],
    ordenarPor: string = 'sin valor',
    orden: string
  ): Heroe[] {
    console.log(heroes);
    if (ordenarPor === 'sin valor') {
      return heroes;
    }
    if (ordenarPor === 'nombre') {
      if (orden === 'des')
        heroes = heroes.sort((a, b) => (a.nombre > b.nombre ? 1 : -1));
      if (orden === 'asc')
        heroes = heroes.sort((a, b) => (a.nombre > b.nombre ? -1 : 1));
    }
    if (ordenarPor === 'vuela') {
      if (orden === 'des')
        heroes = heroes.sort((a, b) => (a.vuela > b.vuela ? 1 : -1));
      if (orden === 'asc')
        heroes = heroes.sort((a, b) => (a.vuela > b.vuela ? -1 : 1));
    }
    if (ordenarPor === 'color') {
      if (orden === 'des')
        heroes = heroes.sort((a, b) => (a.color > b.color ? 1 : -1));
      if (orden === 'asc')
        heroes = heroes.sort((a, b) => (a.color > b.color ? -1 : 1));
    }
    return heroes;
  }
}
