import { Component, OnInit } from '@angular/core';
import { PagesService } from '../pages.service';

@Component({
	selector: 'app-page-blog',
	styles: [],
	templateUrl: './blog.component.html',
	providers: [PagesService]
})
export class PageBlogComponent implements OnInit {
	posts;

	constructor(private pagesService: PagesService) {}

	getPosts(): void {
		this.posts = this.pagesService.getPosts();
	}

	ngOnInit(): void {
		this.getPosts();
	}
}
