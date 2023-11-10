const { MongoClient } = require("mongodb");
const { use } = require("../Routes/Devices.routes");

class User {
    constructor(name, email, password, _id) {
        this.Name = name;
        this.Email = email;
        this.Password = password;

    }

}

class DataHandler {
    constructor() {
        this.dbClient = new MongoClient(process.env.DB_Con_Str);
        this.dataBase = this.dbClient.db(process.env.DataBase)
    }

    async FindAll() {
        try {
            await this.dbClient.connect();
            const collection = this.dataBase.collection("User");
            const cursor = await collection.find();

            const array = [];
            for await (const data of cursor) {
                array.push(data)
            };
            return array;
        }
        catch (ex) {
            console.log(ex);
            return null;
        }
        finally {
            this.dbClient.close();
        }
    }

    async FindById(id) {
        try {
            this.dbClient.connect();
            const collection = this.dataBase.collection("User");
            // console.log("1");
            const found = await collection.findOne({ _id: id });
            // console.log(found);

            return found;
        }
        catch (ex) {
            console.log(ex);
            return null;
        }
        finally {
            this.dbClient.close();
        }
    }

    // async Add(newUser) {
    //     try {
    //         this.dbClient.connect();
    //         const collection = await this.dataBase.collection("User");
    //         const addUser = await collection.insertOne(newUser);

    //         return addUser;
    //     }
    //     catch (ex) {
    //         console.log(ex);
    //         return null;
    //     }
    //     finally {
    //         this.dbClient.close();
    //     }
    // }


    async Add(User) {
        try {
            await this.dbClient.connect();
            const collection = this.dataBase.collection("User");
            const result = await collection.insertOne(User);
            return result;
        }
        catch (ex) {
            console.log(ex);
            return null;
        }
        finally {
            this.dbClient.close();
        }
    }




    async Login(email, password) {
        try {
            await this.dbClient.connect();
            const collection = this.dataBase.collection("User");
            const data = await collection.findOne(
                {
                    "Email": email,
                    "Password": password
                }
            );
            // const user = new User(data.Name, data.Email, data.Password, data._id)
            const user = new User(data.Name, data.Email)
            if (!user) return null;
            return user;
        }
        catch (ex) {
            console.log(ex);
            return null;
        }
        finally {
            this.dbClient.close();
        }
    }




    async Delete(id) {
        try {
            this.dbClient.connect();
            const collection = this.dataBase.collection("User");
            const deleteUser = await collection.deleteOne({ _id: id });
            return deleteUser;
        }
        catch (ex) {
            console.log(ex);
            return null;
        }
        finally {
            this.dbClient.close();
        }
    }

}

module.exports = {
    User, DataHandler
};