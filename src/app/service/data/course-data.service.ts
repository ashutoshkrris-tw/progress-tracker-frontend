import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';
import { Course } from 'src/app/list-courses/list-courses.component';

@Injectable({
  providedIn: 'root'
})
export class CourseDataService {

  constructor(private http: HttpClient) { }

  retrieveAllCourses() {
    return this.http.get<Course[]>(`${API_URL}/courses`);
  }

  retrieveCourseById(id: number) {
    return this.http.get<Course>(`${API_URL}/courses/${id}`)
  }

  deleteCourseById(id: number) {
    return this.http.delete(`${API_URL}/courses/${id}`)
  }

  updateCourseById(id: number, course: Course) {
    return this.http.put(`${API_URL}/courses/${id}`, course);
  }

  createCourse(course: Course) {
    return this.http.post(`${API_URL}/courses/`, course);
  }
}
