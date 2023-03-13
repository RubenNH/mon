import express from 'express';
import routes from './routes/routes.js';
import path from 'path';
import { engine }  from 'express-handlebars';
import morgan from 'morgan';

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({
    layoutsDir: path.join(app.get('views'), 'layouts'),
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.set('view engine', '.hbs');

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(routes);

export default app;
