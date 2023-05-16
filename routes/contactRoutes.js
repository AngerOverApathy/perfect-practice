const express = require('express')
const router = express.Router()

router.route('/').get((req,res) =>{
    res.status(200).json({ message:'Getting all contacts' })
})

router.route('/').post((req,res) =>{
    res.status(200).json({ message:'Create contacts' })
})

router.route('/').get((req,res) =>{
    res.status(200).json({ message:'Getting all contacts' })
})

router.route('/').get((req,res) =>{
    res.status(200).json({ message:'Getting all contacts' })
})

module.exports = router;