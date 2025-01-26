import pg from "pg"


 const db = new pg.Client({
    user:"postgres",
    host: "localhost",
    database: "nextweb",
    password:"020784",
    port:5432
})

export default db