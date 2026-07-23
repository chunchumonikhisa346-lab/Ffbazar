import { db } from "./firebase-config.js";

import {
collection,
addDoc,
getDocs,
updateDoc,
deleteDoc,
doc,
query,
where
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Create Order
export async function createOrder(order){

await addDoc(collection(db,"orders"),{

uid:order.uid,
product:order.product,
price:order.price,
playerId:order.playerId,
status:"Pending",
createdAt:new Date()

});

}

// Get All Orders
export async function getOrders(){

return await getDocs(collection(db,"orders"));

}

// Get User Orders
export async function getUserOrders(uid){

const q=query(
collection(db,"orders"),
where("uid","==",uid)
);

return await getDocs(q);

}

// Approve Order
export async function approveOrder(id){

await updateDoc(doc(db,"orders",id),{

status:"Completed"

});

}

// Cancel Order
export async function cancelOrder(id){

await updateDoc(doc(db,"orders",id),{

status:"Cancelled"

});

}

// Delete Order
export async function deleteOrder(id){

await deleteDoc(doc(db,"orders",id));

  }
