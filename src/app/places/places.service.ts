import { Injectable } from '@angular/core';

import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
      new Place(
        'p1',
        'Manhattan Mansion',
        'In the heart of New York City.',
        'https://cdn.pixabay.com/photo/2016/11/22/19/17/buildings-1850129__340.jpg',
        149.99
      ),
      new Place(
        'p2',
        'L\'Amour Toujours',
        'A romantic place in Paris!',
        'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__340.jpg',
        189.99
      ),
      new Place(
        'p3',
        'The Foggy Palace',
        'Not your average city trip',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGxhXMj_egM3ykjfLJF6KqEyrCag3MT4xX2g&usqp=CAU',
        99.99
      )
  ];

  get places() {
    return [...this._places];
  }

  constructor() { }

  getPlace(id: string) {
    return {...this._places.find(p => p.id === id)};
  }
}
