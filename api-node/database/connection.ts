import { Sequelize } from "sequelize";

const dataBase = new Sequelize(
  `${process.env.DATABASE_NAME}`,
  `${process.env.DATABASE_USER}`,
  `${process.env.DATABASE_PASS}`,
  {
    host: `${process.env.DATABASE_HOST}`,
    dialect: "mysql",
    define: {
      freezeTableName: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

export default dataBase;
