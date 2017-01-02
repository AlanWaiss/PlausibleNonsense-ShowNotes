import { SeriesSummary } from './series';
import { Series } from './series';

let all: Series[] = [
	{
		id: "plausible-nonsense",
		title: "Plausible Nonsense",
		shows: [
			{
				num: 1,
				title: "Creating a new Angular 2 Project",
				publish: new Date(2016, 0, 1)
			},
			{
				num: 2,
				title: "Adding the Series List",
				publish: new Date(2016, 1, 1)
			},
			{
				num: 2.1,
				title: "Routing to Series Detail",
				publish: new Date(2016, 1, 2)
			},
			{
				num: 3,
				title: "Selecting a Single Series",
				publish: new Date(2016, 2, 1)
			},
			{
				num: 4,
				title: "Displaying the Shows",
				publish: new Date(2016, 3, 1)
			},
			{
				num: 5,
				title: "Selecting a Show",
				publish: new Date(2016, 4, 1)
			},
			{
				num: 6,
				title: "Creating Templates",
				publish: new Date(2016, 5, 1)
			}
		]
	},
	{
		id: "deep-thoughts",
		title: "Deep Thoughts",
		shows: [
			{
				num: 1,
				title: "Why is Angular 2 so complicated?",
				publish: new Date(2016, 0, 1)
			}
		]
	}
];

export let SERIES: SeriesSummary[] = [];

export let SERIES_BY_ID = {};

for (let i = 0, len = all.length; i < len; i++) {
	SERIES[i] = {
		id: all[i].id,
		title: all[i].title,
		showCount: all[i].shows.length
	};

	SERIES_BY_ID[all[i].id] = all[i];
}