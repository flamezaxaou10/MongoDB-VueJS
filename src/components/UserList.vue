<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Users List
      </h2>
      <b-table striped hover :items="users" :fields="fields">
        <template slot="no" scope="row">
          {{row.index + 1}}
        </template>
      </b-table>
      <ul v-if="errors && errors.length">
        <li v-for="error of errors" >
          {{error.message}}
        </li>
      </ul>
    </b-col>
  </b-row>
</template>

<script>
/* eslint-disable */
import axios from 'axios'

export default {
  name: 'BookList',
  data () {
    return {
      fields: {
        no: { lable: 'No.'},
        user: { label: 'Username', sortable: true, 'class': 'text-center' },
        pass: { label: 'Password'}
      },
      users: [],
      errors: []
    }
  },
  created () {
    axios.get(`http://localhost:3000/user`)
    .then(response => {
      this.users = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
  }
}
</script>
