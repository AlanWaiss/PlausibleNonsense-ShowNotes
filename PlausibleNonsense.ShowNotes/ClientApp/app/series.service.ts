import { Injectable } from '@angular/core';
import { SeriesSummary } from './series';
import { Series } from './series';
import { SERIES } from './mock-series';
import { SERIES_BY_ID } from "./mock-series";

@Injectable()
export class SeriesService {
	list(): Promise<SeriesSummary[]> {
		return Promise.resolve(SERIES);
	}

	get(id : string): Promise<Series> {
		return Promise.resolve(SERIES_BY_ID[id]);
	}
}