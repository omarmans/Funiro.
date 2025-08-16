import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-rooms',
  imports: [],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
export class RoomsComponent {
  currentIndex = signal(0);
  rooms = signal([
    {
      index: 1,
      name: 'Bed Room 1',
      p: 'inner Peace',
      img: 'imgs/home/rooms/Rectangle 24.png',
    },
    {
      index: 2,
      name: 'Bed Room 2',
      p: ' Peace of Shit',
      img: 'imgs/home/rooms/Rectangle 25.png',
    },
    {
      index: 2,
      name: 'Bed Room 2',
      p: ' Peace of Shit',
      img: 'imgs/home/rooms/Rectangle 25.png',
    },
    {
      index: 2,
      name: 'Bed Room 2',
      p: ' Peace of Shit',
      img: 'imgs/home/rooms/Rectangle 25.png',
    },
  ]);

  selectRoom(index: number) {
    this.currentIndex.set(index);
  }

  // زرار التالي
  nextRoom() {
    const next = (this.currentIndex() + 1) % this.rooms().length;
    this.currentIndex.set(next);
  }
}

// 404 × 582 px
