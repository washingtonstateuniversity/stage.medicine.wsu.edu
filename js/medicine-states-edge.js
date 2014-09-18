/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im= window.wsu_theme_dir + 'images/';

var fonts = {};

var opts = {
    'gAudioPreloadPreference': 'auto',

		'gVideoPreloadPreference': 'auto'
	};
	var resources = [
	];
	var symbols = {
		"stage": {
			version: "4.0.1",
			minimumCompatibleVersion: "4.0.1",
			build: "4.0.1.365",
			baseState: "Base State",
			scaleToFit: "width",
			centerStage: "horizontal",
			initialState: "Base State",
			gpuAccelerate: false,
			resizeInstances: false,
			content: {
				dom: [
					{
						id: 'mi',
						type: 'image',
						rect: ['12px', '51px','359px','342px','auto', 'auto'],
						fill: ["rgba(0,0,0,0)",im+"Pasted2.svg",'0px','0px']
					},
					{
						id: 'top_right_pop',
						type: 'ellipse',
						rect: ['460px', '252px','70px','70px','auto', 'auto'],
						borderRadius: ["50%", "50%", "50%", "50%"],
						fill: ["rgba(255,255,255,1.00)"],
						stroke: [1,"rgba(128,128,128,1.00)","solid"]
					},
					{
						id: 'mid_right_sq',
						type: 'ellipse',
						rect: ['500px', '332px','70px','70px','auto', 'auto'],
						borderRadius: ["50%", "50%", "50%", "50%"],
						fill: ["rgba(255,255,255,1.00)"],
						stroke: [1,"rgba(128,128,128,1.00)","solid"]
					},
					{
						id: 'bottom_right_gsp',
						type: 'ellipse',
						rect: ['440px', '412px','70px','70px','auto', 'auto'],
						borderRadius: ["50%", "50%", "50%", "50%"],
						fill: ["rgba(255,255,255,1.00)"],
						stroke: [1,"rgba(128,128,128,1.00)","solid"]
					},
					{
						id: 'top_left_pop',
						type: 'ellipse',
						rect: ['210px', '252px','70px','70px','auto', 'auto'],
						borderRadius: ["50%", "50%", "50%", "50%"],
						fill: ["rgba(255,255,255,1.00)"],
						stroke: [1,"rgba(128,128,128,1.00)","solid"]
					},
					{
						id: 'mid_left_sq',
						type: 'ellipse',
						rect: ['170px', '332px','70px','70px','auto', 'auto'],
						borderRadius: ["50%", "50%", "50%", "50%"],
						fill: ["rgba(255,255,255,1.00)"],
						stroke: [1,"rgba(128,128,128,1.00)","solid"]
					},
					{
						id: 'bottom_left_gsp',
						type: 'ellipse',
						rect: ['230px', '412px','70px','70px','auto', 'auto'],
						borderRadius: ["50%", "50%", "50%", "50%"],
						fill: ["rgba(255,255,255,1.00)"],
						stroke: [1,"rgba(128,128,128,1.00)","solid"]
					},
					{
						id: 'mi_pop_text',
						type: 'text',
						rect: ['217px', '277px','auto','auto','auto', 'auto'],
						text: "9,895,622",
						font: ['"Open Sans Condensed", sans-serif', 17, "rgba(128,128,128,1.00)", "normal", "none", ""]
					},
					{
						id: 'mi_sq_text',
						type: 'text',
						rect: ['177px', '356px','auto','auto','auto', 'auto'],
						text: "96,713.51",
						align: "left",
						font: ['"Open Sans Condensed", sans-serif', 17, "rgba(128,128,128,1)", "400", "none", "normal"]
					},
					{
						id: 'mi_gsp_text',
						type: 'text',
						rect: ['243px', '436px','auto','auto','auto', 'auto'],
						text: "368,401",
						align: "left",
						font: ['"Open Sans Condensed", sans-serif', 17, "rgba(128,128,128,1)", "400", "none", "normal"]
					},
					{
						id: 'wa_pop_text',
						type: 'text',
						rect: ['467px', '276px','auto','auto','auto', 'auto'],
						text: "6,971,406",
						align: "left",
						font: ['"Open Sans Condensed", sans-serif', 17, "rgba(128,128,128,1)", "400", "none", "normal"]
					},
					{
						id: 'wa_sq_text',
						type: 'text',
						rect: ['507px', '356px','auto','auto','auto', 'auto'],
						text: "71,297.95",
						align: "left",
						font: ['"Open Sans Condensed", sans-serif', 17, "rgba(128,128,128,1)", "400", "none", "normal"]
					},
					{
						id: 'wa_gsp_text',
						type: 'text',
						rect: ['453px', '436px','auto','auto','auto', 'auto'],
						text: "338,334",
						align: "left",
						font: ['"Open Sans Condensed", sans-serif', 17, "rgba(128,128,128,1)", "400", "none", "normal"]
					},
					{
						id: 'pop_line',
						type: 'rect',
						rect: ['282px', '287px','176px','0px','auto', 'auto'],
						fill: ["rgba(180,180,180,1.00)"],
						stroke: [1,"rgba(221,221,221,1.00)","solid"]
					},
					{
						id: 'gsp_line',
						type: 'rect',
						rect: ['302px', '447px','136px','0px','auto', 'auto'],
						fill: ["rgba(221,221,221,1.00)"],
						stroke: [1,"rgba(221,221,221,1.00)","solid"]
					},
					{
						id: 'sq_line',
						type: 'rect',
						rect: ['242px', '367px','256px','0px','auto', 'auto'],
						fill: ["rgba(180,180,180,1.00)"],
						stroke: [1,"rgba(221,221,221,1.00)","solid"]
					},
					{
						id: 'pop_text',
						type: 'text',
						rect: ['336px', '252px','auto','auto','auto', 'auto'],
						text: "Population",
						align: "left",
						font: ['"Open Sans Condensed", sans-serif', 20, "rgba(42,48,51,1.00)", "400", "none", "normal"]
					},
					{
						id: 'sq_miles_text',
						type: 'text',
						rect: ['340px', '332px','auto','auto','auto', 'auto'],
						text: "Sq. Miles",
						align: "left",
						font: ['"Open Sans Condensed", sans-serif', 20, "rgba(42,48,51,1.00)", "400", "none", "normal"]
					},
					{
						id: 'gsp_text',
						type: 'text',
						rect: ['358px', '412px','auto','auto','auto', 'auto'],
						text: "GSP",
						align: "left",
						font: ['"Open Sans Condensed", sans-serif', 20, "rgba(42,48,51,1.00)", "400", "none", "normal"]
					},
					{
						id: 'mi_text',
						type: 'text',
						rect: ['228px', '96px','auto','auto','auto', 'auto'],
						text: "MICHIGAN",
						align: "left",
						font: ['"Open Sans Condensed", sans-serif', 35, "rgba(42,47,50,1.00)", "200", "none", "normal"]
					},
					{
						id: 'seperator',
						type: 'text',
						rect: ['361px', '83px','auto','auto','auto', 'auto'],
						text: "|",
						align: "left",
						font: ['"Open Sans Condensed", sans-serif', 50, "rgba(42,47,50,1)", "200", "none", "normal"]
					},
					{
						id: 'wa_text',
						type: 'text',
						rect: ['394px', '96px','auto','auto','auto', 'auto'],
						text: "WASHINGTON",
						align: "left",
						font: ['"Open Sans Condensed", sans-serif', 35, "rgba(42,47,50,1)", "200", "none", "normal"]
					},
					{
						id: 'mi_total_seats_container',
						type: 'group',
						rect: ['205', '374','90','90','auto', 'auto'],
						c: [
							{
								id: 'mi_total_seats',
								type: 'ellipse',
								rect: ['auto', 'auto','90px','90px','0px', '0px'],
								borderRadius: ["50%", "50%", "50%", "50%"],
								fill: ["rgba(111,176,127,1.00)"],
								stroke: [1,"rgb(128, 128, 128)","none"]
							}]
					},
					{
						id: 'wa_total_seats_container',
						type: 'group',
						rect: ['205', '374','90','90','auto', 'auto'],
						c: [
							{
								id: 'wa_total_seats',
								type: 'ellipse',
								rect: ['auto', 'auto','90px','90px','0px', '0px'],
								borderRadius: ["50%", "50%", "50%", "50%"],
								fill: ["rgba(111,176,127,1.00)"],
								stroke: [1,"rgb(128, 128, 128)","none"]
							}]
					},
					{
						id: 'five_ninety_five',
						type: 'text',
						rect: ['76px', '94px','auto','auto','auto', 'auto'],
						text: "595",
						align: "left",
						font: ['"Open Sans Condensed", sans-serif', 50, "rgba(255,255,255,1.00)", "200", "none", "normal"]
					},
					{
						id: 'total_in_state_seats',
						type: 'text',
						rect: ['278px', '528px','auto','auto','auto', 'auto'],
						text: "Total In-State Seats",
						align: "left",
						font: ['"Open Sans Condensed", sans-serif', 30, "rgba(0,153,204,1.00)", "200", "none", "normal"]
					},
					{
						id: 'total_wa_horiz',
						type: 'rect',
						rect: ['476px', '550px','0px','2px','auto', 'auto'],
						fill: ["rgba(0,153,204,1)"],
						stroke: [1,"rgb(128, 128, 128)","none"]
					},
					{
						id: 'total_mi_horiz',
						type: 'rect',
						rect: ['265px', '550px','0px','2px','auto', 'auto'],
						fill: ["rgba(0,153,204,1)"],
						stroke: [1,"rgb(128, 128, 128)","none"],
						transform: [[],['-180']]
					},
					{
						id: 'total_wa_vert',
						type: 'rect',
						rect: ['auto', 'auto','2px','0px','92px', '49px'],
						fill: ["rgba(0,153,204,1)"],
						stroke: [1,"rgb(128, 128, 128)","none"],
						transform: [[],['360']]
					},
					{
						id: 'total_mi_vert',
						type: 'rect',
						rect: ['auto', 'auto','0px','0px','625px', '48px'],
						fill: ["rgba(255,255,255,1)"],
						stroke: [1,"rgba(255,255,255,1.00)","solid"]
					},
					{
						id: 'one_twenty',
						type: 'text',
						rect: ['604px', '396px','auto','auto','auto', 'auto'],
						text: "120",
						align: "left",
						font: ['"Open Sans Condensed", sans-serif', 50, "rgba(255,255,255,1)", "200", "none", "normal"]
					}],
				symbolInstances: [

				]
			},
			states: {
				"Base State": {
					"${_wa_sq_text}": [
						["style", "left", '507px'],
						["style", "top", '356px']
					],
					"${_top_left_pop}": [
						["color", "background-color", 'rgba(255,255,255,1.00)'],
						["style", "top", '252px'],
						["style", "left", '210px'],
						["style", "border-style", 'solid'],
						["style", "height", '70px'],
						["color", "border-color", 'rgb(128, 128, 128)'],
						["style", "border-width", '1px'],
						["style", "width", '70px']
					],
					"${_bottom_left_gsp}": [
						["color", "background-color", 'rgba(255,255,255,1.00)'],
						["style", "top", '412px'],
						["style", "left", '230px'],
						["style", "border-style", 'solid'],
						["style", "height", '70px'],
						["color", "border-color", 'rgb(128, 128, 128)'],
						["style", "border-width", '1px'],
						["style", "width", '70px']
					],
					"${_gsp_line}": [
						["style", "top", '447px'],
						["color", "background-color", 'rgba(221,221,221,1)'],
						["color", "border-color", 'rgb(221, 221, 221)'],
						["style", "left", '302px'],
						["style", "width", '136px']
					],
					"${_seperator}": [
						["style", "top", '83px'],
						["style", "left", '361px'],
						["style", "font-size", '50px']
					],
					"${_total_in_state_seats}": [
						["style", "top", '528px'],
						["color", "color", 'rgba(0,153,204,1.00)'],
						["style", "left", '278px'],
						["style", "font-size", '30px']
					],
					"${_pop_line}": [
						["color", "background-color", 'rgba(180,180,180,1)'],
						["style", "top", '287px'],
						["color", "border-color", 'rgb(221, 221, 221)'],
						["style", "left", '282px'],
						["style", "width", '176px']
					],
					"${_mi_total_seats}": [
						["color", "background-color", 'rgba(0,153,204,1.00)'],
						["style", "bottom", '0px'],
						["style", "border-style", 'none'],
						["style", "left", 'auto'],
						["style", "width", '90px'],
						["style", "top", 'auto'],
						["style", "height", '90px'],
						["style", "right", '0px'],
						["style", "clip", [0,90,48,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
						["transform", "rotateZ", '90deg']
					],
					"${_mi_sq_text}": [
						["style", "left", '177px'],
						["style", "top", '356px']
					],
					"${_total_wa_horiz}": [
						["style", "top", '550px'],
						["style", "width", '0px']
					],
					"${_mid_right_sq}": [
						["color", "background-color", 'rgba(255,255,255,1.00)'],
						["style", "top", '332px'],
						["style", "left", '500px'],
						["style", "border-style", 'solid'],
						["style", "height", '70px'],
						["color", "border-color", 'rgb(128, 128, 128)'],
						["style", "border-width", '1px'],
						["style", "width", '70px']
					],
					"${_wa}": [
						["style", "top", '163px'],
						["style", "height", '194px'],
						["style", "left", '420px'],
						["style", "width", '297px']
					],
					"${_mi_total_seats_container}": [
						["style", "top", '60px'],
						["style", "left", '60px'],
						["style", "clip", [0,40,90,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
					],
					"${_mi_text}": [
						["style", "top", '96px'],
						["color", "color", 'rgba(42,47,50,1.00)'],
						["style", "font-weight", '200'],
						["style", "left", '228px'],
						["style", "font-size", '35px']
					],
					"${_sq_line}": [
						["style", "top", '367px'],
						["color", "background-color", 'rgba(180,180,180,1)'],
						["color", "border-color", 'rgb(221, 221, 221)'],
						["style", "left", '242px'],
						["style", "width", '256px']
					],
					"${_mi}": [
						["style", "top", '51px'],
						["style", "height", '342px'],
						["style", "left", '12px'],
						["style", "width", '359px']
					],
					"${_wa_total_seats}": [
						["color", "background-color", 'rgba(0,153,204,1.00)'],
						["style", "bottom", '0px'],
						["style", "border-style", 'none'],
						["style", "left", 'auto'],
						["style", "width", '90px'],
						["style", "top", 'auto'],
						["style", "height", '90px'],
						["style", "right", '0px'],
						["style", "clip", [0,90,48,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
						["transform", "rotateZ", '90deg']
					],
					"${_bottom_right_gsp}": [
						["color", "background-color", 'rgba(255,255,255,1.00)'],
						["style", "top", '412px'],
						["style", "border-width", '1px'],
						["color", "border-color", 'rgb(128, 128, 128)'],
						["style", "height", '70px'],
						["style", "border-style", 'solid'],
						["style", "left", '440px'],
						["style", "width", '70px']
					],
					"${_wa_gsp_text}": [
						["style", "left", '453px'],
						["style", "top", '436px']
					],
					"${_one_twenty}": [
						["style", "left", '604px'],
						["style", "top", '396px']
					],
					"${_mi_pop_text}": [
						["style", "top", '277px'],
						["color", "color", 'rgba(128,128,128,1)'],
						["style", "font-family", '"Open Sans Condensed", sans-serif'],
						["style", "left", '217px'],
						["style", "font-size", '17px']
					],
					"${_top_right_pop}": [
						["color", "background-color", 'rgba(255,255,255,1.00)'],
						["style", "top", '252px'],
						["style", "border-width", '1px'],
						["color", "border-color", 'rgb(128, 128, 128)'],
						["style", "height", '70px'],
						["style", "border-style", 'solid'],
						["style", "left", '460px'],
						["style", "width", '70px']
					],
					"${_five_ninety_five}": [
						["color", "color", 'rgba(255,255,255,0)'],
						["style", "top", '94px'],
						["style", "left", '76px'],
						["style", "font-size", '50px']
					],
					"${_gsp_text}": [
						["color", "color", 'rgba(42,48,51,1)'],
						["style", "top", '412px'],
						["style", "left", '358px'],
						["style", "font-size", '20px']
					],
					"${_mid_left_sq}": [
						["color", "background-color", 'rgba(255,255,255,1.00)'],
						["style", "top", '332px'],
						["style", "border-width", '1px'],
						["color", "border-color", 'rgb(128, 128, 128)'],
						["style", "height", '70px'],
						["style", "border-style", 'solid'],
						["style", "left", '170px'],
						["style", "width", '70px']
					],
					"${_wa_text}": [
						["style", "top", '96px'],
						["transform", "rotateZ", '0deg'],
						["style", "left", '394px'],
						["style", "font-size", '35px']
					],
					"${_wa_total_seats_container}": [
						["style", "top", '363px'],
						["style", "left", '590px'],
						["style", "clip", [0,40,90,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
					],
					"${_wa_pop_text}": [
						["style", "top", '276px'],
						["style", "left", '467px']
					],
					"${_total_mi_vert}": [
						["style", "top", 'auto'],
						["style", "bottom", '48px'],
						["style", "height", '0px'],
						["style", "right", '625px'],
						["style", "left", 'auto'],
						["color", "border-color", 'rgba(255,255,255,1.00)']
					],
					"${_sq_miles_text}": [
						["style", "top", '332px'],
						["color", "color", 'rgba(42,48,51,1)'],
						["style", "left", '340px'],
						["style", "font-size", '20px']
					],
					"${_total_mi_horiz}": [
						["style", "top", '550px'],
						["transform", "rotateZ", '-180deg'],
						["style", "left", '265px'],
						["style", "width", '0px']
					],
					"${_Stage}": [
						["color", "background-color", 'rgba(255,255,255,1)'],
						["style", "width", '730px'],
						["style", "height", '600px'],
						["style", "overflow", 'hidden']
					],
					"${_mi_gsp_text}": [
						["style", "left", '243px'],
						["style", "top", '436px']
					],
					"${_total_wa_vert}": [
						["style", "top", 'auto'],
						["style", "bottom", '48px'],
						["transform", "rotateZ", '360deg'],
						["style", "height", '0px'],
						["style", "right", '92px'],
						["style", "left", 'auto'],
						["style", "width", '2px']
					],
					"${_pop_text}": [
						["color", "color", 'rgba(42,48,51,1)'],
						["style", "top", '252px'],
						["style", "left", '336px'],
						["style", "font-size", '20px']
					]
				}
			},
			timelines: {
				"Default Timeline": {
					fromState: "Base State",
					toState: "",
					duration: 1750,
					autoPlay: true,
					timeline: [
						{ id: "eid57", tween: [ "style", "${_total_wa_vert}", "height", '100px', { fromValue: '0px'}], position: 500, duration: 250 },
						{ id: "eid28", tween: [ "transform", "${_wa_total_seats}", "rotateZ", '0deg', { fromValue: '90deg'}], position: 750, duration: 250 },
						{ id: "eid61", tween: [ "color", "${_total_mi_vert}", "border-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0, easing: "easeInQuint" },
						{ id: "eid60", tween: [ "color", "${_total_mi_vert}", "border-color", 'rgba(0,153,204,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 500, duration: 0, easing: "easeInQuint" },
						{ id: "eid8", tween: [ "style", "${_mi_total_seats_container}", "clip", [0,90,90,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,40,90,0]}], position: 1500, duration: 250, easing: "easeInQuint" },
						{ id: "eid65", tween: [ "color", "${_five_ninety_five}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0)'}], position: 1710, duration: 40, easing: "easeInQuint" },
						{ id: "eid27", tween: [ "style", "${_wa_total_seats}", "clip", [0,90,90,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,90,48,0]}], position: 750, duration: 250 },
						{ id: "eid58", tween: [ "style", "${_total_wa_vert}", "bottom", '48px', { fromValue: '48px'}], position: 750, duration: 0 },
						{ id: "eid54", tween: [ "style", "${_total_mi_horiz}", "width", '160px', { fromValue: '0px'}], position: 0, duration: 500 },
						{ id: "eid36", tween: [ "color", "${_wa_total_seats}", "background-color", 'rgba(0,153,204,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,153,204,1.00)'}], position: 750, duration: 0 },
						{ id: "eid37", tween: [ "color", "${_wa_total_seats}", "background-color", 'rgba(0,153,204,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,153,204,1.00)'}], position: 1000, duration: 0 },
						{ id: "eid42", tween: [ "style", "${_mi_total_seats_container}", "left", '60px', { fromValue: '60px'}], position: 1500, duration: 0 },
						{ id: "eid43", tween: [ "style", "${_mi_total_seats_container}", "left", '60px', { fromValue: '60px'}], position: 1750, duration: 0 },
						{ id: "eid25", tween: [ "style", "${_wa_total_seats_container}", "clip", [0,90,90,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,40,90,0]}], position: 750, duration: 250, easing: "easeInQuint" },
						{ id: "eid59", tween: [ "style", "${_total_mi_vert}", "height", '403px', { fromValue: '0px'}], position: 0, duration: 1500, easing: "easeInQuint" },
						{ id: "eid49", tween: [ "style", "${_wa_total_seats_container}", "left", '590px', { fromValue: '590px'}], position: 750, duration: 0 },
						{ id: "eid50", tween: [ "style", "${_wa_total_seats_container}", "left", '590px', { fromValue: '590px'}], position: 1000, duration: 0 },
						{ id: "eid48", tween: [ "style", "${_wa_total_seats_container}", "top", '363px', { fromValue: '363px'}], position: 1000, duration: 0 },
						{ id: "eid34", tween: [ "color", "${_mi_total_seats}", "background-color", 'rgba(0,153,204,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,153,204,1.00)'}], position: 1500, duration: 0 },
						{ id: "eid35", tween: [ "color", "${_mi_total_seats}", "background-color", 'rgba(0,153,204,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,153,204,1.00)'}], position: 1750, duration: 0 },
						{ id: "eid10", tween: [ "style", "${_mi_total_seats}", "clip", [0,90,90,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,90,48,0]}], position: 1500, duration: 250 },
						{ id: "eid53", tween: [ "style", "${_total_mi_horiz}", "left", '105px', { fromValue: '265px'}], position: 0, duration: 500 },
						{ id: "eid44", tween: [ "style", "${_mi_total_seats_container}", "top", '60px', { fromValue: '60px'}], position: 1500, duration: 0 },
						{ id: "eid62", tween: [ "style", "${_mi_total_seats_container}", "top", '60px', { fromValue: '60px'}], position: 1750, duration: 0, easing: "easeInQuint" },
						{ id: "eid51", tween: [ "style", "${_total_wa_horiz}", "width", '160px', { fromValue: '0px'}], position: 0, duration: 500 },
						{ id: "eid11", tween: [ "transform", "${_mi_total_seats}", "rotateZ", '0deg', { fromValue: '90deg'}], position: 1500, duration: 250 }            ]
				}
			}
		}
	};

Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

})(jQuery, AdobeEdge, "wa_mi_comparison");
