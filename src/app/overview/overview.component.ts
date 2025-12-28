import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { User } from '../models/user';
import { map } from 'rxjs';
import { fromPromise } from 'rxjs/internal/observable/innerFrom';

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

  async loadData() {
    try {
      this.message = 'Loading data...';
      const loadedUser = await this.dataService.getUser();
      this.user = loadedUser

      this.dataLoaded = true;
        this.message = '';
    }    
    catch(error) {
      console.error('Failed to load user for overview: ', error);
    }
  }

}
