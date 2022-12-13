import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseDataService } from '../service/data/course-data.service';

export class Course {
  constructor(
    public id: number,
    public name: string,
    public link: string,
    public startedOn: Date,
    public completedOn: Date,
    public status: string
  ) { }
}

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})

export class ListCoursesComponent implements OnInit {
  courses: Course[] = []
  deleteMessage = ""

  constructor(private courseService: CourseDataService, private router: Router) { }

  ngOnInit(): void {
    this.refreshCourses();
  }

  refreshCourses() {
    this.courseService.retrieveAllCourses().subscribe(
      response => {
        this.courses = response;
      }
    )
  }

  deleteCourse(id: number) {
    this.courseService.deleteCourseById(id).subscribe(
      response => {
        console.log(response);
        this.deleteMessage = `Course ${id} deleted successfully!`
        this.refreshCourses();
      }
    );
  }

  updateCourse(id: number) {
    this.router.navigate(["courses", id])
  }

  addCourse() {
    this.router.navigate(["courses", -1]);
  }

}
