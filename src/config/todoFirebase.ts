import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import fs, { readFileSync } from "fs";


const serviceAccount = JSON.parse(readFileSync('managetasks.json','utf8'));

initializeApp({
  credential: cert(serviceAccount),
});

export const db = getFirestore();
export const itemsCollection = db.collection("dailyTask");
