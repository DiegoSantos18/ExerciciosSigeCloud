import { Component, OnInit } from '@angular/core';
import { TesteApiService } from './teste-api.service';

import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'Localização por IP com API';
  constructor(private TesteApiService: TesteApiService) {}
  
  ngOnInit() {
  
  }
}

