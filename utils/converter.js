//requiring fluent-ffmpeg
const ffmpeg = require('fluent-ffmpeg');
//command will be used to interact with API
const command = ffmpeg();
const outputPath = './fileOutput';
let inputFile;

command.input(inputFile);