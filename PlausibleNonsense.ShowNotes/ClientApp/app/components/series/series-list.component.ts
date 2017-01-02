import { Component, OnInit } from "@angular/core";
import { Location } from '@angular/common';
import { SeriesSummary } from "../../series";
import { Series } from "../../series";
import { SeriesService } from "../../series.service";

@Component({
	//selector: "series-list",
	template: require("./series-list.html"),
	providers: [
		SeriesService
	]
})
export class SeriesListComponent implements OnInit {
	public list: SeriesSummary[];

	constructor(
		private seriesService: SeriesService
	) { }
	
	ngOnInit(): void {
		this.seriesService.list().then(list => this.list = list);
	}
}