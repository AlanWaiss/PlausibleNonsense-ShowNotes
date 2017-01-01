import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Series } from "../../types/series";

@Component({
	selector: "series-list",
	template: require("./series-list.html")
})
export class SeriesListComponent {
	public list: Series[];

}