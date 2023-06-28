import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-diddy-kong',
  templateUrl: './diddy-kong.page.html',
  styleUrls: ['./diddy-kong.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLink]
})
export class DiddyKongPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
