import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {

  visible: boolean = this.userService.logIn

  items: MenuItem[] | undefined

  activeItem: MenuItem | undefined

  constructor(
    public userService: UserService
  ) { }

  ngOnInit() {
    this.items = [
      { label: 'Произведения', routerLink: '/', routerLinkActiveOptions: { exact: true } },
      { label: 'Категории', routerLink: '/categories' },
      { label: 'Жанры', routerLink: '/genres' },
      { label: 'Регистрация', routerLink: '/create_user', visible: !this.visible },
      {
        label: 'Вход',
        routerLink: '/login',
        visible: !this.visible,
      },
      {
        label: 'Выход',
        visible: this.visible,
        command: () => { this.userService.logout() }
      }
    ]
    this.activeItem = this.items[0]
  }
}
