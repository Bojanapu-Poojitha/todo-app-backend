import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const servicePath = process.env.FIREBASE_SERVICE_ACCOUNT_PATH;

if (!servicePath) {
  throw new Error("FIREBASE_SERVICE_ACCOUNT_PATH environment variable is not set or empty.");
}

const serviceAccount = JSON.parse(fs.readFileSync(servicePath, "utf8"));

initializeApp({
  credential: cert(serviceAccount),
});

export const db = getFirestore();
export const itemsCollection = db.collection("dailyTask");
