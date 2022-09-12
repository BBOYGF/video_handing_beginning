import * as mo from 'movy'

const text = mo.addText("观科技", {x: 0, y: 0, fontSize: 1.5, font: 'gdh', color: "yellow"});
text.reveal();
text.moveTo({x: 0, y: 5, t: 1, duration: 5, ease: "elastic"});
let preX, preY, preZ = 0;
for (let i = 0; i < 100; i = i + 0.1) {
    if (i < 5) {
        let line = mo.addLine({from: [preX, preY], to: [i, Math.sin(i)], lineWidth: 0.05});
        line.fadeIn({
            t: "<0.05",
        });
    } else {
        let line = mo.addLine({from: [preX, preY, preZ], to: [i, Math.sin(i), Math.cos(i)], lineWidth: 0.05});
        line.fadeIn({
            t: "<0.05",
        });
    }

    preX = i;
    preY = Math.sin(i);
    preZ = Math.cos(i);
}

mo.cameraMoveTo({x: 0, y: 0, z: 0,t: 5 ,duration:2})
mo.cameraMoveTo({ ry: -0.5 * Math.PI, t: 5 ,duration:2})
mo.cameraMoveTo({ x: 20, y: 0, z: 0,t: 7 ,duration:10})
mo.run();
