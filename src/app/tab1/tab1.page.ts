import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor() {}

  // eslint-disable-next-line @typescript-eslint/member-ordering
  slideOpts = {
    slidesPerView: 5.5,
    spaceBetween: 1,
    centeredSlides: false,
    loop: false,
  };
}
