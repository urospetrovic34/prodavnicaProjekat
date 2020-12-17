const express = require('express')
const router = express.Router()

const Car = require('../../models/Car')

router.get('/',(req,res)=>{
    Car.find().then(cars => res.json(cars))
})

//PRILICNO BESKORISNA FUNKCIONALNOST
/*router.get('/:id',(req,res)=>{
    Car.findById(req.params.id).then(car => res.json(car))
})*/

router.post('/',(req,res)=>{
    const newCar = new Car({
        marka:req.body.marka,
        model:req.body.model,
        godiste:req.body.godiste,
        kilometraza:req.body.kilometraza,
        karoserija:req.body.karoserija,
        gorivo:req.body.gorivo,
        kubikaza:req.body.kubikaza,
        snagaMotora:req.body.snagaMotora,
        cena:req.body.cena,
        slika:req.body.slika
    })
    //.save() tako se insertuju podaci u kolekciju, nije bitno kako ih prepoznaje 
    newCar.save().then(car => res.json(car))
})

router.delete('/:id',(req,res)=>{
    Car.findById(req.params.id)
    .then(car => car.remove().then(()=>res.json({success:true})))
    .catch(error => res.status(404).json({success:false}))
})

module.exports = router