import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from '../models/Pet';
import { PetService } from '../services/data/pet.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  pet: Pet = new Pet('', '', '', new Date(), '');
  constructor(
    private route: ActivatedRoute,
    private service: PetService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const petId = this.route.snapshot.params['id'];
    const pet = this.service.getPetById(petId);
    if (pet !== undefined) {
      this.pet = pet;
    }
  }

  goBackToPetList() {
    this.router.navigate(['/']);
  }
}
