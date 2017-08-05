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
            console.log(`ID is: ${row.item_id}, The product is: ${row.product_name}, Price: $${row.price}`);
        })
        inquirer.prompt([
          {
            'name': 'ID',
            'message': 'What is the ID of the product you would like to purchase?'
        },
        {
            'name': 'units',
            'message': 'How many units would you like to buy?'
        }
    ]).then(function(answer){
          var chosenItem;
          for(var i = 0; i< data.length; i++){
              if(data[i].item.id === answer.ID){
                  chosenItem = data[i];
              }
          }
            if(chosenItem.stock_quantity > answer.units){
                // var newStock = chosenItem.stock_quantity - answer.units;
                connection.query(
                function(error){
                    if (error) throw err;
                    console.log("purchased successfully");
                }
                )
            }
        
    })
        
    })
        
}; 


