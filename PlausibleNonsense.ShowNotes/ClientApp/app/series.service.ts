import { Injectable } from '@angular/core';
import { Series } from './series';
import { SERIES } from './mock-series';

@Injectable()
export class SeriesService {
	getSeries(): Promise<Series[]> {
		return Promise.resolve(SERIES);
	}
}