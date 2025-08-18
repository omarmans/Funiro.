import { Component, input } from '@angular/core';

@Component({
  selector: 'app-title-page-routing',
  imports: [],
  templateUrl: './title-page-routing.component.html',
  styleUrl: './title-page-routing.component.scss',
})
export class TitlePageRoutingComponent {
  page = input.required<string>();
}
