const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const member = require('../../member');

router.get('/',(req,res) => {
    res.json(member)
})

router.get('/:age', (req,res) => {
    
    //res.json(member)
    //res.send(req.params.age)
    //res.send(member.filter(member => member.age == 21))
    res.json(member.filter(member => member.name.toLowerCase() == req.params.age.toLowerCase()))
})

router.post('/',(req,res) => {
    //res.send(req.body)
    const newMember = {
        id : uuid.v4(),
        name : req.body.name,
        age : req.body.age,
    }

    if(!newMember.name || !newMember.age){
        return res.status(400).json({ mgs : 'Please Enter '})
    }
        member.push(newMember)
        res.json(member)
})

module.exports = router