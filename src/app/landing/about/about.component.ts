import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  contentItems = [
    {
      title: 'Skills',
      description: 'Angular, Vue.Js, AngularJS, C/C++, Python'
    },
    {
      title: 'Languages',
      description: 'English C2, Hungarian Native, Romanian C1, German B2'
    },
    {
      title: 'Hobbies',
      description: 'Drums, Songwriting, Hamburger, Airsoft, Hamburger again'
    },
    {
      title: 'Education',
      description: 'Sapientia - Faculty of Technical and Human Sciences, Târgu Mureş'
    },
    {
      title: 'Mentality',
      description: '"Make Love, Not Warcraft."'
    }
  ]

  toggleSlide(slide: any): void {
    slide.classList.toggle('toggle');
  }
}
