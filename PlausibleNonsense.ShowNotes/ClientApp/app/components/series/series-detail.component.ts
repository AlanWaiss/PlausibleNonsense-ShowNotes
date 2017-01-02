import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Series } from "../../series";
import { SeriesService } from "../../series.service";

import 'rxjs/add/operator/switchMap';

@Component({
	selector: "series-detail",
	template: require("./series-detail.html"),
	styles: [
		require("./series-detail.min.css")
	],
	providers: [
		SeriesService
	]
})
export class SeriesDetailComponent implements OnInit {
	public series: Series;

	constructor(
		private seriesService: SeriesService,
		private route: ActivatedRoute,
		private location: Location
	) { }

	onTitleChange(newValue: string) {
		if (this.series) {
			this.series.title = newValue;
			this.series.id = newValue.trim().replace(/\W+/g, "-").toLowerCase();
		}
	}

	ngOnInit(): void {
		this.route.params.switchMap((params: Params) => this.seriesService.get(params["id"]))
			.subscribe(series => this.series = series);
	}
}