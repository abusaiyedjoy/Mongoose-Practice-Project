import app from './app';
import { config } from './app/config';
import mongoose from 'mongoose';

async function main() {
  try {
    await mongoose.connect(config.MONGODB_URL as string);

    app.listen(config.PORT, () => {
      console.log(`Example app listening on port ${config.PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}
main();
