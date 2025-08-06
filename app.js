const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./router/user");
const stocksRoutes = require("./router/stock");
const sequelize = require("./config/db");
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

app.use("/user",userRoutes); //http://localhost:3000/user
app.use("/stocks",stocksRoutes);

(async ()=>{
    try {
        await sequelize.authenticate();
        console.log("Database Auth");
        await sequelize.sync({alter : true});
        console.log("Database connected!!!!");
        app.listen(8081,()=>{
            console.log(`Server is running on port ${process.env.PORT}!!!!!!!!!!!!!!!`)
        })
    } catch (error) {
        console.log(error)
    }
})();






