import { Injectable } from '@angular/core';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  public courses: Course[] = []

  constructor() { }

  public getCourses(): Course[] {
    return this.courses
  }

  public addCourse(Course: Course): void {
    this.courses.push(Course);
  }


}
