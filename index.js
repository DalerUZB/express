import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from 'url'

const __fileName = fileURLToPath(import.meta.url)
const __dirName = dirname(__fileName)
const app = express()
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirName, 'files', 'index.html'))
})

app.get('/about', (req, res) => {
    res.send('<h1>about</h1>')
})

app.listen(1000, () => {
    console.log('server started');
})