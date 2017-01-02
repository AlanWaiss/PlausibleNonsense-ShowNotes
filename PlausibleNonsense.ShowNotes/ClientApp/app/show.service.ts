import { Injectable } from '@angular/core';
import { ShowNotes } from './show';
import { SHOW_BY_SERIES } from "./mock-data";

@Injectable()
export class ShowService {
	get(id: string, num: number): Promise<ShowNotes> {
		var series = SHOW_BY_SERIES[id];
		return Promise.resolve(series && series["n" + num]);
	}
}