import { Injectable } from '@angular/core';
import { SeriesSummary } from './series';
import { Series } from './series';
import { SERIES } from './mock-data';
import { SERIES_BY_ID } from "./mock-data";

@Injectable()
export class SeriesService {
	list(): Promise<SeriesSummary[]> {
		return Promise.resolve(SERIES);
	}

	get(id : string): Promise<Series> {
		return Promise.resolve(SERIES_BY_ID[id]);
	}
}