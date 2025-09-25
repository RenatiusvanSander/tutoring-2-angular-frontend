import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-settings',
  standalone: false,
  
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent implements OnInit {

  user: User;

  constructor(private activatedRoute: ActivatedRoute) {
    this.user = new User();
  }

  ngOnInit(): void {
    this.user = this.activatedRoute.snapshot.data[0];
  }
}
