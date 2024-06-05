// import { execSync } from 'child_process';
const { execSync } = require('child_process');

console.log("[DEPLOY_PREVIEW]: STARTED");
const command = "yarn deploy:staging";
const output = execSync(command, { encoding: 'utf8' })

console.log(output);
