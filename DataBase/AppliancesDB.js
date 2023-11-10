const { MongoClient } = require("mongodb");

class ItemsClass {
    constructor(image, name, parent, _id) {
        if (_id) {
            this._id = _id;
        }
        this.Image = image;
        this.Name = name;
        this.Parent = parent;
    }
}

class DataHandler {
    constructor() {
        this.dbClient = new MongoClient(process.env.DB_Con_Str);
        this.database = this.dbClient.db(process.env.DataBase);
    }

    async GetAll() {
        try {
            await this.dbClient.connect();
            const collection = this.database.collection(process.env.ApplianceItems);
            const cursor = await collection.find();
            const tempArray = [];
            for await (const doc of cursor) {
                let data = new ItemsClass(doc.Image, doc.Name, doc.Parent, doc._id);
                tempArray.push(data);
            };
            return tempArray;
        }
        catch (ex) {
            throw ex;
        }
        finally {
            this.dbClient.close();
        }
    }


    async AddItem(itemName) {
        try {
            await this.dbClient.connect()
            const collection = this.database.collection(process.env.ApplianceItems);
            const result = await collection.insertOne(itemName);
            return result;
            // console.log(itemName);
        }
        catch (ex) {
            console.log(ex);
            return null;
        }
        finally {
            this.dbClient.close();
        }
    }

    async DeleteItem(id) {
        try {
            await this.dbClient.connect();
            const collection = this.database.collection(process.env.ApplianceItems);
            const found = await collection.findOne(id);
            if (found) {
                const result = await collection.deleteOne(found);
                console.log(result);
                return result;
            }
            return null;

        }
        catch (ex) {
            console.log(ex);
            return null;
        }
        finally {
            this.dbClient.close();
        }
    }

    async UpdateItem(id, item) {
        try {
            await this.dbClient.connect();
            const collection = this.database.collection(process.env.ApplianceItems);
            const result = await collection.updateOne(
                { _id: id },
                { $set: item }
            );
            console.log(result);
            return result;
        }
        catch (ex) {
            throw ex;
        }
        finally {
            this.dbClient.close();
        }
    }
}

module.exports = {
    DataHandler, ItemsClass
}