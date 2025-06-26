import {Router} from 'express'
import { body, oneOf, validationResult } from "express-validator";
import { handleInputErrors } from './modules/middleware';
import { createProduct, deleteProduct, getOneProduct, getProducts, updateProduct } from './handlers/products';
import { getUpdates,getOneUpdate,createUpdate,updateUpdate,deleteUpdate } from './handlers/update';


const router = Router()

/**
 * Product
 **/ 

router.get('/product', getProducts)
router.get('/product/:id', getOneProduct)
router.put('/product/:id', body('name').isString(),handleInputErrors, updateProduct)
router.post('/product',body('name').isString(),handleInputErrors,  createProduct)
router.delete('/product/:id', deleteProduct)

/**
 * Update
 * */ 

router.get('/update',getUpdates )
router.get('/update/:id', getOneUpdate)
router.put('/update/:id',
  body('title').optional(), 
  body('body').optional(),
  body('status').isIn(['IN_PROGRESS','SHIPPED','DEPRECATED']).optional(), 
  body('version').optional(),
  body('asset').optional() , updateUpdate )
router.post('/update',
  body('title').exists(), 
  body('body').exists(),
  body('productId').exists().isString(), createUpdate)
router.delete('/update/:id',deleteUpdate )

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


