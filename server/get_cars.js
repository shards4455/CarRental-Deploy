import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
mongoose.connect(process.env.MONGODB_URI + '/car-rental').then(async () => {
    const carSchema = new mongoose.Schema({ owner: mongoose.Schema.Types.ObjectId, model: String, image: String }, {strict: false});
    const Car = mongoose.model('Car', carSchema);
    const cars = await Car.find({});
    const myCars = cars.filter(c => ['Continental GT', 'Ghost', 'Range Rover'].includes(c.model));
    console.log(JSON.stringify(myCars, null, 2));
    process.exit(0);
});
