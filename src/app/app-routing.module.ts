import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { ErrorComponent } from './error/error.component';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "courses", component: ListCoursesComponent, canActivate: [RouteGuardService] },
  { path: "logout", component: LogoutComponent, canActivate: [RouteGuardService] },
  { path: "courses/:id", component: CourseComponent, canActivate: [RouteGuardService] },
  { path: "**", component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
