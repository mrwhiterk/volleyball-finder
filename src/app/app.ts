import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { EventCard } from './event-card/event-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, EventCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('volley-finder');
}
