import { Component, signal } from '@angular/core';
import { RatingStarsComponent } from '../../components/rating-stars/rating-stars.component';
import { TitlePageRoutingComponent } from '../../components/title-page-routing/title-page-routing.component';
import { BenefitsComponent } from '../shop/benefits/benefits.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';

@Component({
  selector: 'app-blog',
  imports: [TitlePageRoutingComponent, BenefitsComponent, PaginationComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {
  articles = signal([
    {
      writer: 'Admin',
      date: '14 Oct2022',
      type: 'wood',
      header: 'Going all-in with millennial design',
      subject:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.',
      img: 'imgs/blog/GoingAllInWithMillennialDesign.png',
    },
    {
      writer: 'Admin',
      date: '14 Oct 2022',
      type: 'Handmade',
      header: 'Exploring new ways of decorating',
      subject:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.',
      img: 'imgs/blog/ExploringNewWaysOfDecorating.png',
    },
    {
      writer: 'Admin',
      date: '14 Oct 2022',
      type: 'Wood',
      header: 'Handmade pieces that took time to make',
      subject:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.',
      img: 'imgs/blog/HandmadePiecesThatTookTimeToMake.png',
    },
  ]);
  posts = signal([
    {
      img: 'imgs/blog/posts/GoingAllInWithMillennialDesign.png',
      header: 'Going All-In With Millennial Design.png',
      date: '03 Aug2022',
    },
    {
      img: 'imgs/blog/posts/ExploringNewWaysOfDecorating.png',
      header: 'Exploring new ways of decorating',
      date: '03 Aug2022',
    },
    {
      img: 'imgs/blog/posts/HandmadePiecesThatTookTimeToMake.png',
      header: 'Handmade pieces that took time to make',
      date: '03 Aug2022',
    },
    {
      img: 'imgs/blog/posts/ModernHomeInMilan.png',
      header: 'Modern home in Milan',
      date: '03 Aug2022',
    },
    {
      img: 'imgs/blog/posts/ColorfulOfficeRedesign.png',
      header: 'Colorful office redesign',
      date: '03 Aug2022',
    },
  ]);
}
