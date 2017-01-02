export interface Show {
	num: number;
	title: string;
	publish: Date;
}

export interface Person {
	name: string;
}

export interface Segment {
	id: string;
	type?: string;
	title?: string;
	assignedTo?: Person;
	content?: string;
	link?: string;
	segments?: Segment[];
}

export interface ShowNotes {
	show: Show;
	segments: Segment[];
}