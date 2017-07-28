const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Car = require('./models/cars');
const Dealership = require('./models/dealerships');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/data/db/');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("Connected to db at /data/db/")
});

const seedDealerships = require('./seeds/dealerships');
const seedCars = require('./seeds/cars');
seedDealerships();
seedCars();

app.listen(8080, () => {
    console.log('SERVER RUNNING ON 8080');
})

//get all cars

app.get('/cars', (req,res) => {
	Car.find({})
		.then(cars => {
			res.json(cars);
		})
		.catch(err => {
			console.log(err);
			res.status(400)
				.json({err});
		})
}); 


// GET: Retrieve a single car object using id

app.get('/:id', (req, res) => {
    Car.findById({_id:req.params.id})
        .then(cars => {
            res.json(cars)
    })
   	.catch(err => {
			console.log(err);
			res.status(400)
				.json({err});
		})
});

//POST: Save a single car object

app.post('/edit', (req, res) => {
        let createcar = req.body;
        let newCar = Car({
            make: createcar.make,
            model: createcar.model,
            year: createcar.year,
            dealership_id: createcar.dealership_id
        })
        newCar.save()
            .then(savedCar => {
                res.json(savedCar)
            })
    })


// PUT: Change attributes for a single car object
app.put('/cars/:id', (req, res) => {
    let query = { "_id": req.params.id }
    let info = req.body
        Dealership.find({}, (err, dealership) => {
        let update = {
            make: info.make,
            model: info.model,
            year: info.year,
            dealership_id: info.dealership_id
        }
            Car.findOneAndUpdate(query, update, { new: true, runValidators: true })
            .then(updatedCar => {
                res.json(updatedCar)
            })
            .catch(err => {
                console.log(err)
                res.status(400)
                    .json({ err })
            })
    })
});

//DELETE: Delete single car object

app.delete('/delete_car/:id', (req, res) => {
    Car.findOneAndRemove({ "_id": req.params.id })
        .then(Car => {
            res.json({ deleted: true })
        })
        .catch(err => {
            console.log(err)
            res.status(400)
                .json({ err })
        })
});

// GET: Retrieve all dealership objects

app.get('/dealers', (req, res) => {
    Dealership.find({})
        .then(dealerships => {
            res.json(dealerships)
        })
        .catch(err => {
            console.log(err)
            res.staus(400)
                .json({ err })
        })
});

//GET: Retrieve a single dealership object using id
//FINDBYID

app.get('/dealers/:id', (req, res) => {
    Dealership.findById(req.params.id)
        .then(Dealer => {
            res.json(Dealer)
        })
        .catch(err => {
            console.log(err)
            res.status(400)
                .json({ err })
        })
});

//FIND ONE

app.get('/dealer/:id', (req, res) => {
    Dealership.findOne({ "_id": req.params.id })
        .then(Dealer => {
            res.json(Dealer)
        })
        .catch(err => {
            console.log(err)
            res.status(400)
                .json(err)
        })
});

//POST: Save a single dealership object

app.post('/dealer_obj', (req, res) => {
    let info = req.body
    let newDealer = Dealership({
        name: info.name,
        city: info.city,
        province: info.province,
        postal_code: info.postal_code,
        address: info.address,
        rating: info.rating,

    })
    newDealer.save()
        .then(savedDealer => {
            res.json(savedDealer)
        })
        .catch(err => {
            console.log(err)
            res.status(400)
                .json({ err })
        })
});

//PUT: Change attributes for a single dealership object

app.put('/dealer_change/:id', (req, res) => {
    let query = { "_id": req.params.id }
    let info = req.body
    let update = {
        name: info.name,
        city: info.city,
        province: info.province,
        postal_code: info.postal_code,
        address: info.address,
        rating: info.rating,

    }
    Dealership.findOneAndUpdate(query, update, { new: true, runValidators: true })
        .then(updatedDealer => {
            res.json(updatedDealer)
        })
        .catch(err => {
            console.log(err)
            res.status(400)
                .json({ err })
        })
});

//DELETE: Delete single dealership object

app.delete('/delete_dealer/:id', (req, res) => {
    Dealership.findOneAndRemove({ "_id": req.params.id })
        .then(Dealership => {
            res.json({ deleted: true })
        })
        .catch(err => {
            console.log(err)
            res.status(400)
                .json({ err })
        })
});



