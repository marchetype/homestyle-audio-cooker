//requiring fluent-ffmpeg
const ffmpeg = require('fluent-ffmpeg');
//command will be used to interact with API
const command = ffmpeg();
const inputPath = './fileInput';
const outputPath = './fileOutput';

command.input(inputPath);