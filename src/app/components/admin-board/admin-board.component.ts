import { Component, OnInit } from '@angular/core';
import { UserService } from '../../sevices/user.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './admin-board.component.html',
  styleUrls: ['./admin-board.component.css']
})
export class BoardAdminComponent implements OnInit {

  content: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

}