import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  // Below is an example of string interpolation
  template: `
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
  `
})
export class CoursesComponent {
  title = 'List of courses';
  courses;
  // getTitle() {
  //   return this.title;
  // }
}
