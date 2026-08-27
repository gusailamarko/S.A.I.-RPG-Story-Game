import bcrypt from 'bcrypt';
import {pool} from './pool.js';

async function seed() {
    const hashedPw = await bcrypt.hash(process.env.ADMIN_SEED_PW, 12);

    /*await pool.query(
        `INSERT INTO users (username, displayname, email, password, role)
        VALUES ($1, $2, $3, $4, $5)`,
        ["Admin", "Admin", "admin@example.com", hashedPw, "admin"]
    );*/

    console.log("Seed complete!");
    await pool.end();
}

seed();