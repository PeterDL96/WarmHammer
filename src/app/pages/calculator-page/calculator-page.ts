import { Component } from '@angular/core';
import { Button } from "../../components/button/button";
import { MenuBar } from "../../components/menu-bar/menu-bar";
import { NumericalInput } from '../../components/numerical-input/numerical-input';
import { Fluid } from 'primeng/fluid';


@Component({
  selector: 'app-calculator-page',
  imports: [Button, NumericalInput, MenuBar, Fluid],
  templateUrl: './calculator-page.html',
  styleUrl: './calculator-page.scss'
})
export class CalculatorPage {
  public weaponStats: any = {
    range: 'melee',
    attack: 8,
    weaponSkill: 2,
    strength: 16,
    armorPenetration: 4,
    damage: 6,
    keywords:[]
  };
}
