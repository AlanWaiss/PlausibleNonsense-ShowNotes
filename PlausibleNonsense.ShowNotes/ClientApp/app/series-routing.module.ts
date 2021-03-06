﻿import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeriesListComponent } from "./components/series/series-list.component";
import { SeriesDetailComponent } from "./components/series/series-detail.component";
import { SeriesHomeComponent } from "./components/series/series-home.component";
import { ShowComponent } from "./components/show/show.component";

const seriesRoutes: Routes = [
	{
		path: "series/:id/:num",
		component: ShowComponent
	},
	{
		path: "series",
		component: SeriesListComponent,
		children: [
			{
				path: ":id",
				component: SeriesDetailComponent
			},
			{
				path: "",
				component: SeriesHomeComponent
			}
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(seriesRoutes)
	],
	exports: [
		RouterModule
	]
})
export class SeriesRoutingModule { }