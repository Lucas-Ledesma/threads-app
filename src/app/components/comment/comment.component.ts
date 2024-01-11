import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [NgIf],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
})
export class CommentComponent {
  isExpanded = false;

  toggelExpanded() {
    this.isExpanded = !this.isExpanded;
  }
}
