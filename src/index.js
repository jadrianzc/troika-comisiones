const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');
const morgan = require('morgan');
require('./database');
// const methodOverride = require('method-override');

// Initiliazations
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine(
	'.hbs',
	exphbs.engine({
		defaultLayout: 'main',
		layoutsDir: path.join(app.get('views'), 'layouts'),
		partialsDir: path.join(app.get('views'), 'partials'),
		extname: '.hbs',
	})
);
app.set('view engine', '.hbs');

// Middlewares
app.use(express.urlencoded({ extended: false }));
// app.use(methodOverride('_method'));
app.use(
	session({
		secret: 'mysecretapp',
		resave: true,
		saveUninitialized: true,
	})
);
app.use(morgan('dev'));

// Global Variables

// Routes
app.use(require('./routes/index.routes'));

// Static Files

// Server is listenning
app.listen(app.get('port'), () => {
	console.log('Server on port', app.get('port'));
});
