import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { Comment } from '../interfaces/comment.interface';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  http = inject(HttpClient);

  getComments(parentId: string = '') {
    let url = `${environment.API_URL}/comments`;
    if (parentId) url += `?parentId=${parentId}`;
    return this.http.get<Comment[]>(url);
  }
}
