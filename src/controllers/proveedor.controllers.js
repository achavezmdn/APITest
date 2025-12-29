import {getConnection} from '../database/conexion.js'
import sql from 'mssql';

export const getProveedores = async (req, res) => {
    const pool = await getConnection()
    const result = await pool.request().query('SELECT * FROM CP_CASU')
    res.json(result.recordset)
}

export const getProveedor = async (req, res) => {
    const pool = await getConnection();
    const result = await pool
    .request()
    .input("id", sql.Int, req.params.id)
    .query('SELECT dbo.ValidaProveedor(NULL, @id) as CODISUPL');
    
    if(result.rowsAffected[0] === 0){
        return res.status(404).json({message: "Proveedor no encontrado"});
    }
    return res.json(result.recordset[0]);
}

export const createProveedor = (req, res) => {
    res.send('obteniendo proveedores')
}