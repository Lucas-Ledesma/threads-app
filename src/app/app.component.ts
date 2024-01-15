import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { UserService } from './service/user.service';
import { User } from './interfaces/user.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'threads-app';
  userService = inject(UserService);

  user = signal<User | null>(null);

  ngOnInit(): void {
    this.user.set(this.userService.getUserFromLocasStorage());
  }

  logout() {
    this.userService.disconectUser();
    this.user.set(null);
  }
}
