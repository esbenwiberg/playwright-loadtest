var { tests } = require('transpiler');

module.exports = { loadtest1run };

async function loadtest1run(page) {
    await tests.hasTitle(page);
    await tests.getStarted(page);
};
