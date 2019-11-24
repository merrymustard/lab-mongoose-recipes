const express = require("express")
const mongoose = require("mongoose")
const hbs = require("hbs")
const app = express()
const Recipe = require("./models/Recipe") // Import of the model Recipe from './models/Recipe'
const data = require("./data.js") // Import of the data from './data.js'
const { Router } = require("express")
const router = Router()

app.set("views", `${__dirname}/views`)
app.set("view engine", "hbs")

// Connection to the database "recipeApp"
mongoose
  .connect("mongodb://localhost/recipeApp", {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Connected to Mongo!")
  })
  .catch(err => {
    console.error("Error connecting to mongo", err)
  })

// Recipe.create({
//   title: 'Asian Tofu',
//   level: 'Top teur Chef',
//   ingredients: ['1/2 cup rice vinegar', '5 tablespoons honey', '1/3 cup soy sauce (such as Silver Swan®)', '1/4 cup Asian (toasted) sesame oil', '3 tablespoons Asian chili garlic sauce', '3 tablespoons minced garlic', 'salt to taste', '8 skinless, boneless chicken thighs'],
//   cuisine: 'Asian',
//   dishType: 'Dish',
//   image: 'https://images.media-allrecipes.com/userphotos/720x405/815964.jpg',
//   duration: 50,
//   creator: 'Chef LePapu'
// })
// console.log(Recipe.title);
// db.recipe.find({}, {name:1})
router.get("/", async (req, res) => {
  const recipies = await Recipe.find()
  res.render("index", {
    recipies
  })
})

// router.get("/create", async (req, res) => {
//   await Recipe.insertMany(data)
//   res.redirect("/")
// })

// Recipe.insertMany(data){

// };

// Recipe.updateOne({
//   title: "Rigatoni alla Genovese"
// }, {
//   duration: 100
// }).then();

// Recipe.deleteOne({
//   title: "Carrot Cake"
// }).then();

module.exports = router
//close database
// process.on("SIGINT", function () {
//   mongoose.connection.close(function () {
//     // console.log('Disconnect Mongoose');
//     process.exit(0)
//   })
// })

app.listen(3000, () => console.log("http://localhost:3000"))
