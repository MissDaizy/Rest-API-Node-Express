import experess from 'express';
import bodyParser from 'body-parser';


// Initialize expess application
const app=experess();
// The PORT which our application will run on
const PORT = 5000;
// Use json in sending and requesting data to a REST API
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    console.log('[TEST]!');

    res.send('Hello from Homepage.');
});
// Makes our application listen to the incoming requests 
app.listen(PORT,()=>{console.log(`Server running on port: http://localhost:${PORT}`)});