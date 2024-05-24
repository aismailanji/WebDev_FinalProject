import express from 'express';
import axios from 'axios';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import XIVAPI from '@xivapi/js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;
const xiv = new XIVAPI();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//app.use(express.static(path.join(__dirname, 'public')));

app.get('/lore', async (req, res) => {
    try {
        const response = await axios.get('https://xivapi.com/lore?'); // wait for api get request
        const lore = response.data; // store data received
        const randomLore = lore.Results[Math.floor(Math.random() * lore.Results.length)]; // get a random item from the collection of data
        res.json({ lore: randomLore.Text }); // get the text portion of the object
        res.render("index.ejs"); // render the data
    } catch (error) {
        console.error('Error fetching lore:', error); // error message
        res.status(500).json({ error: 'Failed to fetch lore' });
    }
});

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});