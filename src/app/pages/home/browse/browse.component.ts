import { Component, signal } from '@angular/core';
import { DynamicHeaderComponent } from '../../../components/dynamic-header/dynamic-header.component';

@Component({
  selector: 'app-browse',
  imports: [DynamicHeaderComponent],
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss'],
})
export class BrowseComponent {
  categorys = signal([
    {
      name: 'Dining',
      img: 'imgs/home/browse/Dining.png',
    },
    {
      name: 'Living',
      img: 'imgs/home/browse/Living.png',
    },
    {
      name: 'Bedroom',
      img: 'imgs/home/browse/Bedroom.png',
    },
  ]);
}
