const express = require('express')
const app = express()

// liste des étudiants
const students = []

app.get('/', (req, res) => {
  res.json(students)
})

// 1 étudiant
app.get('/:name', (req, res) => {
  const {name} = req.params
  const student = student
})

app.post('/', (req, res) => {
  const student = {
    name: req.body.name,
    id: students.length + 1
  }

  // rechercher si le nom est déjà dans le tableau
  const existingStudent = students.find(student => {
    return student.name === req.body.name
  })

  if(!existingStudent) {
    students.push(student)
    res.status(201).json(student)
  }else {
    res.status(409).json('student not found')
  }

  // students.push(student)

  // res.json(student)
})

module.exports = app