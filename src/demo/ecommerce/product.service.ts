import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
	productImagePath = 'demo/assets/demo-images/products/';
	getProducts() {
		return [
			{
				name: 'Silver Watch',
				img: this.productImagePath + 'watch-silver.png',
				sash: 'sash-primary',
				sash_icon: 'star',
				sash_text: 'Featured'
			},
			{
				name: 'Black Watch',
				img: this.productImagePath + 'watch-black.png',
				sash: 'sash-info',
				sash_icon: 'card_giftcard',
				sash_text: 'Gift'
			},
			{
				name: 'Red Watch',
				img: this.productImagePath + 'watch-edition-red.png',
				sash: 'sash-danger',
				sash_icon: 'flash_on',
				sash_text: 'Popular'
			},
			{
				name: 'Blue Watch',
				img: this.productImagePath + 'watch-edition-blue.png',
				sash: '',
				sash_icon: 'info',
				sash_text: 'Featured'
			},
			{
				name: 'Black Watch',
				img: this.productImagePath + 'watch-edition-black.png',
				sash: 'sash-danger',
				sash_icon: 'favorite',
				sash_text: 'Best Choice'
			},
			{
				name: 'Sport Watch',
				img: this.productImagePath + 'watch-sport-blue.png',
				sash: 'sash-success',
				sash_icon: 'new_releases',
				sash_text: 'New'
			},
			{
				name: 'Sport Watch',
				img: this.productImagePath + 'watch-sport-green.png',
				sash: 'sash-warning',
				sash_icon: 'money_off',
				sash_text: 'Free Shipping'
			},
			{
				name: 'Sport Watch',
				img: this.productImagePath + 'watch-sport-white.png',
				sash: 'sash-white',
				sash_icon: 'star',
				sash_text: 'Featured'
			}
		];
	}
}
