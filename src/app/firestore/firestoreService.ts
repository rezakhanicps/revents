import {
    getFirestore,
    collection,
    getDocs,
    DocumentData,
    QueryDocumentSnapshot,
    Timestamp,
    query,
    onSnapshot,
} from 'firebase/firestore';
import { app } from '../config/firbase';

const db = getFirestore(app);

export const dataFromSnapshot = (
    snapshot: QueryDocumentSnapshot<DocumentData>
): Event | undefined => {
    if (!snapshot.exists) return undefined;
    const data = snapshot.data();

    for (const prop in data) {
        if (data.hasOwnProperty(prop)) {
            if (data[prop] instanceof Timestamp) {
                data[prop] = data[prop].toDate();
            }
        }
    }

    return {
        ...(data as Event),
        id: snapshot.id,
    };
};


export const loadEvents = () => {
    return new Promise<(Event | undefined)[]>((resolve, reject) => {
        const recentMessagesQuery = query(collection(getFirestore(), 'events'));
        onSnapshot(recentMessagesQuery, (snapshot) => {
            const eventList = snapshot
                .docChanges()
                .map((doc) => dataFromSnapshot(doc.doc));
            console.log(eventList)
            resolve(eventList);
        });
    });
};
