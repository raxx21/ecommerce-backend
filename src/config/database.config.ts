import { MongooseModuleOptions } from '@nestjs/mongoose';

export const databaseConfig: MongooseModuleOptions = {
  uri: process.env.MONGO_URI || "mongodb+srv://rajesh:Rajesh$2024@cluster0.d53shtc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
};
