import { auth } from "./firebase-config.js";
import { db } from "./firebase-config.js";

import {
onAuthStateChanged,
updateProfile
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
doc,
getDoc,
updateDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Current User
export function loadProfile(callback){

onAuthStateChanged(auth, async(user)=>{

if(user){

const ref = doc(db,"users",user.uid);

const snap = await getDoc(ref);

if(snap.exists()){

callback(snap.data());

}

}

});

}

// Update Profile
export async function saveProfile(uid,data){

const ref = doc(db,"users",uid);

await updateDoc(ref,{

name:data.name,

phone:data.phone,

photo:data.photo

});

}

// Update Auth Name
export async function updateUserName(name){

if(auth.currentUser){

await updateProfile(auth.currentUser,{

displayName:name

});

}

}
