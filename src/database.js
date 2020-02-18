import mongoose from "mongoose";
import config from "config";

const mongodbUrl = config.get("database.mongoUrl");

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
