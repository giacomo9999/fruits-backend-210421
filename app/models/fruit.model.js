module.exports = (mongoose) => {
  const Fruit = mongoose.model(
    "fruit",
    mongoose.Schema(
      {
        fruitName: String,
        fruitColor: String,
        fruitShape: String,
        inStock: Boolean,
      },
      { timestamps: true }
    )
  );
  return Fruit;
};
