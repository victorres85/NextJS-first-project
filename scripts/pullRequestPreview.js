// import { execSync } from 'child_process';
const { execSync } = require('child_process');

console.log("[DEPLOY_PREVIEW]: STARTED");
const command = "yarn deploy:staging";
const output = execSync(command, { encoding: 'utf8' })
const lines = output.split('\n');
lines.forEach(line => console.log('line: ', line));
const DEPLOY_PREVIEW_URL = lines[lines.length - 2];
const DEPLOY_PROD_URL = lines[lines.length - 1];

console.log(output);
