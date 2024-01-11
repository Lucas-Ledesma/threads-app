import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ExpandComponent } from '../../icons/expand/expand.component';
import { LikeComponent } from '../../icons/like/like.component';
import { CommentFormComponent } from '../comment-form/comment-form.component';
import { Comment } from '../../interfaces/comment.interface';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [NgIf, ExpandComponent, LikeComponent, CommentFormComponent],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
})
export class CommentComponent {
  @Input() comment!: Comment;

  isExpanded = false;

  isReplying = false;

  toggelExpanded() {
    this.isExpanded = !this.isExpanded;
  }

  toggelReplaying() {
    this.isReplying = !this.isReplying;
    if (this.isReplying) {
      this.isExpanded = true;
    }
  }
}
