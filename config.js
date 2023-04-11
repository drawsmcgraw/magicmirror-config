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
                  module: "MMM-OpenWeatherForecast",
                  position: "top_right",
                  header: "Forecast",
                  config: {
                    apikey: "REDACTED", //SUPER SECRET
                    latitude: 39.135820,
                    longitude: -76.843580,
                    units: "imperial",
                    iconset: "3c",
                    colored: true,
                    concise: true,
                    requestDelay: "2000",
                    showFeelsLikeTemp: true,
		    useAnimatedIcons: false,

                    showCurrentConditions: true,
                    showSummary: true,
                    showExtraCurrentConditions: true,
                    extraCurrentConditions: {
                      highLowTemp: true,
                      precipitation: true,
                      sunrise: true,
                      sunset: true,
                      wind: true,
                      barometricPressure: false,
                      humidity: true,
                      dewPoint: false,
                      uvIndex: true,
                      visibility: false
                    },

                    forecastLayout: "table",
                    forecastHeaderText: "",

                    hourlyForecastTableHeaderText: "By the hour",
                    showHourlyForecast: true,
                    showHourlyTableHeaderRow: true,
                    hourlyForecastInterval: 1,
                    maxHourliesToShow: 4,
                    hourlyExtras: {
                      precipitation: true,
                      wind: true,
                      barometricPressure: false,
                      humidity: false,
                      dewPoint: false,
                      uvIndex: false,
                      visibility: false
                    },

                    dailyForecastTableHeaderText: "Throughout the week",
                    showDailyForecast: true,
                    showDailyTableHeaderRow: true,
                    maxDailiesToShow: 7,
                    dailyExtras: {
                      precipitation: true,
                      sunrise: false,
                      sunset: false,
                      wind: true,
                      barometricPressure: false,
                      humidity: false,
                      dewPoint: false,
                      uvIndex: false
                    },

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
				timeFormat: "dateheaders",
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

		// Local Traffic
		{
			module: 'MMM-GoogleMapsTraffic',
			position: 'top_left',
			config: {
				key: 'REDACTED',
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

		// Weather Radar - regional
		{
                  disabled: false,
                  module: 'MMM-RAIN-RADAR',
                  position: 'top_right',
                  config: {
                      useHeader: true, // true if you want a header
                      lat: "39.135820", // Latitude
                      lon: "-76.843580", // Longitude
                      area: 'MD', // US State
                      zoomLevel: 6,
                      mapType: 3, //0-Road Map 1-Satellite 2-Dark Map 3-OpenStreetMaps 4-Light Map
                      color: 3, //0-Original 1-Universal Blue 2-TITAN 3-The Weather Channel 5-NEXRAD Level-III 6-RAINBOW @ SELEX-SI
                      snow: 1,
                      smoothing: 1,
                      opacity: 88,
                      fastAnimation: 0,
                      coverage: 0,
                      darkTheme: 1,
                      UTCtime: 0,
                      legend: 1,
                      legendMin: 0, //set legend to 1 if you want legendMin to show
                      animate: 1,
                      updateOnWarning: 0, // 1: after updateInterval, weather warnings for your US states will be used to determine if module should be hidden. 0 module is perpertually displayed
                      updateInterval: 5 * 60 * 1000, // number of milliseconds. change 5 to 60 and it will update each 10 minutes
                  }
              },
		// Weather Radar - local
		{
                  disabled: false,
                  module: 'MMM-RAIN-RADAR',
                  position: 'top_left',
                  config: {
                      useHeader: true, // true if you want a header
                      lat: "39.135820", // Latitude
                      lon: "-76.843580", // Longitude
                      area: 'MD', // US State
                      zoomLevel: 9,
                      mapType: 3, //0-Road Map 1-Satellite 2-Dark Map 3-OpenStreetMaps 4-Light Map
                      color: 3, //0-Original 1-Universal Blue 2-TITAN 3-The Weather Channel 5-NEXRAD Level-III 6-RAINBOW @ SELEX-SI
                      snow: 1,
                      smoothing: 1,
                      opacity: 88,
                      fastAnimation: 0,
                      coverage: 0,
                      darkTheme: 1,
                      UTCtime: 0,
                      legend: 1,
                      legendMin: 0, //set legend to 1 if you want legendMin to show
                      animate: 1,
                      updateOnWarning: 0, // 1: after updateInterval, weather warnings for your US states will be used to determine if module should be hidden. 0 module is perpertually displayed
                      updateInterval: 5 * 60 * 1000, // number of milliseconds. change 5 to 60 and it will update each 10 minutes
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

		//////COVID 19 Module
		//////States
		//////https://github.com/sdetweil/MyCovid19
		////{
		////	module:"MyCovid19",
		////	position:"bottom_left",
		////	config:{
		////		//countries:["Italy","USA","Australia","China","Spain","France"],
		////		//OR
		////		states:['Maryland','Mississippi','Michigan','Texas','Florida','Colorado'],
		////		//OR
		////		//counties [{'countyname':'statename'},{'countyname2':'statename2'}]
		////		//note the ':' between the county and state name

		////		// one of countries or states or counties MUST be specified

		////		// line colors can be any definition of color either a name ,or a hex string
		////		// one per country above, used in order,
		////		line_colors:['red','white','green','yellow','blue','orange'],
		////		//
		////		//chart_type:"cumulative_cases",  // or "cumulative deaths", or "cases" or "deaths"
		////		chart_type:"cases",  // or "cumulative deaths", or "cases" or "deaths"
		////		chart_title:"Cases Each Day", // however u want to label
		////		// the vertical steps on the chart.. how tall u want it to be and how mant increments
		////		ranges:{min:0,max:8000,stepSize:1000},
		////		// size of the chart in pixels
		////		width: 400,
		////		height: 500,
		////		// only used if we need to debug something
		////		debug:false,
		////	}
		////},

		////// COVID 19 Module
		////// Countries
		////// https://github.com/sdetweil/MyCovid19
		////{
		////	module:"MyCovid19",
		////	position:"bottom_right",
		////	config:{
		////		countries:["Italy","USA","Canada","UK","India","Brazil"],
		////		//OR
		////		//states:['Maryland','Mississippi','New York','Texas'],
		////		//OR
		////		//counties [{'countyname':'statename'},{'countyname2':'statename2'}]
		////		//note the ':' between the county and state name

		////		// one of countries or states or counties MUST be specified

		////		// line colors can be any definition of color either a name ,or a hex string
		////		// one per country above, used in order,
		////		line_colors:['red','white','green','yellow','blue','purple'],
		////		//
		////		//chart_type:"cumulative_cases",  // or "cumulative deaths", or "cases" or "deaths"
		////		chart_type:"cases",  // or "cumulative deaths", or "cases" or "deaths"
		////		chart_title:"Cases Each Day", // however u want to label
		////		// the vertical steps on the chart.. how tall u want it to be and how mant increments
		////		ranges:{min:0,max:8000,stepSize:10000},
		////		// size of the chart in pixels
		////		width: 400,
		////		height: 500,
		////		// only used if we need to debug something
		////		debug:false,
		////	}
		////}

		// Fitbit
                //{
                //	module: 'MMM-fitbit',
                //	position: 'bottom_center',
                //	config: {
                //		credentials: {
		//	                client_id: "22BV7P",
		//	                client_secret: "REDACTED",
                //		},
                //		resources: [
                //			'steps',
                //			'floors',
                //			'caloriesOut',
                //			'distance',
                //			'activeMinutes',
                //			//'sleep',
                //			//'heart'
                //		],
                //		update_interval: 60
		//	}
                //},
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
