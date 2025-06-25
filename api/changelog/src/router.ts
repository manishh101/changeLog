import {Router} from 'express'
import { body, oneOf, validationResult } from "express-validator";
import { handleInputErrors } from './modules/middleware';

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
router.put('/product/:id', body('name').isString(),handleInputErrors, (req,res)=> {
  
})
router.post('/product',body('name').isString(),handleInputErrors,  (req,res)=> {})
router.delete('/product/:id', (req,res)=> {})

/**
 * Update
 * */ 

router.get('/update', (req,res)=>{})
router.get('/update/:id', (req,res)=> {})
router.put('/update/:id',
  body('title').optional(), 
  body('body').optional(),
  oneOf([
    body('status').equals('IN_PROGRESS'),
    body('status').equals('SHIPPED'),
    body('status').equals('DEPRECATED')
  ]), 
  body('version').optional(),
  body('asset').optional() ,  (req,res)=> {

  })
router.post('/update',
  body('title').exists(), 
  body('body').exists(),
  body('productId').exists().isString(), (req,res)=> {

  })
router.delete('/update/:id', (req,res)=> {})

/**
 * Update point
 */

router.get('/updatepoint', (req,res)=>{})
router.get('/updatepoint/:id', (req,res)=> {})
router.put('/updatepoint/:id',
  body('name').optional().isString(),
  body('description').optional().isString() ,(req,res)=> {

  })
router.post('/updatepoint',
  body('name').exists().isString(),
  body('description').exists().isString(),
  body('updateId').exists().isString() ,(req,res)=> {})
router.delete('/updatepoint/:id', (req,res)=> {})


export default router


