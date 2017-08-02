var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user:"root",
    password:'',
    database: 'bamazon_db'
});

connection.connect(function(err){
    createProduct();
});

function createProduct(){
    var query = connection.query(
        'insert into products set ?',
        {
            product_name: 'shake weight',
            department_name: 'fitness',
            price: 19.99,
            stock_quantity: 999
        },
        function(err, res){
            console.log(res.affectRows + 'product inserted');
        }    
    )
}