import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import dotenv from "dotenv";
import fs, { readFileSync } from "fs";

dotenv.config();

const servicePath = process.env.FIREBASE_SERVICE_ACCOUNT_PATH;

if (!servicePath) {
  throw new Error("FIREBASE_SERVICE_ACCOUNT_PATH environment variable is not set or empty.");
}

const serviceAccount = JSON.parse(servicePath);
// const serviceAccount = JSON.parse(readFileSync('myToDoTasks.json','utf8'));

initializeApp({
  credential: cert(serviceAccount),
});

export const db = getFirestore();
export const itemsCollection = db.collection("dailyTask");
