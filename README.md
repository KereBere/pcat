# Node.js PCAT Project

### EJS Embedded JS
Create a views and views/partials folder. Keep templates in &
Send ejs/html templates like this.
``` js
app.get('/about', (req, res) => {
  res.render('about');
});
```
Use static files like this. In public folder

``` js 
app.use(express.static('public')); 
```
### Mongo Shell
Tekli veri oluşturmak
``` 
>  use pcat-test-db
switched to db pcat-test-db
>  db.photos.insertOne(
... {title: "Photo 1", description: "Photo description lorem ipsum",qty:20}) 
```
Çoklu veri oluşturmak
```
> db.photos.insertMany([
... {title: "Photo 2", description: "Photo 2 decsription lorem ipsum"},
... {title: "Photo 2", description: "Photo 2 decsription lorem ipsum"},
... ])

> db.photos.find() => READ photos verilerini bul
{ "_id" : ObjectId("61a0095e63d0669f716b341a"), "title" : "Photo 1", "description" : "Photo description lorem ipsum", "qty" : 20 }
{ "_id" : ObjectId("61a00b2863d0669f716b341b"), "title" : "Photo 2", "description" : "Photo 2 decsription lorem ipsum" }
{ "_id" : ObjectId("61a00b2863d0669f716b341c"), "title" : "Photo 2", "description" : "Photo 2 decsription lorem ipsum" }
```
Update the data
`db.photos.updateOnt({title : "Photo 1", {$set:{qty: 222}})`
Delete the data
`db.photos.deleOne({qty: {$lt: 500}})` Delete qty less than 500

### Mongoose

Mongoose bir ODM dir. Object Document Mapper. 