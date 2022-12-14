import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../list-courses/list-courses.component';
import { Progress } from '../progress-table/progress-table.component';
import { CourseDataService } from '../service/data/course-data.service';
import { ProgressDataService } from '../service/data/progress-data.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  courseId!: number;
  progressId!: number;
  course!: Course;
  progress!: Progress

  constructor(private progressService: ProgressDataService, private courseService: CourseDataService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.courseId = this.activatedRoute.snapshot.params["courseId"];
    this.progressId = this.activatedRoute.snapshot.params["progressId"];
    this.course = new Course(this.courseId, "", "", new Date(), new Date(), "Not Yet Started")
    this.progress = new Progress(this.progressId, "", new Date(), this.course)

    if (this.progressId != -1) {
      this.progressService.retrieveProgressById(this.courseId, this.progressId).subscribe(
        response => this.progress = response
      )
    }
  }

  updateProgress() {
    if (this.progressId == -1) {
      this.progressService.createProgress(this.progress, this.courseId).subscribe(
        response => {
          console.log(response)
          this.router.navigate(["courses", this.courseId, "progress"]);
        }
      );
    } else {
      this.progressService.updateProgressById(this.progressId, this.courseId, this.progress).subscribe(
        response => {
          console.log(response)
          this.router.navigate(["courses", this.courseId, "progress"]);
        }
      );
    }
  }
}

