import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { PetComponent } from './pet.component';

const routes: Routes = [
  {
    path: '',
    component: PetComponent,
    children: [
      { path: '', component: ListComponent },
      {
        path: 'pet/new',
        component: FormComponent,
      },
      {
        path: 'pet/:id',
        component: DetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetRoutingModule {}
