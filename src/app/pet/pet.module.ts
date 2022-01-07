import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

import { PetRoutingModule } from './pet-routing.module';
import { PetComponent } from './pet.component';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';
import { DetailComponent } from './detail/detail.component';
import { PetService } from './services/data/pet.service';

@NgModule({
  declarations: [PetComponent, ListComponent, CardComponent, DetailComponent],
  imports: [CommonModule, PetRoutingModule, MatGridListModule, MatCardModule],
  providers: [PetService],
})
export class PetModule {}
