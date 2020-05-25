import moment from 'moment'
export const formatMessage = data => {
  const doc = data.doc
  return {
    id: doc.id,
    name: doc.data().name,
    message: doc.data().message,
    timestamp: moment(doc.data().timestamp).format('LTS')
  }
}
