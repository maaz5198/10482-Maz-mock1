import express from "express";
import envConfig from "./configs/envConfig.js";
import bodyParser from "body-parser";

const port = envConfig.PORT || 8081;

const app = express();

