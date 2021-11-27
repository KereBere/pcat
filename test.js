const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

//* Connect DB
mongoose.connect('mongodb://localhost/pcat-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Create Scheme
const PhotoScheme = new Scheme({
  title: String,
  description: String,
});

const Photo = mongoose.model('Photo', PhotoScheme);

//Create Photo in DB
// Photo.create({
//   title: 'Photo title 2',
//   description: 'Photo Description 2 Lorem hehe',
// });

//* Read a file
// Photo.find({}, (err, data) => {
//   console.log(data);
// });

//* Update data
// const id = '61a155e99b26851592c95413';

// Photo.findByIdAndUpdate(
//   id,
//   {
//     title: 'Photo title 111 updated',
//     description: 'Photo des 111 updated',
//   },
//   {
//     new: true,
//   },
//   (err, data) => {
//     console.log(data);
//   }
// );

// Delete data
// const id = '61a15700ca81dc5ba13da7d5';

// Photo.findByIdAndDelete(id, (err, data) => {
//   console.log('Photo removed');
// });
