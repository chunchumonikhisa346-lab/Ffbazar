import { db } from "./firebase-config.js";

import {
collection,
addDoc,
getDocs,
updateDoc,
deleteDoc,
doc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Add Product
export async function createProduct(product){

await addDoc(collection(db,"products"),{

name:product.name,
price:product.price,
image:product.image,
category:product.category,
status:true,
createdAt:new Date()

});

}

// Get Products
export async function getAllProducts(){

return await getDocs(collection(db,"products"));

}

// Update Product
export async function updateProduct(id,data){

await updateDoc(doc(db,"products",id),{

name:data.name,
price:data.price,
image:data.image,
category:data.category

});

}

// Delete Product
export async function removeProduct(id){

await deleteDoc(doc(db,"products",id));

                }
