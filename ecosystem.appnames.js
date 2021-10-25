const appNames = {
    mainApp: 'todo-list',
    cache: 'todo-list-cache'
};

const getAppName = () => appNames.mainApp
const getCacheAppName = () => appNames.cache

module.exports = {
    getAppName,
    getCacheAppName
};