import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ExpandComponent } from '../../icons/expand/expand.component';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [NgIf, ExpandComponent],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
})
export class CommentComponent {
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
