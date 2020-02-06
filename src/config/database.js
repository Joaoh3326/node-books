import mongoose from "mongoose";
const mongodbUrl =
  process.env.MONGODB_URL ||
  "mongodb+srv://joao:joao@cluster0-bmo63.azure.mongodb.net/test?retryWrites=true&w=majority";

const connect = () =>
  mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

const close = callback => mongoose.connection.close(callback);

export default {
  connect,
  close
};
