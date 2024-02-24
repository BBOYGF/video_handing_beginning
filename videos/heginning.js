import * as mo from 'movy'
//movy .\videos\heginning.js
let image = mo.addImage("波士顿动力机器人.jpg", {x: 0, y: 0, scale: 10, t: 0, bloomEnabled: false});
image.show({t: 0, duration: 1})
// image.fadeIn({t: 0, duration: 1})
image.show({t: 1, duration: -1})
image.bloomEnabled = false
var color = "green";
const textTitle = mo.addText("波士顿动力", {
    x: 0,
    y: 0,
    z: 3,
    fontSize: 1,
    font: 'gdh',
    color: color,
    bloomEnabled: false
});
textTitle.show({t: 0, duration: 1})
textTitle.show({t: 1, duration: -1})
const textTitle2 = mo.addText("创始人", {
    x: 0,
    y: -1,
    z: 3,
    fontSize: 1,
    font: 'gdh',
    color: color,
    bloomEnabled: false
});
textTitle2.show({t: 0, duration: 1})
textTitle2.show({t: 1, duration: -1})

// const text = mo.addText("科技观", {x: 0, y: 4, fontSize: 1, font: 'gdh', color: "white"});
//
// text.show({t: 1, duration: 1})
// text.moveTo({x: 0, y: 2, t: 1, duration: 1, ease: "elastic"});
// text.show({t: 1.5, duration: -1})
//
// text.show({t: 2, duration: 2})

let circle1 = mo.addCircle({x: 0, y: 10, scale: 0.1, t: 1});
circle1.moveTo({x: 0, y: 0, t: 1, duration: 0.5, ease: "bounce.out"})


// mo.enableBloom();
mo.addGlitch({t: 1.5})
let preX, preY, preZ = 0;
for (let i = 0; i < 50; i = i + 0.12) {
    if (i < 5) {
        let line = mo.addLine({from: [preX, preY], to: [i, Math.sin(i)], lineWidth: 0.05, t: 1.5});
        line.fadeIn({
            t: "<0.01",
        });
        line.show({t: "<0.01", duration: 1})
        // line.show({t:2,duration: -1})
    } else {
        let line = mo.addLine({from: [preX, preY, preZ], to: [i, Math.sin(i), Math.cos(i)], lineWidth: 0.05, t: 1.5});
        line.fadeIn({
            t: "<0.005",
        });
    }
    preX = i;
    preY = Math.sin(i);
    preZ = Math.cos(i);
}

mo.cameraMoveTo({x: 3.3, y: 0, z: 0, t: 2.2, duration: 1})
mo.cameraMoveTo({ry: 0.6 * Math.PI, t: 2.2, duration: 1})
mo.cameraMoveTo({x: 30, y: 0, z: 0, t: 2.5, duration: 1, ease: "circ.inOut"})
// let circle = mo.addCircle({x: 60, y: 0, z: 0, ry: 0.5 * Math.PI, t: 0});
// circle.moveTo({x: 30, y: 0, z: 0, t: 2.5, duration: 2, ease: "power4.inOut"})
// let text1 = mo.addText("日本房产投资", {x: 25, y: 2, z: 0, ry: -0.5 * Math.PI, color: "white"});
// text1.show({t: 2, duration: 2.5})
// text1.show({t: 4, duration: -1})
// let text2 = mo.addText("经营管理签证", {x: 40, y: -2, z: 0, ry: -0.5 * Math.PI, color: "white"});
// text2.show({t: 2, duration: 1})
// text2.fadeIn({t: 3, duration: 1})
// text2.show({t: 4, duration: -1})
mo.run();
