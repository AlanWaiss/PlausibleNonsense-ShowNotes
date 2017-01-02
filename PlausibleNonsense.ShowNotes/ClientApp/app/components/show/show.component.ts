import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ShowNotes } from "../../show";
import { Show } from "../../show";
import { Segment } from "../../show";
import { ShowService } from "../../show.service";

import 'rxjs/add/operator/switchMap';

@Component({
	//selector: "series-list",
	template: `
<h2 *ngIf="show">{{ show.title }}</h2>

<div *ngIf="segments">
	<show-segment *ngFor="let segment of segments" [segment]="segment"></show-segment>
</div>
`,
	providers: [
		ShowService
	]
})
export class ShowComponent implements OnInit {
	public show: Show;
	public segments: Segment[];

	constructor(
		private showService: ShowService,
		private route: ActivatedRoute,
		private location: Location
	) { }

	ngOnInit(): void {
		this.route.params.switchMap((params: Params) => this.showService.get(params["id"], +params["num"]))
			.subscribe(showNotes => {
				this.show = showNotes.show;
				this.segments = showNotes.segments;
			});
	}
}