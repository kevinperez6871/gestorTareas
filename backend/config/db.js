import mongoose from "mongoose";

export const conectarDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/merndb");
    console.log("Bd conectada / Db is connected");
  } catch (error) {
    console.log(error);
  }
};
export default conectarDB;
