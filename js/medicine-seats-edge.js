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
						id: 'wa_container',
						type: 'group',
						rect: ['57px', '42px','559','346','auto', 'auto'],
						c: [
							{
								id: 'wa',
								type: 'image',
								rect: ['0px', '0px','559px','346px','auto', 'auto'],
								fill: ["rgba(0,0,0,0)",im+"Pasted.svg",'0px','0px']
							}]
					},
					{
						id: 'gray_hor',
						type: 'rect',
						rect: ['92px', '213px','595px','3px','auto', 'auto'],
						fill: ["rgba(192,192,192,1)"],
						stroke: [0,"rgba(0,0,0,1)","none"]
					},
					{
						id: 'gray_vert',
						type: 'rect',
						rect: ['684px', '454px','3px','80px','auto', 'auto'],
						fill: ["rgba(192,192,192,1)"],
						stroke: [0,"rgb(0, 0, 0)","none"]
					},
					{
						id: 'gra_circle_container',
						type: 'group',
						rect: ['205', '374','90','90','auto', 'auto'],
						c: [
							{
								id: 'gray_circle',
								type: 'ellipse',
								rect: ['auto', 'auto','90px','90px','0px', '0px'],
								borderRadius: ["50%", "50%", "50%", "50%"],
								fill: ["rgba(111,176,127,1.00)"],
								stroke: [1,"rgb(128, 128, 128)","none"]
							}]
					},
					{
						id: 'gray_text',
						type: 'text',
						rect: ['653px', '281px','auto','auto','auto', 'auto'],
						text: "235",
						font: ['OpenSans-Light, sans-serif', 40, "rgba(255,255,255,1.00)", "100", "none", ""]
					},
					{
						id: 'blue_hor',
						type: 'rect',
						rect: ['92px', '451px','595px','3px','auto', 'auto'],
						fill: ["rgba(192,192,192,1)"],
						stroke: [0,"rgba(0,0,0,1)","none"]
					},
					{
						id: 'blue_vert',
						type: 'rect',
						rect: ['684px', '454px','3px','80px','auto', 'auto'],
						fill: ["rgba(137,157,164,1.00)"],
						stroke: [0,"rgb(0, 0, 0)","none"]
					},
					{
						id: 'blue_circle_container',
						type: 'group',
						rect: ['205', '374','90','90','auto', 'auto'],
						c: [
							{
								id: 'blue_circle',
								type: 'ellipse',
								rect: ['auto', 'auto','90px','90px','0px', '0px'],
								borderRadius: ["50%", "50%", "50%", "50%"],
								fill: ["rgba(111,176,127,1.00)"],
								stroke: [1,"rgb(128, 128, 128)","none"]
							}]
					},
					{
						id: 'blue_text',
						type: 'text',
						rect: ['744px', '192px','auto','auto','auto', 'auto'],
						text: "344",
						font: ['OpenSans-Light, sans-serif', 40, "rgba(255,255,255,1.00)", "100", "none", ""]
					},
					{
						id: 'orange_hor',
						type: 'rect',
						rect: ['92px', '451px','595px','3px','auto', 'auto'],
						fill: ["rgba(242,148,94,1.00)"],
						stroke: [0,"rgba(0,0,0,1)","none"]
					},
					{
						id: 'orange_vert',
						type: 'rect',
						rect: ['684px', '454px','3px','80px','auto', 'auto'],
						fill: ["rgba(137,157,164,1.00)"],
						stroke: [0,"rgb(0, 0, 0)","none"]
					},
					{
						id: 'orange_circle_container',
						type: 'group',
						rect: ['205', '374','90','90','auto', 'auto'],
						c: [
							{
								id: 'orange_circle',
								type: 'ellipse',
								rect: ['auto', 'auto','90px','90px','0px', '0px'],
								borderRadius: ["50%", "50%", "50%", "50%"],
								fill: ["rgba(111,176,127,1.00)"],
								stroke: [1,"rgb(128, 128, 128)","none"]
							}]
					},
					{
						id: 'orange_text',
						type: 'text',
						rect: ['834px', '90px','auto','auto','auto', 'auto'],
						text: "440",
						font: ['OpenSans-Light, sans-serif', 40, "rgba(255,255,255,1.00)", "100", "none", ""]
					},
					{
						id: 'gray_head',
						type: 'text',
						rect: ['755px', '309px','auto','auto','auto', 'auto'],
						text: "Heading",
						font: ['Arial, Helvetica, sans-serif', 24, "rgba(204,204,204,1.00)", "normal", "none", ""]
					},
					{
						id: 'gray_body_text',
						type: 'text',
						rect: ['755px', '343px','230px','118px','auto', 'auto'],
						text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
						align: "left",
						font: ['Arial, Helvetica, sans-serif', 14, "rgba(69,69,69,1.00)", "400", "none", "normal"]
					},
					{
						id: 'gray_wipe',
						type: 'rect',
						rect: ['744px', '294px','203px','99px','auto', 'auto'],
						fill: ["rgba(255,255,255,1.00)"],
						stroke: [1,"rgb(128, 128, 128)","none"]
					},
					{
						id: 'blue_head',
						type: 'text',
						rect: ['842px', '213px','auto','auto','auto', 'auto'],
						text: "Heading",
						font: ['Arial, Helvetica, sans-serif', 24, "rgba(137,157,164,1.00)", "normal", "none", ""]
					},
					{
						id: 'blue_body_text',
						type: 'text',
						rect: ['842px', '247px','230px','118px','auto', 'auto'],
						text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
						align: "left",
						font: ['Arial, Helvetica, sans-serif', 14, "rgba(69,69,69,1.00)", "400", "none", "normal"]
					},
					{
						id: 'blue_wipe',
						type: 'rect',
						rect: ['834px', '209px','209px','90px','auto', 'auto'],
						fill: ["rgba(255,255,255,1)"],
						stroke: [1,"rgb(128, 128, 128)","none"]
					},
					{
						id: 'blue_headCopy',
						type: 'text',
						rect: ['929px', '116px','auto','auto','auto', 'auto'],
						text: "Heading",
						font: ['Arial, Helvetica, sans-serif', 24, "rgba(242,148,94,1.00)", "normal", "none", ""]
					},
					{
						id: 'blue_body_textCopy',
						type: 'text',
						rect: ['929px', '150px','230px','118px','auto', 'auto'],
						text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
						align: "left",
						font: ['Arial, Helvetica, sans-serif', 14, "rgba(69,69,69,1.00)", "400", "none", "normal"]
					},
					{
						id: 'orange_wipe',
						type: 'rect',
						rect: ['929px', '111px','184px','81px','auto', 'auto'],
						fill: ["rgba(255,255,255,1)"],
						stroke: [1,"rgb(128, 128, 128)","none"]
					}],
				symbolInstances: [

				]
			},
			states: {
				"Base State": {
					"${_gray_text}": [
						["style", "top", '297px'],
						["style", "font-weight", '100'],
						["color", "color", 'rgba(255,255,255,0.00)'],
						["style", "font-family", 'OpenSans-Light, sans-serif'],
						["style", "left", '653px'],
						["style", "font-size", '40px']
					],
					"${_blue_hor}": [
						["style", "top", '134px'],
						["style", "height", '3px'],
						["color", "background-color", 'rgba(137,157,164,1.00)'],
						["style", "left", '67px'],
						["style", "width", '0px']
					],
					"${_gray_circle}": [
						["color", "background-color", 'rgba(204,204,204,1.00)'],
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
					"${_gray_body_text}": [
						["style", "top", '343px'],
						["style", "font-size", '14px'],
						["style", "height", '118px'],
						["color", "color", 'rgba(69,69,69,1.00)'],
						["style", "left", '755px'],
						["style", "width", '230px']
					],
					"${_gray_wipe}": [
						["color", "background-color", 'rgba(255,255,255,1.00)'],
						["style", "left", '744px'],
						["style", "clip", [0,203,99,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
						["style", "top", '294px']
					],
					"${_gray_head}": [
						["style", "top", '309px'],
						["style", "left", '755px'],
						["color", "color", 'rgba(204,204,204,1.00)']
					],
					"${_blue_head}": [
						["style", "top", '213px'],
						["style", "left", '842px'],
						["color", "color", 'rgba(137,157,164,1.00)']
					],
					"${_blue_wipe}": [
						["style", "top", '209px'],
						["style", "clip", [0,209,90,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
						["style", "left", '834px'],
						["style", "width", '209px']
					],
					"${_blue_circle_container}": [
						["style", "top", '175px'],
						["style", "left", '733px'],
						["style", "clip", [0,40,90,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
					],
					"${_blue_body_textCopy}": [
						["style", "top", '150px'],
						["style", "font-size", '14px'],
						["style", "height", '118px'],
						["color", "color", 'rgba(69,69,69,1)'],
						["style", "left", '929px'],
						["style", "width", '230px']
					],
					"${_blue_body_text}": [
						["style", "top", '247px'],
						["style", "width", '230px'],
						["style", "height", '118px'],
						["color", "color", 'rgba(69,69,69,1)'],
						["style", "left", '842px'],
						["style", "font-size", '14px']
					],
					"${_orange_vert}": [
						["style", "top", '34px'],
						["style", "height", '0px'],
						["color", "background-color", 'rgba(242,148,94,1.00)'],
						["style", "left", '866px'],
						["style", "width", '3px']
					],
					"${_blue_circle}": [
						["color", "background-color", 'rgba(137,157,164,1.00)'],
						["style", "bottom", '0px'],
						["style", "border-style", 'none'],
						["style", "left", 'auto'],
						["style", "width", '90px'],
						["style", "top", 'auto'],
						["style", "height", '90px'],
						["transform", "rotateZ", '90deg'],
						["style", "clip", [0,90,48,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
						["style", "right", '0px']
					],
					"${_gray_textCopy}": [
						["style", "top", '519px'],
						["style", "font-weight", '100'],
						["color", "color", 'rgba(255,255,255,0.00)'],
						["style", "font-family", 'OpenSans-Light, sans-serif'],
						["style", "left", '653px'],
						["style", "font-size", '40px']
					],
					"${_orange_circle}": [
						["color", "background-color", 'rgba(242,148,94,1.00)'],
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
					"${_gra_circle_container}": [
						["style", "top", '264px'],
						["style", "left", '642px'],
						["style", "clip", [0,40,90,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
					],
					"${_orange_hor}": [
						["style", "top", '31px'],
						["style", "height", '3px'],
						["color", "background-color", 'rgba(242,148,94,1.00)'],
						["style", "left", '196px'],
						["style", "width", '0px']
					],
					"${_orange_wipe}": [
						["style", "top", '111px'],
						["style", "clip", [0,184,81,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
						["style", "left", '929px'],
						["style", "width", '184px']
					],
					"${_wa_container}": [
						["style", "top", '42px'],
						["style", "clip", [348,559,346,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
						["style", "left", '57px']
					],
					"${_orange_text}": [
						["style", "top", '105px'],
						["style", "font-weight", '100'],
						["color", "color", 'rgba(255,255,255,0.00)'],
						["style", "font-family", 'OpenSans-Light, sans-serif'],
						["style", "left", '834px'],
						["style", "font-size", '40px']
					],
					"${_gray_vert}": [
						["style", "top", '214px'],
						["style", "height", '0px'],
						["style", "left", '685px'],
						["style", "width", '3px']
					],
					"${_blue_headCopy}": [
						["style", "top", '116px'],
						["style", "left", '929px'],
						["color", "color", 'rgba(242,148,94,1.00)']
					],
					"${_wa}": [
						["style", "height", '346px'],
						["style", "top", '0px'],
						["style", "left", '0px'],
						["style", "width", '559px']
					],
					"${_blue_vert}": [
						["style", "top", '136px'],
						["style", "height", '0px'],
						["color", "background-color", 'rgba(137,157,164,1.00)'],
						["style", "left", '776px'],
						["style", "width", '3px']
					],
					"${_Stage_comparison}": [
						["color", "background-color", 'rgba(255,255,255,1)'],
						["style", "overflow", 'hidden'],
						["style", "height", '400px'],
						["style", "width", '1188px']
					],
					"${_orange_circle_container}": [
						["style", "top", '73px'],
						["style", "left", '823px'],
						["style", "clip", [0,40,90,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
					],
					"${_blue_text}": [
						["style", "top", '207px'],
						["style", "font-weight", '100'],
						["color", "color", 'rgba(255,255,255,0.00)'],
						["style", "font-family", 'OpenSans-Light, sans-serif'],
						["style", "left", '744px'],
						["style", "font-size", '40px']
					],
					"${_gray_hor}": [
						["style", "height", '3px'],
						["style", "top", '213px'],
						["style", "left", '92px'],
						["style", "width", '0px']
					]
				}
			},
			timelines: {
				"Default Timeline": {
					fromState: "Base State",
					toState: "",
					duration: 4500,
					autoPlay: true,
					timeline: [
						{ id: "eid10", tween: [ "style", "${_gray_vert}", "left", '685px', { fromValue: '685px'}], position: 1250, duration: 0 },
						{ id: "eid135", tween: [ "style", "${_orange_circle_container}", "left", '823px', { fromValue: '823px'}], position: 4500, duration: 0, easing: "easeInQuint" },
						{ id: "eid148", tween: [ "color", "${_orange_vert}", "background-color", 'rgba(242,148,94,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(242,148,94,1.00)'}], position: 4500, duration: 0 },
						{ id: "eid27", tween: [ "color", "${_gray_text}", "color", 'rgba(255,255,255,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0.00)'}], position: 0, duration: 1500, easing: "easeInQuint" },
						{ id: "eid139", tween: [ "transform", "${_orange_circle}", "rotateZ", '0deg', { fromValue: '90deg'}], position: 4250, duration: 250 },
						{ id: "eid9", tween: [ "style", "${_gray_vert}", "height", '50px', { fromValue: '0px'}], position: 1000, duration: 250 },
						{ id: "eid121", tween: [ "color", "${_blue_text}", "color", 'rgba(255,255,255,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0.00)'}], position: 1500, duration: 1500, easing: "easeInQuint" },
						{ id: "eid110", tween: [ "style", "${_blue_vert}", "left", '776px', { fromValue: '776px'}], position: 2750, duration: 0 },
						{ id: "eid109", tween: [ "style", "${_blue_vert}", "top", '136px', { fromValue: '136px'}], position: 2750, duration: 0 },
						{ id: "eid143", tween: [ "style", "${_orange_vert}", "width", '3px', { fromValue: '3px'}], position: 4250, duration: 0 },
						{ id: "eid156", tween: [ "style", "${_gray_wipe}", "clip", [0,203,9,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,203,99,0]}], position: 1250, duration: 250 },
						{ id: "eid25", tween: [ "style", "${_gra_circle_container}", "left", '642px', { fromValue: '642px'}], position: 1500, duration: 0, easing: "easeInQuint" },
						{ id: "eid108", tween: [ "style", "${_blue_vert}", "height", '50px', { fromValue: '0px'}], position: 2500, duration: 250 },
						{ id: "eid23", tween: [ "color", "${_gray_circle}", "background-color", 'rgba(204,204,204,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(204,204,204,1.00)'}], position: 1250, duration: 0, easing: "easeInQuint" },
						{ id: "eid24", tween: [ "color", "${_gray_circle}", "background-color", 'rgba(204,204,204,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(204,204,204,1.00)'}], position: 1500, duration: 0, easing: "easeInQuint" },
						{ id: "eid7", tween: [ "style", "${_gray_hor}", "width", '595px', { fromValue: '0px'}], position: 500, duration: 500 },
						{ id: "eid145", tween: [ "style", "${_orange_hor}", "height", '3px', { fromValue: '3px'}], position: 4000, duration: 0, easing: "easeInQuint" },
						{ id: "eid125", tween: [ "color", "${_blue_circle}", "background-color", 'rgba(137,157,164,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(137,157,164,1.00)'}], position: 2750, duration: 0, easing: "easeInQuint" },
						{ id: "eid126", tween: [ "color", "${_blue_circle}", "background-color", 'rgba(137,157,164,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(204,204,204,1.00)'}], position: 3000, duration: 0, easing: "easeInQuint" },
						{ id: "eid128", tween: [ "transform", "${_blue_circle}", "rotateZ", '0deg', { fromValue: '90deg'}], position: 2750, duration: 250 },
						{ id: "eid15", tween: [ "style", "${_gra_circle_container}", "clip", [0,90,90,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,40,90,0]}], position: 1250, duration: 250, easing: "easeInQuint" },
						{ id: "eid146", tween: [ "style", "${_orange_hor}", "left", '196px', { fromValue: '196px'}], position: 4000, duration: 0, easing: "easeInQuint" },
						{ id: "eid138", tween: [ "style", "${_orange_circle}", "clip", [0,90,90,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,90,48,0]}], position: 4250, duration: 250 },
						{ id: "eid111", tween: [ "style", "${_blue_vert}", "width", '3px', { fromValue: '3px'}], position: 2750, duration: 0 },
						{ id: "eid20", tween: [ "style", "${_gra_circle_container}", "top", '264px', { fromValue: '264px'}], position: 1500, duration: 0 },
						{ id: "eid96", tween: [ "style", "${_blue_hor}", "left", '67px', { fromValue: '67px'}], position: 2500, duration: 0, easing: "easeInQuint" },
						{ id: "eid142", tween: [ "style", "${_orange_vert}", "left", '866px', { fromValue: '866px'}], position: 4250, duration: 0 },
						{ id: "eid147", tween: [ "style", "${_orange_hor}", "width", '673px', { fromValue: '0px'}], position: 3500, duration: 500 },
						{ id: "eid122", tween: [ "style", "${_blue_circle_container}", "top", '175px', { fromValue: '175px'}], position: 3000, duration: 0 },
						{ id: "eid89", tween: [ "style", "${_blue_hor}", "top", '134px', { fromValue: '134px'}], position: 2500, duration: 0, easing: "easeInQuint" },
						{ id: "eid12", tween: [ "style", "${_gray_vert}", "width", '3px', { fromValue: '3px'}], position: 1250, duration: 0 },
						{ id: "eid124", tween: [ "style", "${_blue_circle_container}", "left", '733px', { fromValue: '733px'}], position: 3000, duration: 0, easing: "easeInQuint" },
						{ id: "eid17", tween: [ "style", "${_gray_circle}", "clip", [0,90,90,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,90,48,0]}], position: 1250, duration: 250 },
						{ id: "eid94", tween: [ "style", "${_blue_hor}", "height", '3px', { fromValue: '3px'}], position: 2500, duration: 0, easing: "easeInQuint" },
						{ id: "eid134", tween: [ "style", "${_orange_circle_container}", "clip", [0,90,90,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,40,90,0]}], position: 4250, duration: 250, easing: "easeInQuint" },
						{ id: "eid158", tween: [ "style", "${_orange_wipe}", "clip", [0,184,-4,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,184,81,0]}], position: 4250, duration: 250 },
						{ id: "eid127", tween: [ "style", "${_blue_circle}", "clip", [0,90,90,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,90,48,0]}], position: 2750, duration: 250 },
						{ id: "eid140", tween: [ "style", "${_orange_vert}", "top", '34px', { fromValue: '34px'}], position: 4250, duration: 0 },
						{ id: "eid157", tween: [ "style", "${_blue_wipe}", "clip", [0,209,-2,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,209,90,0]}], position: 2750, duration: 250 },
						{ id: "eid14", tween: [ "style", "${_gray_vert}", "top", '214px', { fromValue: '214px'}], position: 1250, duration: 0 },
						{ id: "eid144", tween: [ "style", "${_orange_hor}", "top", '31px', { fromValue: '31px'}], position: 4000, duration: 0, easing: "easeInQuint" },
						{ id: "eid141", tween: [ "style", "${_orange_vert}", "height", '50px', { fromValue: '0px'}], position: 4000, duration: 250 },
						{ id: "eid133", tween: [ "style", "${_orange_circle_container}", "top", '73px', { fromValue: '73px'}], position: 4500, duration: 0 },
						{ id: "eid123", tween: [ "style", "${_blue_circle_container}", "clip", [0,90,90,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,40,90,0]}], position: 2750, duration: 250, easing: "easeInQuint" },
						{ id: "eid136", tween: [ "color", "${_orange_circle}", "background-color", 'rgba(242,148,94,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(242,148,94,1.00)'}], position: 4250, duration: 0, easing: "easeInQuint" },
						{ id: "eid137", tween: [ "color", "${_orange_circle}", "background-color", 'rgba(242,148,94,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(242,148,94,1.00)'}], position: 4500, duration: 0, easing: "easeInQuint" },
						{ id: "eid18", tween: [ "transform", "${_gray_circle}", "rotateZ", '0deg', { fromValue: '90deg'}], position: 1250, duration: 250 },
						{ id: "eid85", tween: [ "style", "${_blue_hor}", "width", '712px', { fromValue: '0px'}], position: 2000, duration: 500 },
						{ id: "eid4", tween: [ "style", "${_wa_container}", "clip", [176,559,346,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [348,559,346,0]}], position: 0, duration: 500 },
						{ id: "eid72", tween: [ "style", "${_wa_container}", "clip", [88,559,346,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [176,559,346,0]}], position: 500, duration: 1500, easing: "easeInQuint" },
						{ id: "eid131", tween: [ "style", "${_wa_container}", "clip", [-1,559,346,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [88,559,346,0]}], position: 2000, duration: 1500, easing: "easeInQuint" },
						{ id: "eid132", tween: [ "color", "${_orange_text}", "color", 'rgba(255,255,255,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0.00)'}], position: 2000, duration: 1500, easing: "easeInQuint" }            ]
				}
			}
		}
	};

	Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

})(jQuery, AdobeEdge, "EDGE-21518124");
