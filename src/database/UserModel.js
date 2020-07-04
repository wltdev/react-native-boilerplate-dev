import Realm from 'realm'

const userSchema = {
  name: 'user',
  primaryKey: '_id',
  properties: {
    _id: 'string',
    name: 'string',
    email: 'string',
    position: 'string',
    peladas: 'string[]'
  },
  token: 'string'
}

const userRealm = new Realm({ schema: [userSchema] })

export default userRealm
