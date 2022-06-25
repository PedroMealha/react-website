import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { collection, query, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_JwwhTgImFh-bEzuDjkwwzUzKwsLWyqE",
  authDomain: "my-website-839f8.firebaseapp.com",
  projectId: "my-website-839f8",
  storageBucket: "my-website-839f8.appspot.com",
  messagingSenderId: "359510626595",
  appId: "1:359510626595:web:57032b3200ef73e5bb3c96",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();

export const getStackFromFirestore = async () => {
  const collectionRef = collection(db, 'my_stack');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

// * import DB to Firestore
// ! add { doc, collection, writeBatch } from "firebase/firestore";
// export const addCollectionSkills = async (collectionKey, objectsToAdd) => {
// 	console.log('collectionKey:', collectionKey);
// 	console.log('objectsToAdd:', objectsToAdd);
// 	const collectionRef = collection(db, collectionKey);
// 	const batch = writeBatch(db);

// 	objectsToAdd.forEach(object => {
// 		const docRef = doc(collectionRef, object.area.toLowerCase());
// 		batch.set(docRef, object);
// 	});

// 	await batch.commit();
// 	console.log('done');
// }
// addCollectionSkills('my_stack', STACK_DATA);

// ! import STACK_DATA from './skills.db';
// ! import { addCollectionSkills } from "../../firebase/firebase.utils";

// ! addCollectionSkills('my_stack', STACK_DATA);
