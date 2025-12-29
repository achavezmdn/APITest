import sql from 'mssql'

const dbSettings = {
    user: "advansys",
    password: "nohaymana",
    server: "CHAVEZ-PC\\SQL2022EX",
    database: "Financ",
    options: {
        encrypt: false,
        trustServerCertificate: true,
    }
}

export const getConnection = async () => {
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (error) {
        console.error(error);
        
    }
}