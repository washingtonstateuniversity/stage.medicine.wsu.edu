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
						id: 'remaining_line',
						type: 'rect',
						rect: ['436px', '113px','0px','0px','auto', 'auto'],
						fill: ["rgba(255,255,255,1)"],
						stroke: [1,"rgb(167, 169, 171)","solid"],
						transform: [[],['180']]
					},
					{
						id: 'additional_wsu_line',
						type: 'rect',
						rect: ['959px', '183px','0px','0px','auto', 'auto'],
						fill: ["rgba(255,255,255,1)"],
						stroke: [1,"rgb(167, 169, 171)","solid"]
					},
					{
						id: 'additional_line',
						type: 'rect',
						rect: ['436px', '245px','0px','0px','auto', 'auto'],
						fill: ["rgba(255,255,255,1)"],
						stroke: [1,"rgb(167, 169, 171)","solid"],
						transform: [[],['180']]
					},
					{
						id: 'med_available_line',
						type: 'rect',
						rect: ['959px', '311px','0px','0px','auto', 'auto'],
						fill: ["rgba(255,255,255,1)"],
						stroke: [1,"rgb(167, 169, 171)","solid"]
					},
					{
						id: 'wa',
						type: 'image',
						rect: ['391px', '4px','594px','390px','auto', 'auto'],
						fill: ["rgba(0,0,0,0)",im+"Pasted.svg",'0px','0px']
					},
					{
						id: 'Rectangle',
						type: 'rect',
						rect: ['373px', '4px','639px','400px','auto', 'auto'],
						fill: ["rgba(255,255,255,1.00)"],
						stroke: [0,"rgba(0,0,0,1)","none"]
					},
					{
						id: 'remaining_text',
						type: 'text',
						rect: ['21px', '83px','auto','auto','auto', 'auto'],
						text: "Remaining seat shortage,<br>based on states with similar<br>population (440 seats)",
						align: "right",
						font: ['"Open Sans", sans-serif', 14, "rgba(94,104,113,1.00)", "normal", "none", ""]
					},
					{
						id: 'additional_text',
						type: 'text',
						rect: ['26px', '227px','auto','auto','auto', 'auto'],
						text: "Additional seats with<br>UWSOM WWAMI expansion",
						align: "right",
						font: ['"Open Sans", sans-serif', 14, "rgba(94,104,113,1)", "400", "none", "normal"]
					},
					{
						id: 'addtional_wsu_text',
						type: 'text',
						rect: ['1193px', '167px','auto','auto','auto', 'auto'],
						text: "Additional seats with<br>WSU medical school",
						align: "left",
						font: ['"Open Sans", sans-serif', 14, "rgba(94,104,113,1)", "400", "none", "normal"]
					},
					{
						id: 'med_available_text',
						type: 'text',
						rect: ['1193px', '292px','auto','auto','auto', 'auto'],
						text: "Medical seats<br>available now",
						align: "left",
						font: ['"Open Sans", sans-serif', 14, "rgba(94,104,113,1)", "400", "none", "normal"]
					},
					{
						id: 'additional_wsu_containerCopy',
						type: 'group',
						rect: ['205', '374','90','90','auto', 'auto'],
						transform: [[],['96']],
						c: [
							{
								id: 'additional_wsu_circleCopy',
								type: 'ellipse',
								rect: ['auto', 'auto','90px','90px','-2px', '-2px'],
								borderRadius: ["50%", "50%", "50%", "50%"],
								fill: ["rgba(111,176,127,1.00)"],
								stroke: [2,"rgba(167,169,171,1.00)","solid"],
								transform: [[],[],[],['0.95652','0.95652']]
							}]
					},
					{
						id: 'onesixty',
						type: 'text',
						rect: ['233px', '102px','auto','auto','auto', 'auto'],
						text: "160",
						align: "left",
						font: ['"Open Sans", sans-serif', 36, "rgba(167,169,171,1.00)", "400", "none", "normal"]
					},
					{
						id: 'additional_wwami_container',
						type: 'group',
						rect: ['205', '374','90','90','auto', 'auto'],
						transform: [[],['96']],
						c: [
							{
								id: 'additional_wwwami_circle',
								type: 'ellipse',
								rect: ['auto', 'auto','90px','90px','-2px', '-2px'],
								borderRadius: ["50%", "50%", "50%", "50%"],
								fill: ["rgba(111,176,127,1.00)"],
								stroke: [2,"rgba(167,169,171,1.00)","solid"],
								transform: [[],[],[],['0.95652','0.95652']]
							}]
					},
					{
						id: 'fourty',
						type: 'text',
						rect: ['244px', '235px','auto','auto','auto', 'auto'],
						text: "40",
						align: "left",
						font: ['"Open Sans", sans-serif', 36, "rgba(167,169,171,1)", "400", "none", "normal"]
					},
					{
						id: 'medical_container',
						type: 'group',
						rect: ['205', '374','90','90','auto', 'auto'],
						transform: [[],['276']],
						c: [
							{
								id: 'medical_circle',
								type: 'ellipse',
								rect: ['auto', 'auto','90px','90px','-2px', '-2px'],
								borderRadius: ["50%", "50%", "50%", "50%"],
								fill: ["rgba(111,176,127,1.00)"],
								stroke: [2,"rgba(167,169,171,1.00)","solid"],
								transform: [[],[],[],['0.95652','0.95652']]
							}]
					},
					{
						id: 'one_twenty',
						type: 'text',
						rect: ['1102px', '299px','auto','auto','auto', 'auto'],
						text: "120",
						align: "left",
						font: ['"Open Sans", sans-serif', 36, "rgba(167,169,171,1)", "400", "none", "normal"]
					},
					{
						id: 'medical_containerCopy',
						type: 'group',
						rect: ['205', '374','90','90','auto', 'auto'],
						transform: [[],['276']],
						c: [
							{
								id: 'medical_circleCopy',
								type: 'ellipse',
								rect: ['auto', 'auto','90px','90px','-2px', '-2px'],
								borderRadius: ["50%", "50%", "50%", "50%"],
								fill: ["rgba(111,176,127,1.00)"],
								stroke: [2,"rgba(167,169,171,1.00)","solid"],
								transform: [[],[],[],['0.95652','0.95652']]
							}]
					},
					{
						id: 'onetwenty',
						type: 'text',
						rect: ['1103px', '174px','auto','auto','auto', 'auto'],
						text: "120",
						align: "left",
						font: ['"Open Sans", sans-serif', 36, "rgba(167,169,171,1)", "400", "none", "normal"]
					},
					{
						id: 'med_no_wipe',
						type: 'rect',
						rect: ['1103px', '288px','63px','49px','auto', 'auto'],
						fill: ["rgba(255,255,255,1.00)"],
						stroke: [0,"rgba(0,0,0,1)","none"]
					},
					{
						id: 'additional_no_wipe',
						type: 'rect',
						rect: ['1103px', '163px','63px','49px','auto', 'auto'],
						fill: ["rgba(255,255,255,1.00)"],
						stroke: [0,"rgba(0,0,0,1)","none"]
					},
					{
						id: 'additional_wwami_no_wipe',
						type: 'rect',
						rect: ['235px', '221px','63px','49px','auto', 'auto'],
						fill: ["rgba(255,255,255,1.00)"],
						stroke: [0,"rgba(0,0,0,1)","none"]
					},
					{
						id: 'remaining_no_wipe',
						type: 'rect',
						rect: ['233px', '90px','63px','49px','auto', 'auto'],
						fill: ["rgba(255,255,255,1.00)"],
						stroke: [0,"rgba(0,0,0,1)","none"]
					},
					{
						id: 'med_seats_q_wipe',
						type: 'rect',
						rect: ['1183px', '287px','106px','22px','auto', 'auto'],
						fill: ["rgba(255,255,255,1)"],
						stroke: [0,"rgb(0, 0, 0)","none"]
					},
					{
						id: 'med_seats_a_wipe',
						type: 'rect',
						rect: ['1183px', '313px','106px','22px','auto', 'auto'],
						fill: ["rgba(255,255,255,1)"],
						stroke: [0,"rgb(0, 0, 0)","none"]
					},
					{
						id: 'additional_wsu_seats_q_wipe',
						type: 'rect',
						rect: ['1193px', '164px','141px','22px','auto', 'auto'],
						fill: ["rgba(255,255,255,1)"],
						stroke: [0,"rgb(0, 0, 0)","none"]
					},
					{
						id: 'additional_wsu_a_wipe',
						type: 'rect',
						rect: ['1193px', '190px','141px','22px','auto', 'auto'],
						fill: ["rgba(255,255,255,1)"],
						stroke: [0,"rgb(0, 0, 0)","none"]
					},
					{
						id: 'additional_wwami_q_wipe',
						type: 'rect',
						rect: ['21px', '222px','189px','22px','auto', 'auto'],
						fill: ["rgba(255,255,255,1)"],
						stroke: [0,"rgb(0, 0, 0)","none"]
					},
					{
						id: 'additional_wwami_a_wipe',
						type: 'rect',
						rect: ['21px', '248px','189px','22px','auto', 'auto'],
						fill: ["rgba(255,255,255,1)"],
						stroke: [0,"rgb(0, 0, 0)","none"]
					},
					{
						id: 'remaining_q_wipe',
						type: 'rect',
						rect: ['21px', '79px','189px','22px','auto', 'auto'],
						fill: ["rgba(255,255,255,1)"],
						stroke: [0,"rgb(0, 0, 0)","none"]
					},
					{
						id: 'remaining_a_wipe',
						type: 'rect',
						rect: ['21px', '101px','189px','16px','auto', 'auto'],
						fill: ["rgba(255,255,255,1)"],
						stroke: [0,"rgb(0, 0, 0)","none"]
					},
					{
						id: 'remaining_z_wipe',
						type: 'rect',
						rect: ['21px', '124px','189px','16px','auto', 'auto'],
						fill: ["rgba(255,255,255,1)"],
						stroke: [0,"rgb(0, 0, 0)","none"]
					}],
				symbolInstances: [

				]
			},
			states: {
				"Base State": {
					"${_one_twenty}": [
						["style", "top", '299px'],
						["style", "left", '1102px']
					],
					"${_additional_text}": [
						["style", "left", '26px'],
						["style", "top", '227px']
					],
					"${_additional_wwwami_circle}": [
						["color", "background-color", 'rgba(255,255,255,1.00)'],
						["style", "bottom", '-2px'],
						["transform", "scaleX", '0.95652'],
						["style", "border-style", 'solid'],
						["style", "left", 'auto'],
						["style", "width", '90px'],
						["style", "top", 'auto'],
						["transform", "rotateZ", '90deg'],
						["transform", "scaleY", '0.95652'],
						["style", "right", '-2px'],
						["style", "height", '90px'],
						["color", "border-color", 'rgba(167,169,171,1.00)'],
						["style", "clip", [0,90,48,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
						["style", "border-width", '2px']
					],
					"${_onesixty}": [
						["style", "top", '102px'],
						["color", "color", 'rgba(167,169,171,1.00)'],
						["style", "left", '233px'],
						["style", "font-size", '36px']
					],
					"${_addtional_wsu_text}": [
						["style", "top", '167px'],
						["style", "left", '1193px'],
						["style", "text-align", 'left']
					],
					"${_additional_wsu_containerCopy}": [
						["style", "top", '68px'],
						["transform", "scaleY", '1'],
						["transform", "rotateZ", '96deg'],
						["transform", "scaleX", '1'],
						["style", "clip", [0,40,90,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
						["style", "left", '220px']
					],
					"${_wa}": [
						["style", "height", '390px'],
						["style", "top", '4px'],
						["style", "left", '391px'],
						["style", "width", '594px']
					],
					"${_medical_container}": [
						["style", "top", '266px'],
						["transform", "scaleY", '1'],
						["transform", "rotateZ", '276deg'],
						["transform", "scaleX", '1'],
						["style", "clip", [0,40,90,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
						["style", "left", '1088px']
					],
					"${_med_available_text}": [
						["style", "top", '292px'],
						["style", "left", '1193px'],
						["style", "text-align", 'left']
					],
					"${_med_seats_a_wipe}": [
						["style", "top", '313px'],
						["style", "left", '1183px'],
						["style", "width", '106px']
					],
					"${_remaining_no_wipe}": [
						["style", "top", '90px'],
						["color", "background-color", 'rgba(255,255,255,1)'],
						["style", "left", '233px'],
						["style", "width", '63px']
					],
					"${_fourty}": [
						["style", "left", '244px'],
						["style", "top", '235px']
					],
					"${_remaining_a_wipe}": [
						["style", "height", '21px'],
						["style", "top", '101px'],
						["style", "left", '21px'],
						["style", "width", '189px']
					],
					"${_remaining_q_wipe}": [
						["style", "top", '83px'],
						["style", "left", '21px'],
						["style", "width", '189px']
					],
					"${_additional_wsu_seats_q_wipe}": [
						["style", "top", '170px'],
						["style", "left", '1193px'],
						["style", "width", '141px']
					],
					"${_med_available_line}": [
						["style", "top", '311px'],
						["style", "height", '0px'],
						["style", "left", '959px'],
						["style", "width", '0px']
					],
					"${_additional_wsu_circleCopy}": [
						["color", "background-color", 'rgba(255,255,255,1.00)'],
						["style", "bottom", '-2px'],
						["transform", "scaleX", '0.95652'],
						["style", "border-style", 'solid'],
						["style", "left", 'auto'],
						["style", "width", '90px'],
						["style", "top", 'auto'],
						["style", "border-width", '2px'],
						["transform", "scaleY", '0.95652'],
						["style", "right", '-2px'],
						["style", "height", '90px'],
						["color", "border-color", 'rgba(167,169,171,1.00)'],
						["style", "clip", [0,90,48,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
						["transform", "rotateZ", '90deg']
					],
					"${_Rectangle}": [
						["style", "top", '4px'],
						["color", "background-color", 'rgba(255,255,255,1.00)'],
						["style", "height", '400px']
					],
					"${_med_no_wipe}": [
						["color", "background-color", 'rgba(255,255,255,1.00)'],
						["style", "left", '1103px'],
						["style", "width", '63px']
					],
					"${_remaining_line}": [
						["style", "top", '113px'],
						["transform", "rotateZ", '180deg'],
						["style", "left", '436px'],
						["style", "width", '0px']
					],
					"${_additional_wwami_q_wipe}": [
						["style", "top", '225px'],
						["style", "left", '21px'],
						["style", "width", '189px']
					],
					"${_additional_no_wipe}": [
						["style", "top", '163px'],
						["color", "background-color", 'rgba(255,255,255,1.00)'],
						["style", "left", '1103px'],
						["style", "width", '63px']
					],
					"${_additional_wwami_container}": [
						["style", "top", '200px'],
						["transform", "scaleY", '1'],
						["transform", "rotateZ", '96deg'],
						["transform", "scaleX", '1'],
						["style", "clip", [0,40,90,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
						["style", "left", '220px']
					],
					"${_medical_circle}": [
						["color", "background-color", 'rgba(255,255,255,1.00)'],
						["style", "bottom", '-2px'],
						["transform", "scaleX", '0.95652'],
						["style", "border-style", 'solid'],
						["style", "left", 'auto'],
						["style", "width", '90px'],
						["style", "top", 'auto'],
						["style", "border-width", '2px'],
						["transform", "scaleY", '0.95652'],
						["style", "right", '-2px'],
						["style", "height", '90px'],
						["color", "border-color", 'rgba(167,169,171,1.00)'],
						["style", "clip", [0,90,48,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
						["transform", "rotateZ", '90deg']
					],
					"${_additional_wwami_no_wipe}": [
						["color", "background-color", 'rgba(255,255,255,1)'],
						["style", "top", '221px'],
						["style", "left", '235px'],
						["style", "width", '63px']
					],
					"${_additional_wsu_line}": [
						["style", "top", '183px'],
						["style", "left", '959px'],
						["style", "width", '0px']
					],
					"${_additional_wsu_a_wipe}": [
						["style", "top", '195px'],
						["style", "left", '1193px'],
						["style", "width", '141px']
					],
					"${_med_seats_q_wipe}": [
						["style", "left", '1183px'],
						["style", "width", '106px']
					],
					"${_additional_line}": [
						["style", "top", '245px'],
						["transform", "rotateZ", '180deg'],
						["style", "left", '436px'],
						["style", "width", '0px']
					],
					"${_onetwenty}": [
						["style", "left", '1103px'],
						["style", "top", '174px']
					],
					"${_remaining_text}": [
						["style", "top", '83px'],
						["style", "text-align", 'right'],
						["color", "color", 'rgba(94,104,113,1.00)'],
						["style", "font-family", '"Open Sans", sans-serif'],
						["style", "left", '21px'],
						["style", "font-size", '14px']
					],
					"${_medical_circleCopy}": [
						["color", "background-color", 'rgba(255,255,255,1.00)'],
						["style", "bottom", '-2px'],
						["transform", "scaleX", '0.95652'],
						["style", "border-style", 'solid'],
						["style", "left", 'auto'],
						["style", "width", '90px'],
						["style", "top", 'auto'],
						["transform", "rotateZ", '90deg'],
						["transform", "scaleY", '0.95652'],
						["style", "right", '-2px'],
						["style", "height", '90px'],
						["color", "border-color", 'rgba(167,169,171,1.00)'],
						["style", "clip", [0,90,48,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
						["style", "border-width", '2px']
					],
					"${_Stage}": [
						["color", "background-color", 'rgba(255,255,255,1)'],
						["style", "width", '1368px'],
						["style", "height", '400px'],
						["style", "overflow", 'hidden']
					],
					"${_medical_containerCopy}": [
						["style", "top", '140px'],
						["transform", "scaleY", '1'],
						["transform", "rotateZ", '276deg'],
						["transform", "scaleX", '1'],
						["style", "clip", [0,40,90,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
						["style", "left", '1089px']
					],
					"${_remaining_z_wipe}": [
						["style", "top", '131px'],
						["style", "height", '16px'],
						["style", "left", '21px'],
						["style", "width", '189px']
					],
					"${_additional_wwami_a_wipe}": [
						["style", "top", '253px'],
						["style", "left", '21px'],
						["style", "width", '189px']
					]
				}
			},
			timelines: {
				"Default Timeline": {
					fromState: "Base State",
					toState: "",
					duration: 4662,
					autoPlay: true,
					timeline: [
						{ id: "eid115", tween: [ "style", "${_med_seats_a_wipe}", "left", '1295px', { fromValue: '1183px'}], position: 1631, duration: 131 },
						{ id: "eid114", tween: [ "style", "${_med_no_wipe}", "width", '0px', { fromValue: '63px'}], position: 1500, duration: 250 },
						{ id: "eid127", tween: [ "style", "${_additional_wsu_seats_q_wipe}", "left", '1334px', { fromValue: '1193px'}], position: 3548, duration: 115 },
						{ id: "eid37", tween: [ "style", "${_additional_wsu_line}", "width", '128px', { fromValue: '0px'}], position: 2749, duration: 501 },
						{ id: "eid113", tween: [ "style", "${_med_no_wipe}", "left", '1166px', { fromValue: '1103px'}], position: 1500, duration: 250 },
						{ id: "eid137", tween: [ "style", "${_remaining_z_wipe}", "left", '210px', { fromValue: '21px'}], position: 4583, duration: 79 },
						{ id: "eid124", tween: [ "style", "${_additional_wwami_a_wipe}", "width", '0px', { fromValue: '189px'}], position: 2613, duration: 136 },
						{ id: "eid130", tween: [ "style", "${_additional_wsu_a_wipe}", "width", '0px', { fromValue: '141px'}], position: 3663, duration: 135 },
						{ id: "eid100", tween: [ "style", "${_medical_container}", "left", '1088px', { fromValue: '1088px'}], position: 1500, duration: 0, easing: "easeInQuint" },
						{ id: "eid102", tween: [ "color", "${_medical_circle}", "background-color", 'rgba(253,253,253,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 1250, duration: 202 },
						{ id: "eid103", tween: [ "color", "${_medical_circle}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(253,253,253,1.00)'}], position: 1452, duration: 48 },
						{ id: "eid138", tween: [ "style", "${_remaining_z_wipe}", "width", '3px', { fromValue: '189px'}], position: 4583, duration: 79 },
						{ id: "eid136", tween: [ "style", "${_remaining_a_wipe}", "width", '0px', { fromValue: '189px'}], position: 4500, duration: 83 },
						{ id: "eid118", tween: [ "style", "${_med_seats_q_wipe}", "width", '12px', { fromValue: '106px'}], position: 1500, duration: 131 },
						{ id: "eid134", tween: [ "style", "${_remaining_q_wipe}", "width", '0px', { fromValue: '189px'}], position: 4433, duration: 67 },
						{ id: "eid99", tween: [ "style", "${_medical_container}", "top", '266px', { fromValue: '266px'}], position: 1500, duration: 0, easing: "easeInQuint" },
						{ id: "eid92", tween: [ "style", "${_additional_wwami_container}", "top", '200px', { fromValue: '200px'}], position: 2500, duration: 0, easing: "easeInQuint" },
						{ id: "eid122", tween: [ "style", "${_additional_wwami_q_wipe}", "width", '6px', { fromValue: '189px'}], position: 2500, duration: 113 },
						{ id: "eid132", tween: [ "style", "${_remaining_no_wipe}", "width", '0px', { fromValue: '63px'}], position: 4433, duration: 229 },
						{ id: "eid101", tween: [ "style", "${_medical_container}", "clip", [0,90,90,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,40,90,0]}], position: 1250, duration: 250, easing: "easeInQuint" },
						{ id: "eid95", tween: [ "color", "${_additional_wwwami_circle}", "background-color", 'rgba(253,253,253,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 2250, duration: 202 },
						{ id: "eid96", tween: [ "color", "${_additional_wwwami_circle}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(253,253,253,1.00)'}], position: 2452, duration: 48 },
						{ id: "eid119", tween: [ "style", "${_additional_wwami_no_wipe}", "left", '233px', { fromValue: '235px'}], position: 2500, duration: 249 },
						{ id: "eid131", tween: [ "style", "${_remaining_no_wipe}", "left", '296px', { fromValue: '233px'}], position: 4433, duration: 229 },
						{ id: "eid135", tween: [ "style", "${_remaining_a_wipe}", "left", '210px', { fromValue: '21px'}], position: 4500, duration: 83 },
						{ id: "eid98", tween: [ "transform", "${_additional_wwwami_circle}", "rotateZ", '0deg', { fromValue: '90deg'}], position: 2250, duration: 250 },
						{ id: "eid97", tween: [ "style", "${_additional_wwwami_circle}", "clip", [0,100,100,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,90,48,0]}], position: 2250, duration: 250 },
						{ id: "eid126", tween: [ "style", "${_additional_no_wipe}", "width", '1px', { fromValue: '63px'}], position: 3548, duration: 250 },
						{ id: "eid83", tween: [ "style", "${_additional_wsu_circleCopy}", "clip", [0,100,100,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,90,48,0]}], position: 4183, duration: 250 },
						{ id: "eid94", tween: [ "style", "${_additional_wwami_container}", "left", '220px', { fromValue: '220px'}], position: 2500, duration: 0, easing: "easeInQuint" },
						{ id: "eid121", tween: [ "style", "${_additional_wwami_q_wipe}", "left", '210px', { fromValue: '21px'}], position: 2500, duration: 113 },
						{ id: "eid38", tween: [ "style", "${_remaining_line}", "left", '308px', { fromValue: '436px'}], position: 3750, duration: 433 },
						{ id: "eid111", tween: [ "style", "${_medical_circleCopy}", "clip", [0,100,100,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,90,48,0]}], position: 3250, duration: 250 },
						{ id: "eid129", tween: [ "style", "${_additional_wsu_a_wipe}", "left", '1334px', { fromValue: '1193px'}], position: 3663, duration: 135 },
						{ id: "eid78", tween: [ "style", "${_additional_wsu_containerCopy}", "top", '68px', { fromValue: '68px'}], position: 4433, duration: 0, easing: "easeInQuint" },
						{ id: "eid84", tween: [ "transform", "${_additional_wsu_circleCopy}", "rotateZ", '0deg', { fromValue: '90deg'}], position: 4183, duration: 250 },
						{ id: "eid93", tween: [ "style", "${_additional_wwami_container}", "clip", [0,90,90,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,40,90,0]}], position: 2250, duration: 250, easing: "easeInQuint" },
						{ id: "eid117", tween: [ "style", "${_med_seats_q_wipe}", "left", '1289px', { fromValue: '1183px'}], position: 1500, duration: 131 },
						{ id: "eid33", tween: [ "style", "${_med_available_line}", "height", '0px', { fromValue: '0px'}], position: 750, duration: 0 },
						{ id: "eid34", tween: [ "style", "${_med_available_line}", "height", '0px', { fromValue: '0px'}], position: 1250, duration: 0 },
						{ id: "eid32", tween: [ "style", "${_med_available_line}", "width", '128px', { fromValue: '0px'}], position: 750, duration: 500 },
						{ id: "eid80", tween: [ "style", "${_additional_wsu_containerCopy}", "clip", [0,90,90,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,40,90,0]}], position: 4183, duration: 250, easing: "easeInQuint" },
						{ id: "eid120", tween: [ "style", "${_additional_wwami_no_wipe}", "width", '2px', { fromValue: '63px'}], position: 2500, duration: 249 },
						{ id: "eid105", tween: [ "transform", "${_medical_circle}", "rotateZ", '0deg', { fromValue: '90deg'}], position: 1250, duration: 250 },
						{ id: "eid128", tween: [ "style", "${_additional_wsu_seats_q_wipe}", "width", '0px', { fromValue: '141px'}], position: 3548, duration: 115 },
						{ id: "eid24", tween: [ "style", "${_Rectangle}", "top", '-29px', { fromValue: '4px'}], position: 1250, duration: 500 },
						{ id: "eid27", tween: [ "style", "${_Rectangle}", "top", '-126px', { fromValue: '-29px'}], position: 2250, duration: 499 },
						{ id: "eid30", tween: [ "style", "${_Rectangle}", "top", '-280px', { fromValue: '-126px'}], position: 3250, duration: 500 },
						{ id: "eid81", tween: [ "color", "${_additional_wsu_circleCopy}", "background-color", 'rgba(253,253,253,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 4183, duration: 202 },
						{ id: "eid82", tween: [ "color", "${_additional_wsu_circleCopy}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(253,253,253,1.00)'}], position: 4385, duration: 48 },
						{ id: "eid108", tween: [ "style", "${_medical_containerCopy}", "clip", [0,90,90,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,40,90,0]}], position: 3250, duration: 250, easing: "easeInQuint" },
						{ id: "eid112", tween: [ "transform", "${_medical_circleCopy}", "rotateZ", '0deg', { fromValue: '90deg'}], position: 3250, duration: 250 },
						{ id: "eid107", tween: [ "style", "${_medical_containerCopy}", "left", '1089px', { fromValue: '1089px'}], position: 3500, duration: 0, easing: "easeInQuint" },
						{ id: "eid35", tween: [ "style", "${_additional_line}", "left", '308px', { fromValue: '436px'}], position: 1750, duration: 500 },
						{ id: "eid104", tween: [ "style", "${_medical_circle}", "clip", [0,100,100,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,90,48,0]}], position: 1250, duration: 250 },
						{ id: "eid125", tween: [ "style", "${_additional_no_wipe}", "left", '1165px', { fromValue: '1103px'}], position: 3548, duration: 250 },
						{ id: "eid6", tween: [ "style", "${_Rectangle}", "height", '259px', { fromValue: '400px'}], position: 205, duration: 545 },
						{ id: "eid106", tween: [ "style", "${_medical_containerCopy}", "top", '140px', { fromValue: '140px'}], position: 3500, duration: 0, easing: "easeInQuint" },
						{ id: "eid123", tween: [ "style", "${_additional_wwami_a_wipe}", "left", '210px', { fromValue: '21px'}], position: 2613, duration: 136 },
						{ id: "eid116", tween: [ "style", "${_med_seats_a_wipe}", "width", '5px', { fromValue: '106px'}], position: 1631, duration: 131 },
						{ id: "eid39", tween: [ "style", "${_remaining_line}", "width", '128px', { fromValue: '0px'}], position: 3750, duration: 433 },
						{ id: "eid79", tween: [ "style", "${_additional_wsu_containerCopy}", "left", '220px', { fromValue: '220px'}], position: 4433, duration: 0, easing: "easeInQuint" },
						{ id: "eid36", tween: [ "style", "${_additional_line}", "width", '128px', { fromValue: '0px'}], position: 1750, duration: 500 },
						{ id: "eid109", tween: [ "color", "${_medical_circleCopy}", "background-color", 'rgba(253,253,253,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 3250, duration: 202 },
						{ id: "eid110", tween: [ "color", "${_medical_circleCopy}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(253,253,253,1.00)'}], position: 3452, duration: 48 },
						{ id: "eid133", tween: [ "style", "${_remaining_q_wipe}", "left", '210px', { fromValue: '21px'}], position: 4433, duration: 67 }            ]
				}
			}
		}
	};

	Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

})(jQuery, AdobeEdge, "EDGE-21518124");
