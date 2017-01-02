import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { SeriesRoutingModule } from "./series-routing.module";
import { SeriesDetailComponent } from "./components/series/series-detail.component";
import { SeriesListComponent } from "./components/series/series-list.component";
import { SeriesHomeComponent } from "./components/series/series-home.component";
import { SeriesService } from "./series.service";
import { ShowComponent } from "./components/show/show.component";
import { SegmentComponent } from "./components/show/segment.component";

@NgModule({
    imports: [
		UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
		FormsModule,
		SeriesRoutingModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
			{ path: 'fetch-data', component: FetchDataComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
	declarations: [
		AppComponent,
		NavMenuComponent,
		CounterComponent,
		FetchDataComponent,
		SeriesListComponent,
		SeriesDetailComponent,
		SeriesHomeComponent,
		ShowComponent,
		SegmentComponent,
		HomeComponent
	],
	providers: [
		SeriesService
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
