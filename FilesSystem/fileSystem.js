const fs = require("fs");

//----------------readFile

// fs.readFile("./doc/text", (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data.toString());
//     }
// });

//---------------writing files

// fs.appendFile("./doc/text", "\n gandu \n", () => {
//     console.log("done");
// });

//-----------mkdir

// if (!fs.existsSync("./assest")) {
//     fs.mkdir("./assest", (err) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("folder created");
//         }
//     });
// } else {
//     fs.rmdir("./assest", (err) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("removed file");
//         }
//     });
// }
// --------------delete file

// if (fs.existsSync("./doc/delete")) {
//     fs.unlink("./doc/delete", (err) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("deleted");
//         }
//     });
// } else {
//     console.log("file doesnt exist");
// }