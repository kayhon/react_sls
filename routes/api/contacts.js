const db = require("../../models");

const router = require("express").Router();

//should it be "/api/contacts",?
router.post("/", function(req, res){
        console.log("contactRoutes")
        // .post(contactRoutes.create);
        console.log(req.body)
        // API.saveContact({
         const contact = {
        // _id: req.body._id,
        name: req.body.name,
        serv: req.body.serv,
        phone: req.body.phone,
        email: req.body.email,
        location: req.body.location
    };
    db.Contact
        .create(contact)
        .then(dbContact => res.json(dbContact))
        .catch(err => console.log(err));
            // res.status(422).json(err));
       
}

// if i had a controller something like this would be
// inside it:(does whats above work same way?)
// },
// create: function(req, res) {
//   db.Book
//     .create(req.body)
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));



);

module.exports = router;


// side note:
// add this to form:
// <form method="post" action="/addname">
// <input type="submit" value="Add Name">

// option  1:
// // Add a new Post
// router.post('/posts', (req, res) => {
//     PostController.addPost(req, res);
// });

// option 2:
// app.post("/addname", (req, res) => {
 
// });

// option 3:
// app.post("/addname", (req, res) => {
//   var myData = new User(req.body);
//   myData.save()
//     .then(item => {
//       res.send("item saved to database");
//     })
//     .catch(err => {
//       res.status(400).send("unable to save to database");
//     });
// });

// option4:
// router.post('/contacts', (req, res) => {
//     contactController.addPost(req, res);
// });


// option 5:
// newPost.save((err, saved) => {
//     if (err) {
//         res.status(500).send(err);
//     }
//     res.json({ post: saved });
// });
// }
// catch (err) {
// console.log(err);
// }
// }


// what about in server app.js?:
// import posts from './routes/posts.routes';
// server.use('/api', posts);

// ??????????????export default router;?????????