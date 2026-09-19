import dotenv from "dotenv";

dotenv.config();

const envConfig = {
  PORT: process.env.PORT,
  MONGODB_URL: mongodb://localhost:27017/
};

export default envConfig;
