import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../model/user';
import { map } from 'rxjs';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css',
  standalone: false
})
export class OverviewComponent implements OnInit {

  user: User;
  id : number;
  dataLoaded = false;
  message = '';

  constructor(private dataService: DataService) {
    this.user = new User();
    this.id = 1;
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.message = 'Loading data...';
    this.dataService.getUser(+this.id)
    .pipe(map (user => {
      return user;
    }))
    .subscribe(
      (next: User) => {
        this.user = next;
        this.dataLoaded = true;
        this.message = '';
      }
    );
  }

}
