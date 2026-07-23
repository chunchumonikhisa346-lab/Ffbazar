// admin.js

import { getOrders, approveOrder, cancelOrder } from "./orders.js";
import { getAddMoney } from "./database.js";
import { getAllProducts } from "./products.js";

// Dashboard Load
export async function loadDashboard() {

    const products = await getAllProducts();
    const orders = await getOrders();
    const deposits = await getAddMoney();

    console.log("Products:", products.size);
    console.log("Orders:", orders.size);
    console.log("Deposits:", deposits.size);

}

// Load Orders
export async function loadOrders() {

    const snapshot = await getOrders();

    snapshot.forEach((doc) => {

        console.log(doc.id, doc.data());

    });

}

// Approve Order
export async function completeOrder(id) {

    await approveOrder(id);

    alert("Order Completed");

}

// Cancel Order
export async function rejectOrder(id) {

    await cancelOrder(id);

    alert("Order Cancelled");

}

// Load Add Money Requests
export async function loadDeposits() {

    const snapshot = await getAddMoney();

    snapshot.forEach((doc) => {

        console.log(doc.id, doc.data());

    });

                     }
