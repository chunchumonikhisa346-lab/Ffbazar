import { storage } from "./firebase-config.js";

import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

// Upload Image
export async function uploadImage(file, folder = "products") {

  const fileName = Date.now() + "_" + file.name;

  const storageRef = ref(storage, `${folder}/${fileName}`);

  await uploadBytes(storageRef, file);

  return await getDownloadURL(storageRef);

}

// Delete Image
export async function deleteImage(imagePath) {

  const imageRef = ref(storage, imagePath);

  await deleteObject(imageRef);

}
