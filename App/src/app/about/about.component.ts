import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
	public username: string="Hello";
	public id: string;
	
	constructor(private route: ActivatedRoute) {

		this.route.params.subscribe(params => {
			this.username = params['username']; // (+) converts string 'id' to a number
			this.id = params['id'];
			// In a real app: dispatch action to load the details here.
		});
	}

	ngOnInit() {
	}

}

	


	 



