import { getConnection } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { hash } from 'bcryptjs';
import createConnection from '../index';


async function create() {
  const connection = await createConnection("localhost");

  const id = uuidv4();
  const password = await hash("admin", 8)

  await connection.query(
    `INSERT INTO USERS(id, name, email, password, "isAdmin", create_at, driver_license)
    value('${id}', 'admin', 'email@admin.com.br', '${password}', 'true', 'now()', 'XXXXX')
    `
  );
}

create().then(() => console.log("user admin created!"));
