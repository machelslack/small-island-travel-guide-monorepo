import mysql from 'mysql';

const con = mysql.createConnection({
  host: 'database-2-instance-1.chv598kqemzh.eu-west-1.rds.amazonaws.com',
  user: 'admin',
  password: '321123ETz$',
  port: 3306,
});

con.connect(function (err) {
  if (err) throw err;
  console.log('Connected!');
//    con.query('CREATE DATABASE IF NOT EXISTS small-island-travel-guide;');
//     con.query('USE small-island-travel-guide;');
//     con.query(
//       'CREATE TABLE IF NOT EXISTS locations(location_id int NOT NULL AUTO_INCREMENT, PRIMARY KEY(location_id));',
//       function (error, result, fields) {
//         console.log(result);
//       }
//     );
//     con.query(
//       'CREATE TABLE IF NOT EXISTS hosts(host_id int NOT NULL AUTO_INCREMENT, PRIMARY KEY(host_id)), FOREIGN KEY (location_id) REFERENCES locations(location_id);;',
//       function (error, result, fields) {
//         console.log(result);
//       }
//     );
//     con.query(
//       'CREATE TABLE IF NOT EXISTS listings(listing_id int NOT NULL AUTO_INCREMENT, PRIMARY KEY(listing_id)), FOREIGN KEY (host_id) REFERENCES hosts(host_id);',
//       function (error, result, fields) {
//         console.log(result);
//       }
//     );
//     con.query(
//       'CREATE TABLE IF NOT EXISTS bookings(booking_id int NOT NULL AUTO_INCREMENT, PRIMARY KEY(booking_id)), FOREIGN KEY (listing_id) REFERENCES listings(listing_id),FOREIGN KEY (guest_id) REFERENCES guests(guest_id);',
//       function (error, result, fields) {
//         console.log(result);
//       }
//     );
//     con.query(
//       'CREATE TABLE IF NOT EXISTS amenities(amenity_id int NOT NULL AUTO_INCREMENT, PRIMARY KEY(amenity_id)), FOREIGN KEY (listing_id) REFERENCES listings(listing_id);',
//       function (error, result, fields) {
//         console.log(result);
//       }
//     );
//     con.query(
//       'CREATE TABLE IF NOT EXISTS guests(guest_id int NOT NULL AUTO_INCREMENT, PRIMARY KEY(guest_id));',
//       function (error, result, fields) {
//         console.log(result);
//       }
//     );
  con.end();
});
