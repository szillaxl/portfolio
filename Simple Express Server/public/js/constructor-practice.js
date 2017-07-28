// Write me a constructor for mugs.
    // The object that this constructor makes should have these properties:
    // 1) Size (string)
    // 2) Colour (string)
    // 3) Customer (string)
    // 4 CustomerId (number)
console.log('test');

function Mugs(size, colour, customer, customerid) {  
        this.size = size;
        this.colour = colour;
        this.customer = customer;   
        this.customerid = customerid;
    };

let MyMug = new Mugs('large', 'red', 'sho', 123456);

console.log(MyMug);


// After you write the constructor, create an instance of a mug.

