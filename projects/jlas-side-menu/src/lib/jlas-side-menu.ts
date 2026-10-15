import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export enum TitleColor {
  red = 'text-red-500',
  green = 'text-green-500',
  blue = 'text-blue-500',
  purple = 'text-purple-500',
}

@Component({
  selector: 'lib-jlas-side-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './jlas-side-menu.html',
})
export class JlasSideMenu {
  isAuthenticated = input(false); //Por defecto false

  titleColor = input<TitleColor>(TitleColor.purple); //Por defecto purple

  signOut = output();
  signIn = output();
}
