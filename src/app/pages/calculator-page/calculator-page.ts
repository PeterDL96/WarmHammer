import { Component } from '@angular/core';
import { Button } from "../../components/button/button";
import { MenuBar } from "../../components/menu-bar/menu-bar";
import { NumericalInput } from '../../components/numerical-input/numerical-input';

@Component({
  selector: 'app-calculator-page',
  imports: [Button, NumericalInput, MenuBar],
  templateUrl: './calculator-page.html',
  styleUrl: './calculator-page.scss'
})
export class CalculatorPage {

  public unit: any = {
    name: 'Skarbrand',
    model: [1],
    weaponStats: {
      range: 'melee',
      attack: 8,
      weaponSkill: 2,
      strength: 16,
      armorPenetration: 4,
      damage: 6,
      keywords:[]
    }
  }
}
