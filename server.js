import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import exphbs from 'express-handlebars'
import path from 'path'
import {routes} from './backend/routes/router.js'
import { fileURLToPath } from 'url';
import connectDB from './backend/database/connection.js'


//dotenv config and creat .env file for module uses
dotenv.config();

const app = express();


//create PORT
const PORT = process.env.PORT ||8000

//use morgan to collect logs from server automatically
app.use(morgan('tiny'))
//use json / bodyParser is deprecated => so I just use express. 
app.use(express.json())

//log the request
app.use(express.urlencoded({ extended: true}))

//mongoDB connection
connectDB()

//set view engine - express-handlerbars 
app.engine('hbs', exphbs.engine({defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', 'hbs');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/assets/js', express.static(__dirname + '/assets/js'))

app.set('views', __dirname + '/views');


//load routes from router.js
app.use('/', routes)


app.listen(PORT, () => {
    console.log(`server is successfully running on port: ${PORT} `)
})
