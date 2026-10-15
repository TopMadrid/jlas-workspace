import { Component, signal } from '@angular/core';
import { JlasSideMenu, TitleColor } from 'jlas-side-menu';

@Component({
  imports: [JlasSideMenu],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('jlas-testbed-app');
  
  TitleColor = TitleColor; // Llama al enum de TitleColor de la libreria
  isAuthenticated = signal(true);
}
