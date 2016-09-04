/* global Mongo */

Users = new Mongo.Collection('Users')
Businesses = new Mongo.Collection('Businesses')
Reservations = new Mongo.Collection('Reservations')

Users.allow({
  insert: function () {
    return true
  }
})
