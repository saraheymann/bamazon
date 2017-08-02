var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user:"root",
    password:"",
    database: 'bamazon_db'
});

connection.connect(function(err){
    selectData();
});

function selectData() {
    var query = "SELECT item_id, product_name, price FROM products";
    connection.query(query, function (err, data) {
        if (err) {
            throw err;
        }
        data.forEach(function (row) {
            console.log(`ID is: ${row.item_id}. Name is: ${row.product_name} Price: ${row.price}`);
        });
    });    
}
