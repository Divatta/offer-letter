
const pdfRoutes = require('express').Router()
const { createPdf, fetchPdf, sendPdf } = require('./pdfcontroller')

pdfRoutes.post('/createpdf', createPdf) //to generate pdf

pdfRoutes.get('/fetchpdf', fetchPdf) //to fetch the generated pdf

pdfRoutes.post('/sendpdf', sendPdf) //send pdf to mail



// pdfRoutes.post('/create', create)

module.exports = pdfRoutes

