import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../list-courses/list-courses.component';
import { CourseDataService } from '../service/data/course-data.service';
import { ProgressDataService } from '../service/data/progress-data.service';

export class Progress {
  constructor(
    public id: number,
    public description: string,
    public date: Date,
    public course: Course
  ) { }
}


@Component({
  selector: 'app-progress-table',
  templateUrl: './progress-table.component.html',
  styleUrls: ['./progress-table.component.css']
})
export class ProgressTableComponent implements OnInit {

  id!: number;
  progress!: Array<Progress>
  course!: Course
  deleteMessage = ""

  constructor(private progressService: ProgressDataService, private courseService: CourseDataService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params["id"];
    this.progress = [];

    if (this.id != -1) {
      this.progressService.retrieveProgress(this.id).subscribe(
        response => {
          this.progress = response
          this.course = response[0].course;
        }
      )
    }
  }

  refreshProgress(courseId: number) {
    this.progressService.retrieveProgress(courseId).subscribe(
      response => {
        this.progress = response;
      }
    )
  }

  updateProgress(courseId: number, progressId: number) {
    this.router.navigate(["courses", courseId, "progress", progressId])
  }

  deleteProgress(courseId: number, progressId: number) {
    this.progressService.deleteProgress(courseId, progressId).subscribe(
      response => {
        console.log(response);
        this.deleteMessage = `Progress deleted successfully!`
        this.refreshProgress(courseId);
      }
    );
  }

}
