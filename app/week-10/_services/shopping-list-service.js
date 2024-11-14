import {db} from '../_utils/firebase.js';
import {collection, getDocs, addDoc, query} from 'firebase/firestore';

async function getUserItems(userId) {
    const items = [];
    const q = query(collection(db, `users/${userId}/items`));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
    });
    return items;
}

async function addItem(userId, item) {
    const docRef = await addDoc(collection(db, `users/${userId}/items`), item);
    return docRef.id;
}

