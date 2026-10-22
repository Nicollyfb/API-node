const admin = require("firebase-admin");

// Como estão na mesma pasta (config), basta usar "./" seguido do nome exato do arquivo
const serviceAccount = require("./serviceAccountKey.json"); 
// Nota: Se o seu arquivo na pasta config tiver o nome longo (ex: biscoito-47089-...), 
// substitua "serviceAccountKey.json" pelo nome exato dele.

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://biscoito-47089-default-rtdb.firebaseio.com/"
});

const db = admin.database();

module.exports = db;