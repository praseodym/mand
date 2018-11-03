<template>
  <v-container fluid>
    <v-toolbar>
      <v-toolbar-title class="headline text-uppercase">Mand</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
        style="margin-top: -10px;"
      ></v-text-field>
      <v-dialog v-model="dialog" max-width="500px">
        <v-btn slot="activator" color="primary" dark class="mb-2">New Shortlink</v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-text-field v-model="editedLink.shortlink" label="Shortlink"></v-text-field>
              <v-text-field v-model="editedLink.fullurl" label="Full URL"></v-text-field>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <v-data-table :headers="headers" :items="links" :search="search" hide-actions class="elevation-1">
      <template slot="items" slot-scope="props">
        <td>{{ props.item.shortlink }}</td>
        <td>{{ props.item.fullurl }}</td>
        <td>
          <v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>
          <v-icon small @click="deleteItem(props.item)">delete</v-icon>
        </td>
      </template>
      <template slot="no-data">
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        No results for "{{ search }}".
      </v-alert>
    </v-data-table>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

interface Link {
  shortlink: string
  fullurl: string
}

export default Vue.extend({
  data: () => ({
    search: '',
    dialog: false,
    headers: [
      { text: 'Shortlink', align: 'left', value: 'shortlink' },
      { text: 'Full URL', value: 'fullurl' },
      { text: 'Actions', value: 'name', sortable: false },
    ],
    links: [] as Link[],
    editedIndex: -1,
    editedLink: {
      shortlink: '',
      fullurl: '',
    } as Link,
    defautLink: {
      shortlink: '',
      fullurl: '',
    } as Link,
  }),
  computed: {
    formTitle(): string {
      return this.editedIndex === -1 ? 'New shortlink' : 'Edit shortlink'
    },
  },
  watch: {
    dialog(val) {
      val || this.close()
    },
  },
  created() {
    this.initialize()
  },
  methods: {
    initialize() {
      this.links = [
        { shortlink: 'annu', fullurl: 'https://commissies.ch.tudelft.nl/annucie/' },
        { shortlink: 'annucie', fullurl: 'https://commissies.ch.tudelft.nl/annucie/' },
        { shortlink: 'booksale', fullurl: 'https://ch.tudelft.nl/en/education/book-sale' },
        { shortlink: 'careercollege', fullurl: 'https://ch.tudelft.nl/career/career-college/' },
        { shortlink: 'chipcie', fullurl: 'https://commissies.ch.tudelft.nl/chipcie/' },
      ]
    },
    editItem(link: Link) {
      this.editedIndex = this.links.indexOf(link)
      this.editedLink = Object.assign({}, link)
      this.dialog = true
    },
    deleteItem(link: Link) {
      const index = this.links.indexOf(link)
      confirm('Are you sure you want to delete this item?') && this.links.splice(index, 1)
    },
    close() {
      this.dialog = false
      setTimeout(() => {
        this.editedLink = Object.assign({}, this.defautLink)
        this.editedIndex = -1
      }, 300)
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.links[this.editedIndex], this.editedLink)
      } else {
        this.links.push(this.editedLink)
      }
      this.close()
    },
  },
})
</script>
