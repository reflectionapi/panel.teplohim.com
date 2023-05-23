import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', {
  state: () => ({
    users: []
  }),
  getters: {
    getUsers(state) {
      return state.users
    }
  },
  actions: {
    async fetchUsers() {
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://dc-master.teplohim.com/univention/udm/users/user/?query*=*',
        headers: {
          Accept: 'application/json',
          Authorization: 'Basic QWRtaW5pc3RyYXRvcjpnb2hub3gzcw=='
        }
      }
      axios
        .request(config)
        .then((response) => {
          let obj = response.data._embedded['udm:object']
          let data = []
          obj.forEach((el) => {
            if (
              el.id != 'join-backup' &&
              el.id != 'join-slave' &&
              el.id != 'ucs-sso' &&
              el.id != 'vrnteplohim' &&
              el.id != 'dns-dc-master' &&
              el.id != 'Guest' &&
              el.id != 'krbtgt' &&
              el.id != 'c1getmail' &&
              el.id != 'OSB' &&
              el.id != 'Info' &&
              el.id != 'admin' &&
              el.id != 'Administrator'
            ) {
              data.push({
                login: el.id,
                name: el.properties.lastname + ' ' + el.properties.firstname,
                mail: el.properties.mailPrimaryAddress,
                phone: el.properties.phone[0],
                mashine: el.properties.LastLoginMachine
              })
            }
          })
          this.users = data
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
})
