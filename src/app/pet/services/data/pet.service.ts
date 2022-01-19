import { Injectable } from '@angular/core';
import { FormElement } from '../../models/FormElement';
import { Pet } from '../../models/Pet';

@Injectable()
export class PetService {
  public pets: Pet[] = [
    new Pet(
      '0',
      'Ringo',
      'Black chihuahua with red collar',
      new Date(),
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.7MJETawW3E_tjdfM8-JDLAHaE8%26pid%3DApi&f=1'
    ),
    new Pet(
      '1',
      'Perla',
      'White angora cat with blue eyes',
      new Date(),
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP._6SZqiUzqEvAqkcuEg0WtwHaFj%26pid%3DApi&f=1s'
    ),
    new Pet(
      '2',
      'Lucas',
      'Brown dog with curly hair Brown dog with curly hair  Brown dog with curly hair  Brown dog with curly hair  Brown dog with curly hair  Brown dog with curly hair  Brown dog with curly hair  Brown dog with curly hair  Brown dog with curly hair  Brown dog with curly hair  Brown dog with curly hair  Brown dog with curly hair  Brown dog with curly hair  Brown dog with curly hair ',
      new Date(),
      'https://material.angular.io/assets/img/examples/shiba2.jpg'
    ),
  ];



  constructor() {}

  getPets(): Pet[] {
    return this.pets;
  }

  getPetById(id: string): Pet | undefined {
    return this.pets.find((pet) => pet.id === id);
  }

  // TODO: Complete Form Builder
  getFields(): FormElement[] {
    return [
      new FormElement('input', 'Example 1', {placeholder: "text"})
    ]
  }


}
