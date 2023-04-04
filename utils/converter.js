//requiring fluent-ffmpeg
const ffmpeg = require('fluent-ffmpeg');
const path = require('path');

const fileEl = indexFile.document.getElementById('file-input');
//command will be used to interact with API
const outputPath = './utils/fileOutput/outputFile.mp3';
let inputPath = `${fileEl}`;
console.log
console.log(inputPath);

ffmpeg(inputPath)
.output(outputPath)
.audioCodec('libmp3lame')
.on('end', function() {
    console.log('finished processing');
})
.run();


module.exports = convert;