import type { Project } from "../types";
export const projects: Project[] = [

{
title:"Smart EV Charger Monitoring System",

category:"Embedded IoT",

status:"ONLINE",

type:"embedded",

description:
"IoT enabled EV charger monitoring and protection system using ESP32, Firebase and real-time monitoring dashboard.",

tech:[
"ESP32",
"Firebase",
"IoT",
"React"
],

metrics:[

{
label:"MCU",
value:"ESP32"
},

{
label:"Cloud",
value:"Firebase"
},

{
label:"Protocol",
value:"WiFi"
},

{
label:"Monitoring",
value:"Real Time"
}

],

github:"https://github.com/Samarth2624/Smart-EV-Charger-Monitoring-System"

},

{

title:"Box Lift Automation",

category:"Industrial Automation",

status:"ACTIVE",

type:"automation",

description:
"PLC based automated conveyor and box lift system developed using B&R Automation Studio with Digital Twin simulation.",

tech:[
"PLC",
"HMI",
"B&R",
"Automation Studio"
],

metrics:[

{
label:"PLC",
value:"B&R X20"
},

{
label:"Simulation",
value:"Digital Twin"
},

{
label:"HMI",
value:"Mapp View"
},

{
label:"Runtime",
value:"Automation Studio"
}

],

github:"https://github.com/Samarth2624/Box-Lift-Automation-B-R-"

},

{

title:"Smart Glove",

category:"AI Embedded",

status:"ONLINE",

type:"embedded",

description:
"ESP32 powered gesture recognition glove using flex sensors for sign language communication.",

tech:[
"ESP32",
"Flex Sensors",
"Bluetooth",
"AI"
],

metrics:[

{
label:"Controller",
value:"ESP32"
},

{
label:"Recognition",
value:"Hand Gesture"
},

{
label:"Sensors",
value:"Flex Sensors"
},

{
label:"Communication",
value:"Bluetooth"
}

],

github:"#"

},

{

title:"ShadowFox Data Science",

category:"Artificial Intelligence",

status:"COMPLETE",

type:"ai",

description:
"Collection of machine learning, data analysis and visualization projects completed during the ShadowFox internship.",

tech:[
"Python",
"Pandas",
"NumPy",
"Matplotlib"
],

metrics:[

{
label:"Language",
value:"Python"
},

{
label:"Libraries",
value:"Pandas"
},

{
label:"Visualization",
value:"Matplotlib"
},

{
label:"Models",
value:"Machine Learning"
}

],

github:"https://github.com/Samarth2624/ShadowFox"

}

];