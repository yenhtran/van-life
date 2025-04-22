import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBMjXMPgaDbldQOh7-g6vl_dbgxef4P2m0",
  authDomain: "vanlife-19de6.firebaseapp.com",
  projectId: "vanlife-19de6",
  storageBucket: "vanlife-19de6.firebasestorage.app",
  messagingSenderId: "83192272830",
  appId: "1:83192272830:web:64bebd90cf649aa3188bef"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const vansCollectionRef = collection(db, "vans")

export async function getVans() {
  const snapshot = await getDocs(vansCollectionRef)
  const vans = snapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }))
  return vans
}

export async function getVan(id) {
  const docRef = doc(db, "vans", id);
  const snapshot = await getDoc(docRef);
  return {
    ...snapshot.data(),
    id: snapshot.id
  }
}

export async function getHostVans(id) {
  const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
  const res = await fetch(url)
  if (!res.ok) {
    throw {
      message: 'Failed to fetch vans',
      statusText: res.statusText,
      status: res.status
    }
  }
  const data = await res.json();
  return data.vans
}

export async function loginUser(creds) {
  const res = await fetch('/api/login', { method: 'post', body: JSON.stringify(creds) })

  const data = await res.json()
  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status
    }
  }
  return data
}