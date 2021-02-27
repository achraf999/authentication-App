import { Component, OnInit } from '@angular/core';
import { UserService } from '../../sevices/user.service';

@Component({
  selector: 'app-board-moderator',
  templateUrl: './moderator-board.component.html',
  styleUrls: ['./moderator-board.component.css']
})
export class BoardModeratorComponent implements OnInit {

  content: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getModeratorBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

}