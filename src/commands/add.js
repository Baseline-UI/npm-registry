const fs = require('fs-extra');
const path = require('path');

module.exports = async function add(component) {
    const componentDir = path.join('src', 'components', 'baseline', component);
    const componentFile = path.join(componentDir, `${component}.tsx`);

    // Check if component already exists
    if (await fs.pathExists(componentFile)) {
        console.log('Component already added/exists.');
        return;
    }

    // Create component directory
    await fs.ensureDir(componentDir);

    // Read template file
    const templatePath = path.join(
        __dirname,
        '..',
        'templates',
        `${component}`,
        `${component}.tsx`
    );
    let templateContent;

    try {
        templateContent = await fs.readFile(templatePath, 'utf-8');
    } catch (error) {
        templateContent = getDefaultTemplate(component);
    }

    // Write component file
    await fs.writeFile(componentFile, templateContent);

    console.log(`${component} component added successfully!`);
};

function getDefaultTemplate(component) {
    return `
import React from 'react';

interface ${component}Props {
  // Add props here
}

export const ${component}: React.FC<${component}Props> = (props) => {
  return (
    <div className="baseline-${component.toLowerCase()}">
      {/* Add your ${component} implementation here */}
    </div>
  );
};
`;
}
