import mysql from 'mysql';

const con = mysql.createConnection({
  host: 'database-2-instance-1.chv598kqemzh.eu-west-1.rds.amazonaws.com',
  user: 'admin',
  password: '321123ETz$',
  port: 3306
});

con.connect(function (err) {
  if (err) throw err;
  console.log('Connected!');
  con.end();
});
