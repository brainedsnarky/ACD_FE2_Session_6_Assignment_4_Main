import { RouterModule , Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent} from './contact/contact.component';

 const app: Routes =
	[
		{ path: '', component: HomeComponent },
		{ path:'about', component:AboutComponent ,
			children:
			[
				{ path: 'home', component: HomeComponent },
				{ path: 'contact', component: ContactComponent }
			]
		},
		{ path:'contact',component: ContactComponent },
		{ path: 'about/:username/:id', component: AboutComponent },
		
		{ path:'**', component: HomeComponent }
	];

export const routing = RouterModule.forRoot(app);

