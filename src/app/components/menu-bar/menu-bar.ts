import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-menu-bar',
  imports: [MenubarModule],
  templateUrl: './menu-bar.html',
  styleUrl: './menu-bar.scss'
})
export class MenuBar {
  items: MenuItem[] = [
    {label: "Home"} as MenuItem,
    {label: "Factions"} as MenuItem,
    {label: "Contact"} as MenuItem
  ];
}
