import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';


const app = express(); //to run app

app.use(bodyParser.json({limit: "30mb", extend: true })); // to send images
app.use(bodyParser.urlencoded({limit: "30mb", extend: true })); // to send url

app.use(cors());

const CONNECTION_URL = 'mongodb+srv://rohithadmin:Master2541548@cluster0.br1sd.mongodb.net/?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true }); // two argumentd are not nneded but might cause errors in console
   
//.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
//.catch ((error) => console.log(error.message))

//mongoose.set('useFindAndModify', false);  //to dont get any errors in console

