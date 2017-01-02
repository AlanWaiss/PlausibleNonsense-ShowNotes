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

export let SHOW_BY_SERIES = {};

for (let i = 0, len = all.length; i < len; i++) {
	var seriesShow = SHOW_BY_SERIES[all[i].id] = {},
		shows = all[i].shows;

	SERIES[i] = {
		id: all[i].id,
		title: all[i].title,
		showCount: all[i].shows.length
	};

	SERIES_BY_ID[all[i].id] = all[i];

	for (let s = 0, sLen = shows.length; s < sLen; s++) {
		seriesShow["n" + shows[s].num] = {
			show: shows[s],
			segments: []
		};
	}
}

SHOW_BY_SERIES["plausible-nonsense"]["n1"].segments = [
	{
		id: "a",
		title: "Downloading the Extension",
		segments: [
			{
				id: "a1",
				content: "Brought to you by Last Week Tonight"
			},
			{
				id: "a2",
				content: "You need to download the Angular 2 template to start a ASPNET Core project using Angular 2. You can find it online."
			},
			{
				id: "a3",
				link: "http://blog.stevensanderson.com/2016/10/04/angular2-template-for-visual-studio/",
				content: "blog.stevensanderson.com"
			}
		]
	},
	{
		id: "b",
		title: "Creating the project",
		segments: [
			{
				id: "b1",
				content: "Create the project, following the guide for the template."
			}
		]
	}
];