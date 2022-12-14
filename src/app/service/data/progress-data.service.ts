import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Progress } from 'src/app/progress-table/progress-table.component';

@Injectable({
  providedIn: 'root'
})
export class ProgressDataService {
  constructor(private http: HttpClient) { }

  retrieveProgress(id: number) {
    return this.http.get<Array<Progress>>(`http://localhost:8080/courses/${id}/progress`);
  }

  retrieveProgressById(courseId: number, progressId: number) {
    return this.http.get<Progress>(`http://localhost:8080/courses/${courseId}/progress/${progressId}`);
  }

  createProgress(progress: Progress, id: number) {
    return this.http.post(`http://localhost:8080/courses/${id}/progress`, progress);
  }

  updateProgressById(progressId: number, courseId: number, progress: Progress) {
    return this.http.put(`http://localhost:8080/courses/${courseId}/progress/${progressId}`, progress);
  }

  deleteProgress(courseId: number, progressId: number) {
    return this.http.delete(`http://localhost:8080/courses/${courseId}/progress/${progressId}`);
  }
}
