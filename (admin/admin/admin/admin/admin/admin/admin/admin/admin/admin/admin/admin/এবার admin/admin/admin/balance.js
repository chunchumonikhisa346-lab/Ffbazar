import { db } from "./firebase-config.js";

import {
doc,
getDoc,
updateDoc,
increment
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Get User Balance
export async function getBalance(uid){

const ref = doc(db,"users",uid);

const snap = await getDoc(ref);

if(snap.exists()){

return snap.data().balance || 0;

}

return 0;

}

// Add Balance
export async function addBalance(uid,amount){

const ref = doc(db,"users",uid);

await updateDoc(ref,{
balance:increment(amount)
});

}

// Deduct Balance
export async function deductBalance(uid,amount){

const ref = doc(db,"users",uid);

await updateDoc(ref,{
balance:increment(-amount)
});

}
