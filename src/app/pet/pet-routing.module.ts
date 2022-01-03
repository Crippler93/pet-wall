import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { PetComponent } from './pet.component';

const routes: Routes = [
  {
    path: '',
    component: PetComponent,
    children: [{ path: '', component: ListComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetRoutingModule {}
