import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const servicepath = process.env.FIREBASE_SERVICE_ACCOUNT_PATH;

if (!servicepath) {
  throw new Error("FIREBASE_SERVICE_ACCOUNT_PATH is missing");
}

const serviceAccount = JSON.parse(fs.readFileSync(servicepath, "utf8"));

initializeApp({
  credential: cert(serviceAccount),
});

export const db = getFirestore();
export const itemsCollection = db.collection("dailyTask");
