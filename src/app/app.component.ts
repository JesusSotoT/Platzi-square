import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
lugares:any = [
		{plan: 'Pagado',cercania: 1, distancia: 1 , active: true,nombre:'Floreria la Gardenia'},
		{plan: 'Pagado',cercania: 1, distancia: 1.8 , active: false,nombre:'Donas la pasadita'},
		{plan: 'gratuito',cercania: 2, distancia: 5 , active: true,nombre:'Veterinaria Huellitas felices'},
		{plan: 'gratuito',cercania: 3, distancia: 10 , active: false,nombre:'Floreria la Gardenia'},
		{plan: 'Pagado',cercania: 3, distancia: 35 , active: true,nombre:'Donas la pasadita'},
		{plan: 'gratuito',cercania: 3, distancia: 120 , active: false,nombre:'Cementerio Aqui descansa tu mama'}

];

  lat: number = 20.712651;
  lng: number = -103.409950;

  constructor(){

  }


}
