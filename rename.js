const fs = require('fs')

fs.readdir('./heads', (err, data) => {
	data.forEach((filename, idx) => {
		fs.rename(`./heads/${filename}`, `./heads/${idx}.png`, (err1, data1) => {
			console.log(err1, data1)
		})
	})
})