const fs = require('fs-extra');
const path = require('path');

module.exports = async function init() {
	// Create baselineconfig.js
	await fs.writeFile('baseline.config.js', configContent.trim());

	// Create src/components/baseline folder
	await fs.ensureDir(path.join('src', 'components', 'baseline'));

	console.log('BaselineUI initialized successfully!');
};

const configContent = `module.exports = {
  // BaselineUI configuration
};`;
