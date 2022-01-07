import { Component, OnInit } from '@angular/core';
import { Pet } from '../models/Pet';
import { PetService } from '../services/data/pet.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public pets: Pet[] = [];
  constructor(private service: PetService) {}

  ngOnInit(): void {
    this.pets = this.service.getPets();
  }
}
