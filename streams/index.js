const fs = require("fs");

const readStream = fs.createReadStream("./doc/blog.txt", {
    encoding: "utf-8",
});
const writeStream = fs.createWriteStream("./doc/blog2.txt");

// readStream.on("data", (chunk) => {
//     console.log("------------------------");
//     console.log(chunk);

//     writeStream.write("\n Hello-------\n");
//     writeStream.write(chunk);
// });

// ----------Error handling
// readStream.on("error", (err) => {
//     console.error("Error reading file:", err.message);
// });

//--------------------pipeline

readStream.pipe(writeStream);