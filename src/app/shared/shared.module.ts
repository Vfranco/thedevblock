import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
	declarations: [
		CardComponent, 
		NavbarComponent, 
		TopbarComponent
	],
	imports: [
		CommonModule
	],
	exports : [
		CardComponent,
		NavbarComponent,
		TopbarComponent
	]
})
export class SharedModule { }
