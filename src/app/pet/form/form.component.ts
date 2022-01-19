import { Component, OnInit } from '@angular/core';
import { FormElement } from '../models/FormElement';
import { PetService } from '../services/data/pet.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  formElements: FormElement[] = []

  constructor(private petDataService: PetService) { }

  ngOnInit(): void {
    this.formElements = this.petDataService.getFields()
  }

}
