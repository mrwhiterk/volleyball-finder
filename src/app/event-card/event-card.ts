import { Component } from '@angular/core';
import { VolleyballEvent } from '../models/volleyball-event';

@Component({
  selector: 'app-event-card',
  imports: [],
  templateUrl: './event-card.html',
  styleUrl: './event-card.css',
})
export class EventCard {
events: VolleyballEvent[] = [
  {
    id: '1',
    title: 'Saturday Beach Doubles',
    description: 'Casual 2v2 on the sand. All levels welcome, bring water and sunscreen.',
    location: 'Ocean Park Courts 3 & 4',
    date: new Date('2026-11-14T10:00'),
    imageUrl: 'https://picsum.photos/seed/beach/400/200',
  },
  {
    id: '2',
    title: 'Coed Indoor League – Week 5',
    description: 'Regular season match vs. the Net Ninjas. Arrive 15 min early to warm up.',
    location: 'Downtown Rec Center, Gym B',
    date: new Date('2026-11-18T19:30'),
  },
  {
    id: '3',
    title: 'Turkey Bowl 4v4 Tournament',
    description: 'Holiday tournament, $20 per team. Prizes for the top 3 teams. Sign up by Nov 22.',
    location: 'Westside Sports Complex',
    date: new Date('2026-11-28T09:00'),
    imageUrl: 'https://picsum.photos/seed/tourney/400/200',
  },
];
}
