import { Show } from "./show";

interface SeriesBase {
	id: string;
	title: string;
}

export interface Series extends SeriesBase {
	shows: Show[];
}

export interface SeriesSummary extends SeriesBase {
	showCount: number;
}