// const database = 'Categoreis';
// const collection = 'Category_Items';

// // Create a new database.
use('Categoreis');

// // Create a new collection.
// db.createCollection('Category_Items');
// db.Category_Items.insertOne(
//     {
//         "Image": "image.png",
//         "Name": "Mobiles",
//         "Parent": "Devices"
//     }
// );


// db.createCollection('Accessories_Items');
// db.Accessories_Items.insertOne(
//     {
//         "Image": "image.png",
//         "Name": "BlueTooth HeadPhones",
//         "Parent": "Head-Phones"
//     }
// );

// db.createCollection('CategoriesList');
db.CategoriesList.insertOne(
    {
        "Image": "appliances.png",
        "Name": "Electronic Devices",
        "About": "About Mobiles, Laptops & Other Devices"
    }
);

db.CategoriesList.find()

// db.Category_Items.find()
// db.Accessories_Items.find()
// db.Category_Items.aggregate(
//     [{
//         $lookup: {
//             from: "categories",
//             localField: "ParentId",
//             foreignField: "_id",
//             as: "Parents"
//         }
//     },
//     {
//         $project: {
//             "_id": 1,
//             "ParentId": 0
//         }

//     }]
// );