import express from 'express';
import authenticate from '../middlewares/authenticate'

let router = express.Router();

router.post('/', authenticate, (req,res)=>{
    res.status(201).json({success:true})
    console.log('Head OK, I can send you a shit')
})

// test if header work

router.get('/', authenticate, (req,res)=>{
    res.send('Good!!')
})

export default router;