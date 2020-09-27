/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "imperial",
	// serverOnly:  true/false/"local" ,
			     // local for armv6l processors, default 
			     //   starts serveronly and then starts chrome browser
			     // false, default for all  NON-armv6l devices
			     // true, force serveronly mode, because you want to.. no UI on this device
	modules: [
				{
			module: "MMM-DarkSkyForecast",
			header: "Weather",
			position: "top_right",
			classes: "default everyone",
			disabled: false,
			config: {
				apikey: "",
				latitude: "39.135820",
				longitude: "-76.843580",
				iconset: "2m",
				concise: false,
				units: "us",
				showWind: false,
				maxDailiesToShow: 7,
				maxHourliesToShow: 4,
				forecastLayout: "table",
				hourlyForecastInterval: 2
			}
		},
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "What's Happening?",
			position: "left",
			fade: "false",
			config: {
				calendars: [
					{
						symbol: "beer",
						url: ""},
					{
						symbol: "gamepad",
						url: ""},
					{
						symbol: "cat",
						url: ""}
				]
			}
		},
		        // Regional - Zoomed out
		{
			module: "MMM-DarkSkyRadar",
			position: "top_right",
			header: "Radar",
			config: {
				lat: "39.135820",   // Latitude
				lon: "-76.843580",  // Longitude
				height: "300px",  //optional default of 600
				//width: "350px",   //optional default
				zoomLevel: 6,     //optional default of 6 (the larger the more zoomed in)
				updateInterval: 5 * 60 * 1000,  //optional default (15 minutes) (min * sec * ms)
			}
		},
		        // Home
		{
			module: 'MMM-GoogleMapsTraffic',
			position: 'top_left',
			config: {
				key: '',
				lat: 39.135820,
				lng: -76.843580,
				height: '300px',
				width: '350px',
				styledMapType: "standard",
				disableDefaultUI: true,
				zoom: 10,
				markers: [
					{
						lat: 39.135820,
						lng: -76.843580,
						fillColor: '#9966ff'
					},
				],
			},
		},

		// Outer Banks
//		{
//			module: 'MMM-GoogleMapsTraffic',
//			position: 'bottom_right',
//			config: {
//				key: '',
//				lat: 36.1560,
//				lng: -75.7480,
//				height: '300px',
//				width: '350px',
//				styledMapType: "standard",
//				disableDefaultUI: true,
//				zoom: 11,
//				markers: [
//					{
//						lat: 36.1696,
//						lng: -75.7552,
//						fillColor: '#9966ff'
//					},
//				],
//			},
//		},
		        // Closer - Zoomed in
		{
			module: "MMM-DarkSkyRadar",
			position: "top_left",
			header: "Radar",
			config: {
				lat: "39.135820",   // Latitude
				lon: "-76.843580",  // Longitude
				height: "300px",  //optional default of 600
				//width: "350px",   //optional default
				zoomLevel: 9,     //optional default of 6 (the larger the more zoomed in)
				updateInterval: 5 * 60 * 1000,  //optional default (15 minutes) (min * sec * ms)
			}
		},
		{
			module: "compliments",
			//position: "lower_third",
			position: "bottom_bar",
			config: {
				remoteFile: "https://raw.githubusercontent.com/drawsmcgraw/magicmirror-config/master/compliments.json"
			}
		},

		// COVID 19 Module
		// States
		// https://github.com/sdetweil/MyCovid19
		{
			module:"MyCovid19",
			position:"bottom_left",
			config:{
				//countries:["Italy","USA","Australia","China","Spain","France"],
				//OR
				states:['Maryland','Mississippi'],
				//OR
				//counties [{'countyname':'statename'},{'countyname2':'statename2'}]
				//note the ':' between the county and state name

				// one of countries or states or counties MUST be specified

				// line colors can be any definition of color either a name ,or a hex string
				// one per country above, used in order,
				line_colors:['red','white','green','yellow','blue'],
				//
				//chart_type:"cumulative_cases",  // or "cumulative deaths", or "cases" or "deaths"
				chart_type:"cases",  // or "cumulative deaths", or "cases" or "deaths"
				chart_title:"Cases Each Day", // however u want to label
				// the vertical steps on the chart.. how tall u want it to be and how mant increments
				ranges:{min:0,max:8000,stepSize:10000},
				// size of the chart in pixels
				width: 400,
				height: 500,
				// only used if we need to debug something
				debug:false,
			}
		},

		// COVID 19 Module
		// Countries
		// https://github.com/sdetweil/MyCovid19
		{
			module:"MyCovid19",
			position:"bottom_right",
			config:{
				countries:["Italy","USA","Canada","UK"],
				//OR
				//states:['Maryland','Mississippi','New York','Texas'],
				//OR
				//counties [{'countyname':'statename'},{'countyname2':'statename2'}]
				//note the ':' between the county and state name

				// one of countries or states or counties MUST be specified

				// line colors can be any definition of color either a name ,or a hex string
				// one per country above, used in order,
				line_colors:['red','white','green','yellow','blue'],
				//
				//chart_type:"cumulative_cases",  // or "cumulative deaths", or "cases" or "deaths"
				chart_type:"cases",  // or "cumulative deaths", or "cases" or "deaths"
				chart_title:"Cases Each Day", // however u want to label
				// the vertical steps on the chart.. how tall u want it to be and how mant increments
				ranges:{min:0,max:8000,stepSize:10000},
				// size of the chart in pixels
				width: 400,
				height: 500,
				// only used if we need to debug something
				debug:false,
			}
		}

		//{
		//	module: "newsfeed",
		//	position: "bottom_bar",
		//	config: {
		//		feeds: [
		//			{
		//				title: "The Onion",
		//				url: "https://www.theonion.com/rss"
		//			},
		//			{
		//				title: "Baltimore Sun - Baltimore City",
		//				url: "http://www.baltimoresun.com/arcio/rss/category/maryland/baltimore-city/?query=display_date:%5Bnow-2d+TO+now%5D+AND+revision.published:true&sort=display_date:desc#nt=instory-link"
		//			},
		//			{
		//				title: "Baltimore Sun - Howard County",
		//				url: "http://www.baltimoresun.com/arcio/rss/category/maryland/howard/?query=display_date:%5Bnow-2d+TO+now%5D+AND+revision.published:true&sort=display_date:desc#nt=instory-link"
		//			},
		//			{
		//				title: "Washington Post - Local",
		//				url: "http://feeds.washingtonpost.com/rss/local?tid=lk_inline_manual_6&itid=lk_inline_manual_6"
		//			},
		//			{
		//				title: "Washington Post - World",
		//				url: "http://feeds.washingtonpost.com/rss/national?tid=lk_inline_manual_11&itid=lk_inline_manual_11"
		//			},
		//			{
		//				title: "Washington Post - National",
		//				url: "http://feeds.washingtonpost.com/rss/national?tid=lk_inline_manual_11&itid=lk_inline_manual_11"
		//			},
		//			{
		//				title: "New York Times",
		//				url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
		//			}
		//		],
		//		showSourceTitle: true,
		//		showPublishDate: true,
		//		broadcastNewsFeeds: true,
		//		broadcastNewsUpdates: true
		//	}
		//},
	],

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
