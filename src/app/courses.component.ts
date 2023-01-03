import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  // Below is an example of string interpolation
  template: `
    <h2>{{ title }}</h2>
    <ul>
      <li></li>
    </ul>
  `,
})
export class CoursesComponent {
  title = 'List of courses';
  courses = ['course1', 'course2', 'course3'];
  // getTitle() {
  //   return this.title;
  // }
}
