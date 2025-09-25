import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { User } from '../models/user';
import { map } from 'rxjs';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css',
  standalone: false
})
export class OverviewComponent implements OnInit {

  user: User;
  dataLoaded = false;
  message = '';

  constructor(private dataService: DataService) {
    this.user = new User();
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.message = 'Loading data...';
    this.dataService.getUser()
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
