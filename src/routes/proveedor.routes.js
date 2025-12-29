import {Router} from 'express'
import {getProveedores, getProveedor, createProveedor} from '../controllers/proveedor.controllers.js'

const router = Router()

router.get('/proveedores', getProveedores)

router.get('/proveedor/:id', getProveedor)

router.post('/proveedores', createProveedor)

export default router