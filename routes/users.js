import express from 'express';

const router=express.Router();

const users = [
    {
        name:"John",
        lastName:"Doe",
        age:25
    }
]

// All routes in here starting with /users
router.get('/',(req,res)=>{
    console.log('[TEST]!');

    res.send('Hello Users');

});

export default router;