import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculatorPage } from "./pages/calculator-page/calculator-page";
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CalculatorPage, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'WarmHammer';
}
