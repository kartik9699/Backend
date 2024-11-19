const mongoose = require('mongoose');

const mongodb = async () => {
  try {
    await mongoose.connect('mongodb+srv://KartikP:Kparab123@kartikp.raibh.mongodb.net/GoFood?retryWrites=true&w=majority&appName=KartikP');
    console.log('Connected!');

    const fetch_data = await mongoose.connection.db.collection("Foods");
    const data = await fetch_data.find().toArray();

    const FoodCategory = await mongoose.connection.db.collection("FoodCategory");
    const Category = await FoodCategory.find({}).toArray();

    global.foods = data;
    
    global.Category = Category;
    console.log(Category);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = mongodb;
