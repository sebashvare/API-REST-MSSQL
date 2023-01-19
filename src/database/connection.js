import sql from "mssql"
/**
 * 

const dbSettings = {
    user: "sebashvare",
    password: "Sebas_123",
    server: "SEBASHVARE",
    database: "INDICADORES",
    port: 1433,
    options: {
        encrypt: true,
        trustServerCertificate: true,
        keepAlive: true,
        enableArithAbort: true,

    },
    dialect: "mssql",
    dialectOptions: {
        instanceName: "SQLEXPRESS"
    }

}
 */
const dbSettings = {
    user: process.env.USER,
    password: process.env.PASSWORD,
    server: process.env.SERVER,
    database: process.env.DATABASE,
    port: process.env.PORT_DB,
    options: {
        encrypt: true,
        trustServerCertificate: true,
        keepAlive: true,
        enableArithAbort: true,

    },
    dialect: "mssql",
    dialectOptions: {
        instanceName: "SQLEXPRESS"
    },
    

}

export const getConnection = async () => {
    try {
        const pool = await sql.connect(dbSettings);
        return pool;

    } catch (error) {

        console.log("Este es el Error");
        console.log(error);
    }

}

