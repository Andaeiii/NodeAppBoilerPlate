module.exports.initPage = (req, res) => {
    let obj = { 'welcome': 'API HOME' };
    res.send(obj);
}