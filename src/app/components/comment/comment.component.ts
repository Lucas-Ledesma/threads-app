import { NgFor, NgIf } from '@angular/common';
import { Component, Input, effect, inject, signal } from '@angular/core';
import { ExpandComponent } from '../../icons/expand/expand.component';
import { LikeComponent } from '../../icons/like/like.component';
import { CommentFormComponent } from '../comment-form/comment-form.component';
import { Comment } from '../../interfaces/comment.interface';
import { CommentService } from '../../service/comment.service';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [NgIf, ExpandComponent, LikeComponent, CommentFormComponent, NgFor],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
})
export class CommentComponent {
  @Input() comment!: Comment;

  commentService = inject(CommentService);

  nestedComments = signal<Comment[]>([]);

  isExpanded = signal(false);

  isReplying = signal(false);

  nestedCommentsEffect = effect(() => {
    if (this.isExpanded()) {
      this.commentService
        .getComments(this.comment._id)
        .subscribe((comments) => this.nestedComments.set(comments));
    }
  });

  toggelExpanded() {
    this.isExpanded.set(!this.isExpanded());
  }

  toggelReplaying() {
    this.isReplying.set(!this.isReplying());
    if (this.isReplying()) {
      this.isExpanded.set(true);
    }
  }
}
