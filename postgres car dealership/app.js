const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const fs = require('fs')
const knex = require('knex')({

  client: 'postgres',
  connection: {
    host     : '127.0.0.1',
    user     : 'postgres',
    password : 'shosho',
    database : 'cars',
    charset  : 'utf8'
  }
});

const bookshelf = require('bookshelf')(knex);

const Cars = bookshelf.Model.extend({
    tableName: 'cars',
    })
        const newCars = new Cars({
        make: "Ford",
        model: "Taurus",
        year: 2015,
        dealership_id: 2
        })
    // newCars.save()
    // .then(cars => {
    // console.log(cars)
    // })

const Dealership = bookshelf.Model.extend({
    tableName: 'dealerships',
    dealership: function() {
        return this.hasMany(Car)
    }
})

const Car = bookshelf.Model.extend({
    tableName: 'cars',
    car: function() {
        return this.belongsTo(Dealership)
    }
})

//  get all cars


// Car
//     .fetchAll()
//     .then(car => {
//     console.log(car.models.map(car => car.attributes))
//  })



//get cars with a filter (e.g., year is 2017)
// Car
//     .where({ year: 2017 })
//     .fetch()
//     .then(car => {
//     console.log(car.attributes)
// })


// //get a single car with id
// Car
//     .where({id: 2})
//     .fetch()
//     .then(car => {
//         console.log(car.attributes)
//  })

// //update a single car with new attribute values

// const attributesToUpdate = {
//     model:'911 Carrera 4 GTS Cabriolet'
// }
// new Car({id: 2})
//     .save(attributesToUpdate,{patch:true})
//     .then(car => {
//     console.log(car.attributes)
//     })

//get dealership of a single car

// Car.where({id:1})
//     .fetch({withRelated: 'dealership'})
//     .then(car => {
//     console.log(car.related('dealership').attributes)
//     })

//get all cars for a single dealership

// Dealer.where({id: 1})
// 	.fetch({withRelated: 'cars'})
// 	.then(dealer => {
// 	const cars = dealer.related('cars')
// 	console.log(cars.models.map(cars => cars.attributes))
// 	})

app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(8080, () => {
    console.log('Server Started on http://localhost:8080');
    console.log('Press CTRL + C to stop server');
});

app.get('/', function (req, res) {
    res.send('Homepage')
});

// CARS


//GET: Retrieve all car objects
app.get('/cars', (req, res) => {
        Car
        .fetchAll()
        .then(cars => res.send(cars))
});

//GET: Retrieve a single car object using id
app.get('/cars/:id', (req, res) => {
        Car
        .where({id: req.params.id})
        .fetch()
        .then(cars => res.send(cars.attributes))
         //console.log (req.params.id)
});

//POST: Save a single car object
app.post('/cars',(req, res)=> {
    let newCar = new Car({
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        dealership_id: req.body.dealership_id,
    })
    newCar.save().then(cars=> {
    return res.send(cars.attributes)
})
});

//PUT: Change attributes for a single car object
app.put('/cars',(req,res)=> {
new Car({id:req.body.id })
   .save({year:req.body.year})
   .then(cars=> {
    return res.send(cars.attributes)
})
});

//DELETE: Delete single car object
app.delete('/cars',(req,res)=> {
    new Car({id:req.body.id })
    .destroy()
    .then(cars=> {
    return res.send(cars.attributes)
})
})


//Dealerships

//GET: Retrieve all dealership objects
app.get('/dealerships',(req,res)=> {
Dealership.fetchAll().then(dealerships=> {
    return res.send(dealerships.models.map(dealership=>dealership.attributes))
})
})

//GET: Retrieve a single dealership object using id
app.get('/dealerships/:id',(req,res)=> {

 Dealership.where({id:req.params.id})
.fetch().then(
    dealership => {
    return res.send(dealership.attributes)
})
})

// POST: Save a single dealership object
app.post('/dealerships',(req,res)=> {
    let newDealership = new Dealership({
        make: req.body.make,
        city: req.body.city,
        province: req.body.province,
        street: req.body.street,
        postal_code: req.body.postal_code,
    })
    newDealership.save().then(dealership=> {
    return res.send(dealership.attributes)
})
})

//PUT: Change attributes for a single dealership object
app.put('/dealerships',(req,res)=> {
    new Dealership({id:req.body.id })
   .save({city:req.body.city})
   .then(dealership=> {
    return res.send(dealership.attributes)
})
})

//DELETE: Delete single dealership object
app.delete('/dealerships',(req,res)=> {
    new Dealership({id:req.body.id })
    .destroy()
    .then(dealership=> {
    return res.send(dealership.attributes)
})
})   
