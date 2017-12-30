import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';

import { PageAboutComponent } from './about/about.component';
import { PageBlogComponent } from './blog/blog.component';
import { PageCareersComponent } from './careers/careers.component';
import { PageContactComponent } from './contact/contact.component';
import { PageFaqsComponent } from './faqs/faqs.component';
import { PageServicesComponent } from './services/services.component';
import { PageTermsComponent } from './terms/terms.component';

export const PagesRoutes: Routes = [
	{
		path: '',
		component: PagesComponent,
		children: [
			{ path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
			{ path: 'about', component: PageAboutComponent },
			{ path: 'blog', component: PageBlogComponent },
			{ path: 'careers', component: PageCareersComponent },
			{ path: 'contact', component: PageContactComponent },
			{ path: 'faqs', component: PageFaqsComponent },
			{ path: 'services', component: PageServicesComponent },
			{ path: 'terms', component: PageTermsComponent }
		]
	}
];

export const PagesRoutingModule = RouterModule.forChild(PagesRoutes);
