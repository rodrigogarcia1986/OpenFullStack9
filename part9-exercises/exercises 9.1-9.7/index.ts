import express from 'express';
import exerciseCalculator from './exerciseCalculator';
const app = express();

app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {

    if (!req.query.weight || !req.query.height) {
        return res.status(400).json('Weight and height are required.');
    } 

    const weight: number = parseFloat(req.query.weight as string);
    const height: number = parseFloat(req.query.height as string);

    if (isNaN(weight) || isNaN(height)) {
        return res.status(400).json({
            error: "malformatted parameters"
          });
    }    

    const bmi: number = weight / Math.pow((height/100), 2);    
    const result = {
        weight,
        height,
        bmi:""
    };
    
    if (bmi < 18.5 ) {        
       result.bmi = "Not normal (underweight)";
       return res.json(result);
    } else if (bmi > 24.9) {
        result.bmi = "Not normal (overweight)";
        return res.json(result);
    } else {
        result.bmi = "Normal (healthy weight)";
        return res.json(result);
    }   
});

app.post('/exercises', (req, res) => {

    if (!req.body.daily_exercises || !req.body.target) {
        return res.status(400).json('Parameters missing');
    } 

    const value1: number[] = req.body.daily_exercises as number[];    
    const value2: number = req.body.target as number;

    if (isNaN(value2)) {
        return res.status(400).json('malformatted parameters')
    } else if (value1.some(num => isNaN(num))) {
        return res.status(400).json('malformatted parameters')
    }
  
    const result = exerciseCalculator(value1, value2);
    return res.json(result);
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});