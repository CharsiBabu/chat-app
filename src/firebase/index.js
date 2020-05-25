import * as firebase from 'firebase/app'
// import { formatMessage } from '@/helpers/dataFormat.js'
// eslint-disable-next-line no-unused-vars
import firestore from 'firebase/firestore'

const config = {
  apiKey: process.env.VUE_APP_apiKey,
  authDomain: process.env.VUE_APP_authDomain,
  databaseURL: process.env.VUE_APP_databaseURL,
  projectId: process.env.VUE_APP_projectId,
  storageBucket: process.env.VUE_APP_storageBucket,
  messagingSenderId: process.env.VUE_APP_messagingSenderId
}
const firebaseApp = firebase.initializeApp(config)
// firebaseApp.firestore().settings({ timestampsInSnapshots: true })
const fs = firebaseApp.firestore()
const db = fs.collection('messages')

const sendMessage = (payLoad) => {
  db.add(payLoad).catch(err => {
    console.log(err)
  })
}

/* const fetchMessage = () => {
  const ref = db.orderBy('timestamp')
  ref.onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
      if (change.type === 'added') {
        return formatMessage(change)
      }
    })
  })
} */

export {
  sendMessage,
  db
}
