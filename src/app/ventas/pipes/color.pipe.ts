import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/ventas.interfaces';


@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform{

  transform(valor: number) {
    switch(valor){
      case 0: {
        return 'rojo';
      }
      case 1: {
        return 'negro';
      }
      case 2: {
        return 'azul';
      }
      case 3: {
        return 'verde';
      }
      default: {
        return 'NA';
      }
    }
  }

}
