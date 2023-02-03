import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { v4 } from "uuid";

const firebaseConfig = {
    apiKey: "AIzaSyBLTQqXDpXwoHIPIj00sqU0HZKtf-FcAaA",
    authDomain: "onlevelcars.firebaseapp.com",
    // databaseURL: "gs://onlevelcars.appspot.com",
    projectId: "onlevelcars",
    storageBucket: "onlevelcars.appspot.com",
    messagingSenderId: "753746285281",
    appId: "1:753746285281:web:6e2e9abc3d85d908dc9da0"
};

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp)


export default storage


export async function uploadFile(file) {
    const storageRef = ref(storage, v4())
    await uploadBytes(storageRef, file)
    const url = await getDownloadURL(storageRef)
    return url
}

export async function uploadArrayFiles(file) {

    const storageRef = ref(storage, v4())
    await uploadBytes(storageRef, file)

    let arrayStringURL = []

    // for (let urlDelFile of storageRef) {
    //     arrayStringURL.push(urlDelFile)
    //     const urls = await getDownloadURL(storageRef)
    //     return urls
    // }

    const url = await getDownloadURL(storageRef)

    arrayStringURL.push(url)

    return arrayStringURL

}


