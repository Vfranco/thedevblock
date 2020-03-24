import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { LandingComponent } from './landing/landing.component';
import { ContentComponent } from './content/content.component';
import { CardContentComponent } from './card-content/card-content.component';
import { HelpSectionComponent } from './help-section/help-section.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
	declarations: [
		LandingComponent,
		ContentComponent,
		CardContentComponent,
		HelpSectionComponent,
		FooterComponent		
	],
	imports: [
		CommonModule,
		SharedModule
	],
	exports : [
		LandingComponent
	]
})
export class HomeModule { }
