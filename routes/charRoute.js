const express = require('express')
const router = express.Router()
const {getCharacters, getCharacterByName, getCharacterById} = require('../controllers/charController')

router.get('/', getCharacters)
router.get('/name', getCharacterByName)
router.get('/:id', getCharacterById)


module.exports = router