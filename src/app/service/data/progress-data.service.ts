import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';
import { Progress } from 'src/app/progress-table/progress-table.component';

@Injectable({
  providedIn: 'root'
})
export class ProgressDataService {
  constructor(private http: HttpClient) { }

  retrieveProgress(id: number) {
    return this.http.get<Array<Progress>>(`${API_URL}/courses/${id}/progress`);
  }

  retrieveProgressById(courseId: number, progressId: number) {
    return this.http.get<Progress>(`${API_URL}/courses/${courseId}/progress/${progressId}`);
  }

  createProgress(progress: Progress, id: number) {
    return this.http.post(`${API_URL}/courses/${id}/progress`, progress);
  }

  updateProgressById(progressId: number, courseId: number, progress: Progress) {
    return this.http.put(`${API_URL}/courses/${courseId}/progress/${progressId}`, progress);
  }

  deleteProgress(courseId: number, progressId: number) {
    return this.http.delete(`${API_URL}/courses/${courseId}/progress/${progressId}`);
  }
}
