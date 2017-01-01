import { Component, OnInit } from "@angular/core";
import { Series } from "../../series";
import { SeriesService } from "../../series.service";

@Component({
	selector: "series-list",
	template: require("./series-list.html"),
	providers: [
		SeriesService
	]
})
export class SeriesListComponent implements OnInit {
	public list: Series[];

	constructor(private seriesService: SeriesService) { }

	getSeries(): void {
		this.seriesService.getSeries().then(list => this.list = list);
	}
	ngOnInit(): void {
		this.getSeries();
	}
}