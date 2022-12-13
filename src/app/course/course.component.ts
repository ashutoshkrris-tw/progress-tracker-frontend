import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../list-courses/list-courses.component';
import { CourseDataService } from '../service/data/course-data.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  id!: number;
  course!: Course;

  constructor(private courseService: CourseDataService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params["id"];
    this.course = new Course(this.id, "", "", new Date(), new Date(), "Not Yet Started")

    if (this.id != -1) {
      this.courseService.retrieveCourseById(this.id).subscribe(
        response => this.course = response
      )
    }
  }

  updateCourse() {
    if (this.id == -1) {
      this.courseService.createCourse(this.course).subscribe(
        response => {
          console.log(response)
          this.router.navigate(["courses"]);
        }
      );
    } else {
      this.courseService.updateCourseById(this.id, this.course).subscribe(
        response => {
          console.log(response)
          this.router.navigate(["courses"]);
        }
      );
    }
  }

}
