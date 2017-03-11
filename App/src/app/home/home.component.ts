import { Component, OnInit } from '@angular/core';
import { RouterModule, Route} from '@angular/Router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	user: any = [
		{ username: 'Noel', id: 1 },
		{ username: 'Bose', id: 2 },
		{ username: 'Bill', id: 3 },
		{ username: 'Remya', id: 4 }

	];
  constructor() { }

  ngOnInit() {
  }

}
