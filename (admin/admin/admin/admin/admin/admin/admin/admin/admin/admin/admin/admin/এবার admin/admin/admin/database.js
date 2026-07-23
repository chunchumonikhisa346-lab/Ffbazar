import { db } from "./firebase-config.js";

import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Add User
export async function addUser(data){
  return await addDoc(collection(db,"users"),data);
}

// Get Users
export async function getUsers(){
  return await getDocs(collection(db,"users"));
}

// Add Product
export async function addProduct(data){
  return await addDoc(collection(db,"products"),data);
}

// Get Products
export async function getProducts(){
  return await getDocs(collection(db,"products"));
}

// Add Order
export async function addOrder(data){
  return await addDoc(collection(db,"orders"),data);
}

// Get Orders
export async function getOrders(){
  return await getDocs(collection(db,"orders"));
}

// Add Money Request
export async function addMoney(data){
  return await addDoc(collection(db,"addMoney"),data);
}

// Get Add Money Requests
export async function getAddMoney(){
  return await getDocs(collection(db,"addMoney"));
}

// Update Balance
export async function updateBalance(id,balance){
  const ref=doc(db,"users",id);

  return await updateDoc(ref,{
    balance:balance
  });
}

// Delete Product
export async function deleteProduct(id){
  return await deleteDoc(doc(db,"products",id));
}
