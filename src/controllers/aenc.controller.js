import { getConnection } from "../database/connection.js";

export const getAllOrdenes = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query("SELECT 1;");
        console.log(result);
        res.json(result.recordsets)
    } catch (error) {
        
        //console.error(error)
    }
}