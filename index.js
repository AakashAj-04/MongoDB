// const express = require("express");
// const mongoose = require("mongoose");

// const app = express();

// // Connecting DataBase
// mongoose
//   .connect("mongodb://localhost:27017/crud")
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log("Mongo Error", err));

// // Schema for DataBase
// const UserSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
// });

// const UserModel = mongoose.model("users", UserSchema);

// app.get("/getUsers", (req, res) => {
//   UserModel.find({})
//     .then(function (users) {
//       res.json(users);
//     })
//     .catch(function (err) {
//       console.log(err);
//     });
// });

// app.listen(3001, () => console.log("server is running..."));

db.createCollection("collectionName", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "address", "email"],
      properties: {
        name: { bsonType: "string", description: "Name is required" },
        email: { bsonType: "string", description: "email is required" },
        address: {
          bsonType: "object",
          description: "Addreaa is required",
          properties: {
            street: {
              bsonType: "string",
            },
            city: { bsonType: "string" },
            country: {
              bsonType: "string",
            },
          },
        },
      },
    },
  },
  validationLevel: "moderate",
  validationAction: "warn",
});
