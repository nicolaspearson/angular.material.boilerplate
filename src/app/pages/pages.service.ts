import { Injectable } from '@angular/core';

@Injectable()
export class PagesService {
	getPosts() {
		return [
			{
				title: 'Dolor sit amet, consectetur adipisicing elit.',
				avatar: 'assets/images-demo/avatars/1.jpg',
				author: 'Jason Bourne',
				category: 'Web Design'
			},
			{
				title: 'Repellat quo rerum iure dolor cumque',
				avatar: 'assets/images-demo/avatars/2.jpg',
				author: 'Bella Swan',
				category: 'Development'
			},
			{
				title:
					'Eligendi doloribus quam amet provident est recusandae ipsum voluptatem',
				avatar: 'assets/images-demo/avatars/3.jpg',
				author: 'Min Chan',
				category: 'Web Design'
			},
			{
				title: 'Laudantium possimus quia ducimus, iusto, placeat',
				avatar: 'assets/images-demo/avatars/4.jpg',
				author: 'Sophia Doe',
				category: 'Marketing'
			},
			{
				title:
					'Enim eius nemo natus magnam sed dolor eveniet architecto molestiae',
				avatar: 'assets/images-demo/avatars/5.jpg',
				author: 'Luna Doe',
				category: 'Development'
			}
		];
	}
}
