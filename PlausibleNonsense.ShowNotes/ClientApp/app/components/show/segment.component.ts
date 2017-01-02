import { Component, Input } from '@angular/core';

import { Segment } from "../../show";

@Component({
	selector: "show-segment",
	template: `
<div *ngIf="segment">
	<div [ngClass]="'segment' + (segment.type ? ' ' + segment.type : '')">
		<h3 *ngIf="segment.title">{{segment.title}}</h3>
		<a *ngIf="segment.link" href="{{segment.link}}" class="segment-content" target="_blank">{{segment.content || segment.link}}</a>
		<div *ngIf="!segment.link && segment.content" class="segment-content">{{segment.content}}</div>
	</div>
	<div *ngIf="segment.segments && segment.segments.length">
		<show-segment *ngFor="let sub of segment.segments" [segment]="sub"></show-segment> 
	</div>
</div>
`,
	styles: [
		require("./segment.min.css")
	]
})
export class SegmentComponent {
	@Input()
	segment: Segment;
}