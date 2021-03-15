const readline = require("readline");
const fs = require("fs");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let content;

rl.question("What is doc title? ", function (title) {
    rl.question("How many functions does it have? ", function (steps) {
        content = `
            ### ${title}

            Write documentation description here 

            ### Methods
        `
        for (let i = 0; i < steps; i++) {
            content += `
            #### \`method(options, callback)\`
            Method description here
              * \`options\`: object
                * \`optionName\`: optionType (optional), option description
              * \`callback(err, data)\`: callback function after the end user clicked on button. Data is always undefined since there is only one button that can be clicked. 
            `
        }
        rl.close();
    });
});

rl.on("close", function () {
    console.log("\nBYE BYE !!!");
    fs.writeFile('doc.md', content, () => {
        console.log("DONE!")
        process.exit(0);
    })
});