const asyncHandler = require('express-async-handler')
const Note = require('../models/noteModel')
const User = require('../models/userModel')
const Ticket = require('../models/ticketModel')

/*
@desc get notes for a ticket
@route GET /api/tickets/:ticketID/notes
@access Private
*/
const getNotes = asyncHandler(async (req, res) => {
    //get user using the id in the JWT
    const user = await User.findById(req.user.id)

    if(!user){
        res.status(401)
        throw new Error('User not found')
    }
    const ticket = await Ticket.findById(req.params.ticketId)

    if(ticket.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('User Un authorized')
    }

    const notes = await Note.find({ticket: req.params.ticketId})

    res.status(200).json(notes)
})

/*
@desc create ticket note
@route POST /api/tickets/:ticketID/notes
@access Private
*/
const addNote = asyncHandler(async (req, res) => {
    //get user using the id in the JWT
    const user = await User.findById(req.user.id)

    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }
    const ticket = await Ticket.findById(req.params.ticketId)

    if (ticket.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User Un authorized')
    }

    const note = await Note.create({
        ticket: req.params.ticketId,
        text: req.body.text,
        isStaff: false,
        user: req.user.id
     })

    res.status(200).json(note)
})


module.exports = {
    getNotes,
    addNote,
}