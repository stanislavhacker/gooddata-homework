import {DateFilterGranularity} from "@gooddata/sdk-backend-spi";
import {IDateFilterOptionsByType} from "@gooddata/sdk-ui-filters/esm/DateFilter/interfaces";

// The name of the application. It is rendered in a header of the web application.
export const appName = "gooddata-homework";

// The URL of analytical GoodData backend with workspaces, insights, metrics, attributes, datasets, and users
// that will be available to the application.
export const backend = "https://freeh8etr.na.gooddata.com";

// The ID of workspace that is selected by default in the optional workspace picker component (located in the web
// application header). It is also a default setting for script that refreshes LDM data used by the application.
// LDM script shows list of available workspaces on backend in the case when the value is not set to any ID.
export const workspace = "ks624rcxvt8buab0u9lzrb0mk0qbga9t";

// RegExp used by optional workspace picker component (located in the web application header) to filter out
// workspaces that should not be rendered to the application user. Only the workspaces with title that match
// the regular expression will be rendered. Set to 'undefined' to show all the available workspaces.
// Example: /test/ or /^GoodData/
export const workspaceFilter: RegExp | undefined = undefined;

//Date filter options and Granularities
export const availableGranularities: Array<DateFilterGranularity> = ["GDC.time.date", "GDC.time.month", "GDC.time.quarter", "GDC.time.year"];
export const defaultDateFilterOptions: IDateFilterOptionsByType = {
	allTime: {
		localIdentifier: "ALL_TIME",
		type: "allTime",
		name: "",
		visible: true,
	},

	absoluteForm: {
		localIdentifier: "ABSOLUTE_FORM",
		type: "absoluteForm",
		from: undefined,
		to: undefined,
		name: "",
		visible: true,
	},

	absolutePreset: [
		{
			from: "2019-12-24",
			to: "2019-12-26",
			name: "Christmas 2019",
			localIdentifier: "christmas-2019",
			visible: true,
			type: "absolutePreset",
		},

		{
			from: "2018-01-01",
			to: "2018-12-31",
			name: "Year 2018",
			localIdentifier: "year-2018",
			visible: true,
			type: "absolutePreset",
		},
	],

	relativeForm: {
		localIdentifier: "RELATIVE_FORM",
		type: "relativeForm",
		granularity: "GDC.time.month",
		from: undefined,
		to: undefined,
		name: "",
		visible: true,
		availableGranularities,
	},

	relativePreset: {
		"GDC.time.date": [
			{
				from: -6,
				to: 0,
				granularity: "GDC.time.date",
				localIdentifier: "LAST_7_DAYS",
				type: "relativePreset",
				visible: true,
				name: "",
			},

			{
				from: -29,
				to: 0,
				granularity: "GDC.time.date",
				localIdentifier: "LAST_30_DAYS",
				type: "relativePreset",
				visible: true,
				name: "",
			},

			{
				from: -89,
				to: 0,
				granularity: "GDC.time.date",
				localIdentifier: "LAST_90_DAYS",
				type: "relativePreset",
				visible: true,
				name: "",
			},
		],
		"GDC.time.month": [
			{
				from: 0,
				to: 0,
				granularity: "GDC.time.month",
				localIdentifier: "THIS_MONTH",
				type: "relativePreset",
				visible: true,
				name: "",
			},

			{
				from: -1,
				to: -1,
				granularity: "GDC.time.month",
				localIdentifier: "LAST_MONTH",
				type: "relativePreset",
				visible: true,
				name: "",
			},

			{
				from: -11,
				to: 0,
				granularity: "GDC.time.month",
				localIdentifier: "LAST_12_MONTHS",
				type: "relativePreset",
				visible: true,
				name: "",
			},
		],
		"GDC.time.quarter": [
			{
				from: 0,
				to: 0,
				granularity: "GDC.time.quarter",
				localIdentifier: "THIS_QUARTER",
				type: "relativePreset",
				visible: true,
				name: "",
			},

			{
				from: -1,
				to: -1,
				granularity: "GDC.time.quarter",
				localIdentifier: "LAST_QUARTER",
				type: "relativePreset",
				visible: true,
				name: "",
			},

			{
				from: -3,
				to: 0,
				granularity: "GDC.time.quarter",
				localIdentifier: "LAST_4_QUARTERS",
				type: "relativePreset",
				visible: true,
				name: "",
			},
		],
		"GDC.time.year": [
			{
				from: 0,
				to: 0,
				granularity: "GDC.time.year",
				localIdentifier: "THIS_YEAR",
				type: "relativePreset",
				visible: true,
				name: "",
			},

			{
				from: -1,
				to: -1,
				granularity: "GDC.time.year",
				localIdentifier: "LAST_YEAR",
				type: "relativePreset",
				visible: true,
				name: "",
			},
		],
	}
};

//Default locales for app
export const Locales = {
	"ALL_TIME": "All time",
	"LAST_7_DAYS": "Last 7 days",
	"LAST_30_DAYS": "Last 30 days",
	"LAST_90_DAYS": "Lays 90 days",
	"THIS_MONTH": "This month",
	"LAST_MONTH": "Last month",
	"LAST_12_MONTHS": "Last 12 months",
	"THIS_QUARTER": "This quarter",
	"LAST_QUARTER": "Last quarter",
	"LAST_4_QUARTERS": "Last 4 quarters",
	"THIS_YEAR": "This year",
	"LAST_YEAR": "Last year"
}