import { Sequelize } from "sequelize";
import db from "../koneksi/koneksi.js";

const { DataTypes } = Sequelize;

const Todo = db.define('praktikum3' ,{
    title: {
        type: DataTypes.STRING
    },
    deadline: {
        type: DataTypes.DATE
    }
},{
    freezeTableName: true
});

export default Todo;