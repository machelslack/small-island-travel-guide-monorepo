import mysql from 'mysql';
const con = mysql.createConnection({
    host: 'http://small-island-trvael-guide-mysql-database-instance-1.chv598kqemzh.eu-west-1.rds.amazonaws.com',
    user: 'admin',
    password: '321123ETz$',
});
con.connect(function (err) {
    if (err)
        throw err;
    console.log('Connected!');
    con.end();
});
//# sourceMappingURL=config.js.map