const fs = require('fs');
const path = require('path');
const folderName = process.argv[2] || 'Project'

// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log('In the callback');
//     if (err) throw err;
// });

try {
    fs.mkdirSync(folderName)
    fs.writeFile(path.join(__dirname, `${folderName}/index.html`), '', console.log);
    fs.writeFile(path.join(__dirname, `${folderName}/app.js`), '', console.log);
    fs.writeFile(path.join(__dirname, `${folderName}/app.css`), '', console.log);
} catch (e) {
    console.log("SOMETHING WENT WRONG!!");
    console.log(e);
}
