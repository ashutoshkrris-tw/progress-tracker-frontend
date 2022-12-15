import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from 'src/app/list-courses/list-courses.component';

@Injectable({
  providedIn: 'root'
})
export class CourseDataService {

  constructor(private http: HttpClient) { }

  retrieveAllCourses() {
    return this.http.get<Course[]>("http://localhost:8080/courses");
  }

  retrieveCourseById(id: number) {
    return this.http.get<Course>(`http://localhost:8080/courses/${id}`)
  }

  deleteCourseById(id: number) {
    return this.http.delete(`http://localhost:8080/courses/${id}`)
  }

  updateCourseById(id: number, course: Course) {
    return this.http.put(`http://localhost:8080/courses/${id}`, course);
  }

  createCourse(course: Course) {
    return this.http.post(`http://localhost:8080/courses/`, course);
  }
}
