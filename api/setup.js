const fs = require('fs');
const path = require('path');
const axios = require('axios');

// === НАСТРОЙКИ ===
// Вставьте сюда ссылку на ZIP-архив с OpenCorpora
const DOWNLOAD_URL = 'https://opencorpora.org/files/export/dict/dict.opcorpora.txt.zip';

async function downloadFile(url, outputPath) {
	console.log('📥 Скачивание архива...');
	const response = await axios({
		url,
		method: 'GET',
		responseType: 'stream'
	});

	const writer = fs.createWriteStream(outputPath);
	response.data.pipe(writer);

	return new Promise((resolve, reject) => {
		writer.on('finish', resolve);
		writer.on('error', reject);
	});
}

async function bima(){
	console.log('start')
	downloadFile(DOWNLOAD_URL,'./zipka.zip');
	console.log('end')
}

export default bima;
