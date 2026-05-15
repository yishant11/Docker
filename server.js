// const express = require("express");
// const { MongoClient } = require("mongodb");

// const app = express();

// const PORT = 5050;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static("public"));

// const MONGO_URL =
//   "mongodb+srv://admin:qwerty123@cluster0.tbycxs5.mongodb.net/?retryWrites=true&w=majority";

// const client = new MongoClient(MONGO_URL);

// let db;

// // CONNECT DATABASE ONLY ONCE
// async function connectDB() {
//   try {
//     await client.connect();

//     console.log("MongoDB Connected");

//     db = client.db("myDatabase");
//   } catch (err) {
//     console.log(err);
//   }
// }

// connectDB();

// // GET ALL USERS
// app.get("/getUsers", async (req, res) => {
//   try {
//     const users = await db.collection("users").find({}).toArray();

//     console.log(users);

//     res.json(users);
//   } catch (err) {
//     console.log(err);

//     res.status(500).send("Error fetching users");
//   }
// });

// // ADD USER
// app.post("/addUser", async (req, res) => {
//   try {
//     const userObj = req.body;

//     console.log(userObj);

//     const result = await db.collection("users").insertOne(userObj);

//     console.log("User inserted");

//     res.json({
//       message: "User added successfully",
//       insertedId: result.insertedId,
//     });
//   } catch (err) {
//     console.log(err);

//     res.status(500).send("Error adding user");
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

const express = require("express");
const app = express();

const PORT = 5600;

app.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      age: 30,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "janesmith@example.com",
      age: 25,
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bobjohnson@example.com",
      age: 35,
    },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
