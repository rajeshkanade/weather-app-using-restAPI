const express = require("express")
const path = require("path");
const hbs = require("hbs") // for advanced i.e partials

const port = process.env.PORT | 8000;
const app = express();

let staticPath = path.join(__dirname, "../public");
let viewsPath = path.join(__dirname,"../templates/views");
let partialPath = path.join(__dirname,"../templates/partials");
app.set("view engine", "hbs") // require the hbs for views
app.set("views" , viewsPath) // for using the view from the partials 
app.use(express.static(staticPath))
hbs.registerPartials(partialPath) // here getting the partials

app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/weather",(req,res)=>{
    res.render("weather")
})

app.get("/about",(req,res)=>{
    res.render("about")
})

app.listen(port,()=>{
    console.log("server is listning at port no " + port);
})
