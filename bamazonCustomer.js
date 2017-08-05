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
        // data.forEach(function (row) {
        //     console.log(`ID is: ${row.item_id}, The product is: ${row.product_name}, Price: $${row.price}`);
        // })
         for(var i = 0; i < data.length; i++) {
          	console.log("Item ID: " + data[i].item_id + " | Product: " + data[i].product_name + " |  Price: " +  data[i].price + " | Quantity: " + data[i].stock_quantity);
}
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
        //   var chosenItem;
        //   for(var i = 0; i< data.length; i++){
        //       if(data[i].item.id === answer.ID){
        //           chosenItem = data[i];
        //       }
        //   }
        //     if(chosenItem.stock_quantity > answer.units){
        //         // var newStock = chosenItem.stock_quantity - answer.units;
        //             console.log("purchased successfully");
                
                
        //     }
        connection.query('SELECT * FROM  products WHERE item_id=' + answer.ID, function(err,data){
            if (err) throw err;
            if(data[0].stock_quantity - answer.units >= 0){
                console.log("item is in stock");
                console.log("Total cost is: $" + (answer.units * data[0].price));
                connection.query('UPDATE products SET ? WHERE ?', 
                [
                    {
                        stock_quantity: data[0].stock_quantity - answer.units
                    },{
                        item_id: answer.ID
                    }
                    ], function(err, res){
                    if (err) throw err;
                    selectData();
                })
            }else{
                console.log("your item is out of stock");
            }
        })
        
    })
        
    })
        
}; 


