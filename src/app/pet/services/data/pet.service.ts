import { Injectable } from '@angular/core';
import { Pet } from '../../models/Pet';

@Injectable()
export class PetService {
  public pets: Pet[] = [
    new Pet('0', 'Ringo', 'Black chihuahua with red collar', new Date()),
    new Pet('1', 'Perla', 'White angora cat with blue eyes', new Date()),
    new Pet(
      '2',
      'Lucas',
      'Brown dog with curly hair Brown dog with curly hair  Brown dog with curly hair  Brown dog with curly hair  Brown dog with curly hair  Brown dog with curly hair  Brown dog with curly hair  Brown dog with curly hair  Brown dog with curly hair  Brown dog with curly hair  Brown dog with curly hair  Brown dog with curly hair  Brown dog with curly hair  Brown dog with curly hair ',
      new Date()
    ),
    new Pet('3', 'Lucas', 'Brown dog with curly hair', new Date()),
    new Pet('4', 'Lucas', 'Brown dog with curly hair', new Date()),
    new Pet('5', 'Lucas', 'Brown dog with curly hair', new Date()),
    new Pet('6', 'Lucas', 'Brown dog with curly hair', new Date()),
    new Pet('7', 'Lucas', 'Brown dog with curly hair', new Date()),
    new Pet('8', 'Lucas', 'Brown dog with curly hair', new Date()),
    new Pet('9', 'Lucas', 'Brown dog with curly hair', new Date()),
    new Pet('10', 'Lucas', 'Brown dog with curly hair', new Date()),
    new Pet('11', 'Lucas', 'Brown dog with curly hair', new Date()),
    new Pet('12', 'Lucas', 'Brown dog with curly hair', new Date()),
    new Pet('13', 'Lucas', 'Brown dog with curly hair', new Date()),
    new Pet('14', 'Lucas', 'Brown dog with curly hair', new Date()),
  ];

  constructor() {}

  getPets(): Pet[] {
    return this.pets;
  }

  getPetById(id: string): Pet | undefined {
    return this.pets.find((pet) => pet.id === id);
  }
}
