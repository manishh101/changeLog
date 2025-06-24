import {Router} from 'express'

const router = Router()

/**
 * Product
 **/ 

router.get('/product', (req,res) => {
  res.send({message: 'message' })
})
router.get('/product/:id', (req,res)=> {
  res.json({message: 'message'})
})
router.put('/product/:id', (req,res)=> {})
router.post('/product', (req,res)=> {})
router.delete('/product/:id', (req,res)=> {})

/**
 * Update
 * */ 

router.get('/update', ()=>{})
router.get('/update/:id', ()=> {})
router.put('/update/:id', ()=> {})
router.post('/update', ()=> {})
router.delete('/update/:id', ()=> {})

/**
 * Update point
 */

router.get('/updatepoint', ()=>{})
router.get('/updatepoint/:id', ()=> {})
router.put('/updatepoint/:id', ()=> {})
router.post('/updatepoint', ()=> {})
router.delete('/updatepoint/:id', ()=> {})


export default router


