import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { PetRoutingModule } from './pet-routing.module';
import { PetComponent } from './pet.component';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';
import { DetailComponent } from './detail/detail.component';
import { PetService } from './services/data/pet.service';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [PetComponent, ListComponent, CardComponent, DetailComponent, FormComponent],
  imports: [
    CommonModule,
    PetRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
  ],
  providers: [PetService, {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}],
})
export class PetModule {}
