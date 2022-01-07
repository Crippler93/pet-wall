import { Component, OnInit } from '@angular/core';
import { Pet } from '../models/Pet';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public pets: Pet[] = [
    new Pet('Ringo', 'Black chihuahua with red collar', new Date()),
    new Pet('Perla', 'White angora cat with blue eyes', new Date()),
    new Pet(
      'Lucas',
      'Brown dog with curly hair Brown dog with curly hair  Brown dog with curly hair  Brown dog with curly hair  Brown dog with curly hair  Brown dog with curly hair  Brown dog with curly hair  Brown dog with curly hair  Brown dog with curly hair  Brown dog with curly hair  Brown dog with curly hair  Brown dog with curly hair  Brown dog with curly hair  Brown dog with curly hair ',
      new Date()
    ),
    new Pet('Lucas', 'Brown dog with curly hair', new Date()),
    new Pet('Lucas', 'Brown dog with curly hair', new Date()),
    new Pet('Lucas', 'Brown dog with curly hair', new Date()),
    new Pet('Lucas', 'Brown dog with curly hair', new Date()),
    new Pet('Lucas', 'Brown dog with curly hair', new Date()),
    new Pet('Lucas', 'Brown dog with curly hair', new Date()),
    new Pet('Lucas', 'Brown dog with curly hair', new Date()),
    new Pet('Lucas', 'Brown dog with curly hair', new Date()),
    new Pet('Lucas', 'Brown dog with curly hair', new Date()),
    new Pet('Lucas', 'Brown dog with curly hair', new Date()),
    new Pet('Lucas', 'Brown dog with curly hair', new Date()),
    new Pet('Lucas', 'Brown dog with curly hair', new Date()),
  ];
  constructor() {}

  ngOnInit(): void {}
}
