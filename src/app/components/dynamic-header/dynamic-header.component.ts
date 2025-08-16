import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dynamic-header',
  imports: [],
  templateUrl: './dynamic-header.component.html',
  styleUrl: './dynamic-header.component.scss',
})
export class DynamicHeaderComponent {
  h1 = input.required();
  p = input();
}
