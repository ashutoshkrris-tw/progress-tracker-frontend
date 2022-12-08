import { Component } from '@angular/core';

export enum Status {
  NotYetStarted = "Not Yet Started",
  InProgress = "In Progress",
  Completed = "Completed"
}

export class Course {
  constructor(
    public id: Number,
    public name: String,
    public link: String,
    public startedOn: Date,
    public completedOn: Date,
    public status: Status
  ) { }
}

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})

export class ListCoursesComponent {

  courses = [
    new Course(1, "Go Java Full Stack with Spring Boot and Angular", "https://thoughtworks.udemy.com/course/full-stack-application-development-with-spring-boot-and-angular/", new Date("2022-12-06"), new Date(), Status.InProgress),
    new Course(2, "Master Microservices with Spring Boot and Spring Cloud", "https://thoughtworks.udemy.com/course/microservices-with-spring-boot-and-spring-cloud/", new Date("2022-11-01"), new Date("2022-12-05"), Status.Completed)
  ]

}
