import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from '../models/Pet';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() pet: Pet = new Pet('', '', '', new Date(), '');
  constructor(private router: Router) {}

  ngOnInit(): void {}

  cardClicked() {
    this.router.navigate(['pet', `${this.pet.id}`]);
  }
}
