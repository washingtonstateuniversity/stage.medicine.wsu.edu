/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='http://wp.wsu.dev/wp-content/themes/medicine-dev/images/';

var fonts = {};    fonts['open-sans, sans-serif']='<script src=\"http://use.edgefonts.net/open-sans:n7,i7,n8,i8,i4,n3,i3,n4,n6,i6:all.js\"></script>';
    fonts['open-sans-condensed, sans-serif']='<script src=\"http://use.edgefonts.net/open-sans-condensed:n7,n3,i3:all.js\"></script>';

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
    centerStage: false,
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'mi',
                type: 'image',
                rect: ['130px', '244px','459px','459px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"mi-wa-pasted.svg",'0px','0px']
            },
            {
                id: 'wa',
                type: 'image',
                rect: ['691px', '288px','316px','203px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"mi-wa-pasted2.svg",'0px','0px']
            },
            {
                id: 'top_right_pop',
                type: 'ellipse',
                rect: ['720px', '470px','70px','70px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(249,249,249,1.00)"],
                stroke: [1,"rgba(128,128,128,1.00)","solid"]
            },
            {
                id: 'mid_right_sq',
                type: 'ellipse',
                rect: ['760px', '550px','70px','70px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(249,249,249,1.00)"],
                stroke: [1,"rgba(128,128,128,1.00)","solid"]
            },
            {
                id: 'bottom_right_gsp',
                type: 'ellipse',
                rect: ['700px', '630px','70px','70px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(249,249,249,1.00)"],
                stroke: [1,"rgba(128,128,128,1.00)","solid"]
            },
            {
                id: 'top_left_pop',
                type: 'ellipse',
                rect: ['470px', '470px','70px','70px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(249,249,249,1.00)"],
                stroke: [1,"rgba(128,128,128,1.00)","solid"]
            },
            {
                id: 'mid_left_sq',
                type: 'ellipse',
                rect: ['430px', '550px','70px','70px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(249,249,249,1.00)"],
                stroke: [1,"rgba(128,128,128,1.00)","solid"]
            },
            {
                id: 'bottom_left_gsp',
                type: 'ellipse',
                rect: ['490px', '630px','70px','70px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(249,249,249,1.00)"],
                stroke: [1,"rgba(128,128,128,1.00)","solid"]
            },
            {
                id: 'mi_pop_text',
                type: 'text',
                rect: ['477px', '495px','auto','auto','auto', 'auto'],
                text: "9,895,622",
                font: ['open-sans-condensed, sans-serif', 17, "rgba(128,128,128,1.00)", "normal", "none", ""]
            },
            {
                id: 'mi_sq_text',
                type: 'text',
                rect: ['437px', '574px','auto','auto','auto', 'auto'],
                text: "96,713.51",
                align: "left",
                font: ['open-sans-condensed, sans-serif', 17, "rgba(128,128,128,1)", "400", "none", "normal"]
            },
            {
                id: 'mi_gsp_text',
                type: 'text',
                rect: ['503px', '654px','auto','auto','auto', 'auto'],
                text: "368,401",
                align: "left",
                font: ['open-sans-condensed, sans-serif', 17, "rgba(128,128,128,1)", "400", "none", "normal"]
            },
            {
                id: 'wa_pop_text',
                type: 'text',
                rect: ['727px', '494px','auto','auto','auto', 'auto'],
                text: "6,971,406",
                align: "left",
                font: ['open-sans-condensed, sans-serif', 17, "rgba(128,128,128,1)", "400", "none", "normal"]
            },
            {
                id: 'wa_sq_text',
                type: 'text',
                rect: ['767px', '574px','auto','auto','auto', 'auto'],
                text: "71,297.95",
                align: "left",
                font: ['open-sans-condensed, sans-serif', 17, "rgba(128,128,128,1)", "400", "none", "normal"]
            },
            {
                id: 'wa_gsp_text',
                type: 'text',
                rect: ['713px', '654px','auto','auto','auto', 'auto'],
                text: "338,334",
                align: "left",
                font: ['open-sans-condensed, sans-serif', 17, "rgba(128,128,128,1)", "400", "none", "normal"]
            },
            {
                id: 'pop_line',
                type: 'rect',
                rect: ['542px', '505px','176px','0px','auto', 'auto'],
                fill: ["rgba(180,180,180,1.00)"],
                stroke: [1,"rgba(221,221,221,1.00)","solid"]
            },
            {
                id: 'gsp_line',
                type: 'rect',
                rect: ['562px', '665px','136px','0px','auto', 'auto'],
                fill: ["rgba(221,221,221,1.00)"],
                stroke: [1,"rgba(221,221,221,1.00)","solid"]
            },
            {
                id: 'sq_line',
                type: 'rect',
                rect: ['502px', '585px','256px','0px','auto', 'auto'],
                fill: ["rgba(180,180,180,1.00)"],
                stroke: [1,"rgba(221,221,221,1.00)","solid"]
            },
            {
                id: 'pop_text',
                type: 'text',
                rect: ['597px', '470px','auto','auto','auto', 'auto'],
                text: "Population",
                align: "left",
                font: ['open-sans-condensed, sans-serif', 20, "rgba(42,48,51,1.00)", "400", "none", "normal"]
            },
            {
                id: 'sq_miles_text',
                type: 'text',
                rect: ['601px', '550px','auto','auto','auto', 'auto'],
                text: "Sq. Miles",
                align: "left",
                font: ['open-sans-condensed, sans-serif', 20, "rgba(42,48,51,1.00)", "400", "none", "normal"]
            },
            {
                id: 'gsp_text',
                type: 'text',
                rect: ['619px', '630px','auto','auto','auto', 'auto'],
                text: "GSP",
                align: "left",
                font: ['open-sans-condensed, sans-serif', 20, "rgba(42,48,51,1.00)", "400", "none", "normal"]
            },
            {
                id: 'total_seats_text',
                type: 'text',
                rect: ['559px', '758px','auto','auto','auto', 'auto'],
                text: "Total seats",
                align: "left",
                font: ['open-sans, sans-serif', 30, "rgba(252,176,60,1.00)", "100", "none", "normal"]
            },
            {
                id: 'in_state_enrollment_text',
                type: 'text',
                rect: ['503px', '816px','auto','auto','auto', 'auto'],
                text: "In-state enrollment",
                align: "left",
                font: ['open-sans, sans-serif', 30, "rgba(111,176,127,1.00)", "100", "none", "normal"]
            },
            {
                id: 'wa_total_enrollment_container',
                type: 'group',
                rect: ['205', '374','90','90','auto', 'auto'],
                c: [
                {
                    id: 'wa_total_enrollment',
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
                id: 'total_seats_wa_horizontal',
                type: 'rect',
                rect: ['714px', '779px','209px','3px','auto', 'auto'],
                fill: ["rgba(252,176,60,1.00)"],
                stroke: [1,"rgb(128, 128, 128)","none"]
            },
            {
                id: 'in_state_enrollment_wa_horizontal',
                type: 'rect',
                rect: ['772px', '838px','239px','3px','auto', 'auto'],
                fill: ["rgba(111,176,127,1.00)"],
                stroke: [1,"rgb(128, 128, 128)","none"]
            },
            {
                id: 'in_state_enrollment_wa_vert',
                type: 'rect',
                rect: ['1013px', '748px','3px','90px','auto', 'auto'],
                fill: ["rgba(111,176,127,1)"],
                stroke: [1,"rgb(128, 128, 128)","none"]
            },
            {
                id: 'wa_total_enrollment_text',
                type: 'text',
                rect: ['978px', '675px','auto','auto','auto', 'auto'],
                text: "120",
                align: "left",
                font: ['open-sans, sans-serif', 40, "rgba(255,255,255,1)", "100", "none", "normal"]
            },
            {
                id: 'total_seats_wa_vert',
                type: 'rect',
                rect: ['920px', '642px','3px','137px','auto', 'auto'],
                fill: ["rgba(252,176,60,1)"],
                stroke: [1,"rgb(128, 128, 128)","none"]
            },
            {
                id: 'wa_total_seats_text',
                type: 'text',
                rect: ['885px', '569px','auto','auto','auto', 'auto'],
                text: "235",
                align: "left",
                font: ['open-sans, sans-serif', 40, "rgba(255,255,255,1)", "100", "none", "normal"]
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
                id: 'mi_total_enrollment_container',
                type: 'group',
                rect: ['205', '374','90','90','auto', 'auto'],
                c: [
                {
                    id: 'mi_total_enrollment',
                    type: 'ellipse',
                    rect: ['auto', 'auto','90px','90px','0px', '0px'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(111,176,127,1.00)"],
                    stroke: [1,"rgb(128, 128, 128)","none"]
                }]
            },
            {
                id: 'total_seats_mi_horizontal',
                type: 'rect',
                rect: ['339px', '779px','209px','3px','auto', 'auto'],
                fill: ["rgba(252,176,60,1.00)"],
                stroke: [1,"rgb(128, 128, 128)","none"]
            },
            {
                id: 'total_seats_mi_vert',
                type: 'rect',
                rect: ['340px', '259px','3px','522px','auto', 'auto'],
                fill: ["rgba(252,176,60,1)"],
                stroke: [1,"rgb(128, 128, 128)","none"]
            },
            {
                id: 'in_state_enrollment_mi_horizontal',
                type: 'rect',
                rect: ['250px', '837px','244px','3px','auto', 'auto'],
                fill: ["rgba(111,176,127,1.00)"],
                stroke: [1,"rgb(128, 128, 128)","none"]
            },
            {
                id: 'in_state_enrollment_mi_vert',
                type: 'rect',
                rect: ['248px', '462px','3px','378px','auto', 'auto'],
                fill: ["rgba(111,176,127,1)"],
                stroke: [1,"rgb(128, 128, 128)","none"]
            },
            {
                id: 'mi_total_seats_text',
                type: 'text',
                rect: ['307px', '195px','auto','auto','auto', 'auto'],
                text: "826",
                align: "left",
                font: ['open-sans, sans-serif', 40, "rgba(255,255,255,1.00)", "100", "none", "normal"]
            },
            {
                id: 'mi_total_enrollment_text',
                type: 'text',
                rect: ['215px', '391px','auto','auto','auto', 'auto'],
                text: "595",
                align: "left",
                font: ['open-sans, sans-serif', 40, "rgba(255,255,255,1)", "100", "none", "normal"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['668px', '232px','auto','auto','auto', 'auto'],
                text: "WASHINGTON",
                align: "left",
                font: ['open-sans, sans-serif', 30, "rgba(42,48,51,1.00)", "100", "none", "normal"]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['445px', '232px','auto','auto','auto', 'auto'],
                text: "MICHIGAN",
                align: "left",
                font: ['open-sans, sans-serif', 30, "rgba(42,48,51,1)", "100", "none", "normal"]
            },
            {
                id: 'Text3',
                type: 'text',
                rect: ['622px', '228px','auto','auto','auto', 'auto'],
                text: "|",
                align: "left",
                font: ['open-sans, sans-serif', 30, "rgba(42,48,51,1)", "100", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_wa_sq_text}": [
                ["style", "left", '767px'],
                ["style", "top", '574px']
            ],
            "${_top_left_pop}": [
                ["color", "background-color", 'rgba(249,249,249,1.00)'],
                ["style", "top", '470px'],
                ["style", "left", '470px'],
                ["style", "border-style", 'solid'],
                ["style", "height", '70px'],
                ["color", "border-color", 'rgba(128,128,128,1.00)'],
                ["style", "border-width", '1px'],
                ["style", "width", '70px']
            ],
            "${_bottom_left_gsp}": [
                ["color", "background-color", 'rgba(249,249,249,1.00)'],
                ["style", "top", '630px'],
                ["style", "left", '490px'],
                ["style", "border-style", 'solid'],
                ["style", "height", '70px'],
                ["color", "border-color", 'rgba(128,128,128,1.00)'],
                ["style", "border-width", '1px'],
                ["style", "width", '70px']
            ],
            "${_wa_total_enrollment}": [
                ["color", "background-color", 'rgba(111,176,127,1.00)'],
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
            "${_in_state_enrollment_mi_vert}": [
                ["style", "height", '0px'],
                ["style", "left", '248px'],
                ["style", "top", '841px']
            ],
            "${_in_state_enrollment_wa_vert}": [
                ["style", "top", '839px'],
                ["style", "left", '1013px'],
                ["style", "height", '0px']
            ],
            "${_wa_total_enrollment_container}": [
                ["style", "top", '657px'],
                ["style", "left", '970px'],
                ["style", "clip", [0,40,90,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_total_seats_mi_vert}": [
                ["style", "height", '0px'],
                ["style", "top", '779px'],
                ["style", "left", '340px'],
                ["style", "width", '3px']
            ],
            "${_total_seats_wa_vert}": [
                ["style", "height", '0px'],
                ["style", "top", '780px']
            ],
            "${_mi_sq_text}": [
                ["style", "left", '437px'],
                ["style", "top", '574px']
            ],
            "${_mi_total_enrollment_text}": [
                ["style", "top", '391px'],
                ["color", "color", 'rgba(255,255,255,0.00)'],
                ["style", "left", '216px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_mid_right_sq}": [
                ["color", "background-color", 'rgba(249,249,249,1.00)'],
                ["style", "top", '550px'],
                ["style", "left", '760px'],
                ["style", "border-style", 'solid'],
                ["style", "height", '70px'],
                ["color", "border-color", 'rgba(128,128,128,1.00)'],
                ["style", "border-width", '1px'],
                ["style", "width", '70px']
            ],
            "${_wa}": [
                ["style", "top", '288px'],
                ["style", "height", '203px'],
                ["style", "left", '691px'],
                ["style", "width", '316px']
            ],
            "${_mi_total_seats_container}": [
                ["style", "top", '111px'],
                ["style", "left", '297px'],
                ["style", "clip", [0,40,90,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_in_state_enrollment_text}": [
                ["style", "top", '816px'],
                ["style", "left", '503px'],
                ["color", "color", 'rgba(111,176,127,1.00)']
            ],
            "${_mid_left_sq}": [
                ["color", "background-color", 'rgba(249,249,249,1.00)'],
                ["style", "top", '550px'],
                ["style", "border-width", '1px'],
                ["color", "border-color", 'rgba(128,128,128,1.00)'],
                ["style", "height", '70px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '430px'],
                ["style", "width", '70px']
            ],
            "${_mi}": [
                ["style", "top", '244px'],
                ["style", "height", '459px'],
                ["style", "left", '130px'],
                ["style", "width", '459px']
            ],
            "${_mi_total_enrollment}": [
                ["color", "background-color", 'rgba(111,176,127,1.00)'],
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
            "${_in_state_enrollment_wa_horizontal}": [
                ["style", "top", '838px'],
                ["style", "height", '3px'],
                ["color", "background-color", 'rgba(111,176,127,1.00)'],
                ["style", "left", '772px'],
                ["style", "width", '0px']
            ],
            "${_Text3}": [
                ["style", "left", '622px'],
                ["style", "top", '228px']
            ],
            "${_wa_total_enrollment_text}": [
                ["style", "top", '675px'],
                ["style", "left", '978px'],
                ["color", "color", 'rgba(255,255,255,0.00)']
            ],
            "${_Text2}": [
                ["style", "left", '445px'],
                ["style", "top", '232px']
            ],
            "${_Text}": [
                ["color", "color", 'rgba(42,48,51,1.00)'],
                ["style", "top", '232px'],
                ["style", "left", '668px'],
                ["style", "font-size", '30px']
            ],
            "${_wa_total_seats_container}": [
                ["style", "top", '552px'],
                ["style", "left", '875px'],
                ["style", "clip", [0,40,90,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_bottom_right_gsp}": [
                ["color", "background-color", 'rgba(249,249,249,1.00)'],
                ["style", "top", '630px'],
                ["style", "border-width", '1px'],
                ["color", "border-color", 'rgba(128,128,128,1.00)'],
                ["style", "height", '70px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '700px'],
                ["style", "width", '70px']
            ],
            "${_wa_total_seats}": [
                ["color", "background-color", 'rgba(111,176,127,1.00)'],
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
            "${_mi_total_seats_text}": [
                ["style", "top", '128px'],
                ["style", "font-weight", '100'],
                ["color", "color", 'rgba(255,255,255,0.00)'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "left", '307px'],
                ["style", "font-size", '40px']
            ],
            "${_total_seats_wa_horizontal}": [
                ["color", "background-color", 'rgba(252,176,60,1.00)'],
                ["style", "height", '3px'],
                ["style", "top", '779px'],
                ["style", "left", '713px'],
                ["style", "width", '0px']
            ],
            "${_mi_total_enrollment_container}": [
                ["style", "clip", [0,40,90,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Stage_graph}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '1188px'],
                ["style", "height", '909px'],
                ["style", "overflow", 'hidden']
            ],
            "${_gsp_line}": [
                ["style", "top", '665px'],
                ["color", "background-color", 'rgba(221,221,221,1.00)'],
                ["color", "border-color", 'rgba(221,221,221,1.00)'],
                ["style", "left", '562px'],
                ["style", "width", '136px']
            ],
            "${_wa_total_seats_text}": [
                ["style", "top", '569px'],
                ["style", "left", '885px'],
                ["color", "color", 'rgba(255,255,255,0.00)']
            ],
            "${_wa_gsp_text}": [
                ["style", "left", '713px'],
                ["style", "top", '654px']
            ],
            "${_gsp_text}": [
                ["color", "color", 'rgba(42,48,51,1.00)'],
                ["style", "top", '630px'],
                ["style", "left", '619px'],
                ["style", "font-size", '20px']
            ],
            "${_wa_pop_text}": [
                ["style", "top", '494px'],
                ["style", "left", '727px']
            ],
            "${_total_seats_text}": [
                ["color", "color", 'rgba(252,176,60,1.00)'],
                ["style", "top", '758px'],
                ["style", "left", '559px'],
                ["style", "font-size", '30px']
            ],
            "${_sq_line}": [
                ["style", "top", '585px'],
                ["color", "background-color", 'rgba(180,180,180,1)'],
                ["color", "border-color", 'rgba(221,221,221,1.00)'],
                ["style", "left", '502px'],
                ["style", "width", '256px']
            ],
            "${_pop_text}": [
                ["color", "color", 'rgba(42,48,51,1.00)'],
                ["style", "top", '470px'],
                ["style", "left", '597px'],
                ["style", "font-size", '20px']
            ],
            "${_sq_miles_text}": [
                ["style", "top", '550px'],
                ["color", "color", 'rgba(42,48,51,1.00)'],
                ["style", "left", '601px'],
                ["style", "font-size", '20px']
            ],
            "${_mi_pop_text}": [
                ["style", "top", '495px'],
                ["color", "color", 'rgba(128,128,128,1.00)'],
                ["style", "font-family", 'open-sans-condensed, sans-serif'],
                ["style", "left", '477px'],
                ["style", "font-size", '17px']
            ],
            "${_in_state_enrollment_mi_horizontal}": [
                ["style", "top", '838px'],
                ["color", "background-color", 'rgba(111,176,127,1.00)'],
                ["style", "left", '494px'],
                ["style", "width", '0px']
            ],
            "${_pop_line}": [
                ["color", "background-color", 'rgba(180,180,180,1.00)'],
                ["style", "top", '505px'],
                ["color", "border-color", 'rgba(221,221,221,1.00)'],
                ["style", "left", '542px'],
                ["style", "width", '176px']
            ],
            "${_top_right_pop}": [
                ["color", "background-color", 'rgba(249,249,249,1.00)'],
                ["style", "top", '470px'],
                ["style", "border-width", '1px'],
                ["color", "border-color", 'rgba(128,128,128,1.00)'],
                ["style", "height", '70px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '720px'],
                ["style", "width", '70px']
            ],
            "${_mi_gsp_text}": [
                ["style", "left", '503px'],
                ["style", "top", '654px']
            ],
            "${_total_seats_mi_horizontal}": [
                ["color", "background-color", 'rgba(252,176,60,1.00)'],
                ["style", "height", '3px'],
                ["style", "left", '549px'],
                ["style", "width", '0px']
            ],
            "${_mi_total_seats}": [
                ["color", "background-color", 'rgba(111,176,127,1.00)'],
                ["style", "bottom", '0px'],
                ["style", "border-style", 'none'],
                ["style", "left", 'auto'],
                ["style", "width", '90px'],
                ["style", "top", 'auto'],
                ["style", "height", '90px'],
                ["style", "right", '0px'],
                ["style", "clip", [0,90,48,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "rotateZ", '90deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1948,
            autoPlay: true,
            timeline: [
                { id: "eid178", tween: [ "color", "${_wa_total_enrollment_text}", "color", 'rgba(255,255,255,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0.00)'}], position: 0, duration: 1250 },
                { id: "eid171", tween: [ "style", "${_wa_total_enrollment_container}", "clip", [0,90,90,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,40,90,0]}], position: 1000, duration: 250, easing: "easeInQuint" },
                { id: "eid170", tween: [ "color", "${_wa_total_seats_text}", "color", 'rgba(255,255,255,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0.00)'}], position: 0, duration: 1250 },
                { id: "eid140", tween: [ "style", "${_mi_total_enrollment_container}", "clip", [0,90,90,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,40,90,0]}], position: 1698, duration: 250, easing: "easeInQuint" },
                { id: "eid249", tween: [ "style", "${_mi_total_seats_text}", "top", '128px', { fromValue: '128px'}], position: 1948, duration: 0, easing: "easeInQuint" },
                { id: "eid80", tween: [ "style", "${_in_state_enrollment_mi_vert}", "height", '378px', { fromValue: '0px'}], position: 500, duration: 1198 },
                { id: "eid176", tween: [ "style", "${_wa_total_enrollment_container}", "top", '657px', { fromValue: '657px'}], position: 1250, duration: 0 },
                { id: "eid31", tween: [ "style", "${_total_seats_mi_vert}", "top", '201px', { fromValue: '779px'}], position: 500, duration: 1198 },
                { id: "eid156", tween: [ "transform", "${_mi_total_seats}", "rotateZ", '0deg', { fromValue: '90deg'}], position: 1698, duration: 250 },
                { id: "eid25", tween: [ "style", "${_total_seats_mi_horizontal}", "width", '209px', { fromValue: '0px'}], position: 0, duration: 500 },
                { id: "eid174", tween: [ "transform", "${_wa_total_enrollment}", "rotateZ", '0deg', { fromValue: '90deg'}], position: 1000, duration: 250 },
                { id: "eid108", tween: [ "color", "${_mi_total_enrollment}", "background-color", 'rgba(111,176,127,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(111,176,127,1.00)'}], position: 1698, duration: 250 },
                { id: "eid160", tween: [ "color", "${_mi_total_seats_text}", "color", 'rgba(255,255,255,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0.00)'}], position: 0, duration: 1948 },
                { id: "eid164", tween: [ "color", "${_wa_total_seats}", "background-color", 'rgba(252,176,60,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(111,176,127,1.00)'}], position: 1000, duration: 250 },
                { id: "eid90", tween: [ "style", "${_total_seats_wa_vert}", "height", '137px', { fromValue: '0px'}], position: 500, duration: 500 },
                { id: "eid153", tween: [ "style", "${_mi_total_seats_container}", "clip", [0,90,90,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,40,90,0]}], position: 1698, duration: 250, easing: "easeInQuint" },
                { id: "eid94", tween: [ "style", "${_in_state_enrollment_wa_vert}", "height", '90px', { fromValue: '0px'}], position: 500, duration: 500 },
                { id: "eid84", tween: [ "style", "${_in_state_enrollment_wa_horizontal}", "width", '244px', { fromValue: '0px'}], position: 0, duration: 500 },
                { id: "eid29", tween: [ "style", "${_total_seats_mi_vert}", "height", '580px', { fromValue: '0px'}], position: 500, duration: 1198 },
                { id: "eid92", tween: [ "style", "${_total_seats_wa_vert}", "top", '642px', { fromValue: '780px'}], position: 500, duration: 500 },
                { id: "eid152", tween: [ "color", "${_mi_total_enrollment_text}", "color", 'rgba(255,255,255,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0.00)'}], position: 0, duration: 1948, easing: "easeInQuint" },
                { id: "eid172", tween: [ "color", "${_wa_total_enrollment}", "background-color", 'rgba(111,176,127,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(111,176,127,1.00)'}], position: 1000, duration: 250 },
                { id: "eid23", tween: [ "style", "${_total_seats_mi_horizontal}", "left", '340px', { fromValue: '549px'}], position: 0, duration: 500 },
                { id: "eid165", tween: [ "style", "${_wa_total_seats}", "clip", [0,90,90,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,90,48,0]}], position: 1000, duration: 250 },
                { id: "eid175", tween: [ "style", "${_wa_total_enrollment_container}", "left", '970px', { fromValue: '970px'}], position: 1250, duration: 0 },
                { id: "eid163", tween: [ "style", "${_wa_total_seats_container}", "clip", [0,90,90,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,40,90,0]}], position: 1000, duration: 250, easing: "easeInQuint" },
                { id: "eid88", tween: [ "style", "${_total_seats_wa_horizontal}", "width", '209px', { fromValue: '0px'}], position: 0, duration: 500 },
                { id: "eid157", tween: [ "style", "${_mi_total_seats_container}", "left", '297px', { fromValue: '297px'}], position: 1948, duration: 0, easing: "easeInQuint" },
                { id: "eid35", tween: [ "style", "${_in_state_enrollment_mi_horizontal}", "width", '244px', { fromValue: '0px'}], position: 0, duration: 500 },
                { id: "eid86", tween: [ "style", "${_total_seats_wa_horizontal}", "left", '714px', { fromValue: '713px'}], position: 0, duration: 500 },
                { id: "eid166", tween: [ "transform", "${_wa_total_seats}", "rotateZ", '0deg', { fromValue: '90deg'}], position: 1000, duration: 250 },
                { id: "eid167", tween: [ "style", "${_wa_total_seats_container}", "left", '875px', { fromValue: '875px'}], position: 1250, duration: 0, easing: "easeInQuint" },
                { id: "eid168", tween: [ "style", "${_wa_total_seats_container}", "top", '552px', { fromValue: '552px'}], position: 1250, duration: 0, easing: "easeInQuint" },
                { id: "eid82", tween: [ "style", "${_in_state_enrollment_mi_vert}", "top", '463px', { fromValue: '841px'}], position: 500, duration: 1198 },
                { id: "eid154", tween: [ "color", "${_mi_total_seats}", "background-color", 'rgba(252,176,60,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(111,176,127,1.00)'}], position: 1698, duration: 250 },
                { id: "eid173", tween: [ "style", "${_wa_total_enrollment}", "clip", [0,90,90,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,90,48,0]}], position: 1000, duration: 250 },
                { id: "eid155", tween: [ "style", "${_mi_total_seats}", "clip", [0,90,90,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,90,48,0]}], position: 1698, duration: 250 },
                { id: "eid33", tween: [ "style", "${_in_state_enrollment_mi_horizontal}", "left", '250px', { fromValue: '494px'}], position: 0, duration: 500 },
                { id: "eid248", tween: [ "style", "${_mi_total_seats_container}", "top", '111px', { fromValue: '111px'}], position: 1948, duration: 0, easing: "easeInQuint" },
                { id: "eid110", tween: [ "style", "${_mi_total_enrollment}", "clip", [0,90,90,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,90,48,0]}], position: 1698, duration: 250 },
                { id: "eid149", tween: [ "transform", "${_mi_total_enrollment}", "rotateZ", '0deg', { fromValue: '90deg'}], position: 1698, duration: 250 },
                { id: "eid96", tween: [ "style", "${_in_state_enrollment_wa_vert}", "top", '748px', { fromValue: '839px'}], position: 500, duration: 500 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "wa_mi_comparison");
