import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss'],
})
export class PetComponent implements OnInit {
  public menuSettings: { visible: boolean } = { visible: false };
  public buttonSettings: { active: boolean } = { active: false };
  constructor() {}

  ngOnInit(): void {}

  toggleMenu() {
    this.menuSettings.visible = !this.menuSettings.visible;
    this.buttonSettings.active = !this.buttonSettings.active;
  }
}
