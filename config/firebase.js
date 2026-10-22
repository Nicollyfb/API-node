const admin = require("firebase-admin");

let serviceAccount;

// Se a variável de ambiente existir (no Render), usa-a. Caso contrário, lê o ficheiro local (no PC).
if (process.env.FIREBASE_SERVICE_ACCOUNT) {
    serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
} else {
    serviceAccount = require("./serviceAccountKey.json");
}

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://biscoito-47089-default-rtdb.firebaseio.com/"
});

const db = admin.database();

module.exports = db;