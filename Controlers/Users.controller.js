const { User, DataHandler } = require("../DataBase/Users.DB");
const { ObjectId } = require("mongodb");
const jwt = require("jsonwebtoken");

const handler = new DataHandler();

const GetAll = async (req, res) => {
    const all = await handler.FindAll();
    return res.status(200).send(all);
}

const GetbById = async (req, res) => {
    const id = new ObjectId(req.params.id);
    console.log(id);
    const found = await handler.FindById(id);
    return res.status(200).send(found);
}

// const AddNew = async (req, res) => {
//     const add = new User(req.body.Name, req.body.Email);
//     const temp = await handler.Add(add);
//     return res.status(201).send(temp);
// }

const DeleteUser = async (req, res) => {
    const id = new ObjectId(req.params.id);
    console.log(id);
    const found = await handler.Delete(id);
    return res.status(200).send(found);
}


const Register = async (req, res) => {
    const user = new User(req.body.Name, req.body.Email, req.body.Password);
    const result = await handler.Add(user);
    if (result.insertedId) {
        user._id = result.insertedId;
        return res.status(201).header("location", `${req.baseUrl}/${user._id}`).send(user);
    }

    // return res.status(201).send(result);

    return res.status(500).send("failed to register user");
}

const Login = async (req, res) => {
    const user = await handler.Login(req.body.Email, req.body.Password);
    if (user) {
        const authToken = jwt.sign(user.Email, process.env.JWT_SECRET_KEY);
        return res.status(200).header(process.env.JWT_TOKEN_HEADER, authToken).send(user);
    }
    return res.status(404).send("not found");

}

module.exports = { GetAll, Register, GetbById, Login, DeleteUser };
