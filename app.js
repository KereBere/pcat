const express = require('express');
const fileUpload = require('express-fileupload');
var methodOverride = require('method-override');
const mongoose = require('mongoose');
const ejs = require('ejs');
const photoController = require('./controllers/photoController');
const pageController = require('./controllers/pageController');

const app = express();
//const password = 't.yJiDVbPEP7Aa:';

// * CONNECT DB
mongoose.connect(
  'mongodb+srv://ali:2153401Ali.@cluster0.flqid.mongodb.net/pcat-db?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).then(()=> {
  console.log('DB Connected!')
}).catch((err)=> {
  console.log(err)
})

// * TEMPLATE ENGİNE
app.set('view engine', 'ejs');

// * MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

app.get('/', photoController.getAllPhotos);
app.get('/photos/:id', photoController.getPhoto);
app.post('/photos', photoController.createPhoto);
app.put('/photos/:id', photoController.updatePhoto);
app.delete('/photos/:id', photoController.deletePtoho);
app.get('/about', pageController.getAboutPage);
app.get('/add', pageController.getAddPage);
app.get('/photos/edit/:id', pageController.getEditPage);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı.`);
});
