/**
 * @author Halil Ibrahim Sener <hisener@yahoo.com>
 * @see https://atmospherejs.com/aldeed/collection2
 */

/* global SimpleSchema, Users, Businesses, Reservations */

let UserSchema = new SimpleSchema({
  username: {
    type: String,
    label: 'Username of the user.',
    regEx: /^[\w]{3,15}$/
  },
  userType: {
    type: String,
    label: 'User type of the user. It can be either client or business.',
    regEx: /^client|business$/i
  },
  contact: {
    type: String,
    label: 'Contact info of the user.',
    optional: true
  }
})
Users.attachSchema(UserSchema)

let BusinessSchema = new SimpleSchema({
  owner: {
    type: String,
    label: 'Owner of the business.'
  },
  name: {
    type: String,
    label: 'Name of the business.'
  },
  businessHours: {
    type: String,
    label: 'Business hours of the business.',
    regEx: /^\d{1,2}:\d{1,2} [A|P]M - \d{1,2}:\d{1,2} [A|P]M$/ // like '10:30 AM - 4:45 PM'
  },
  address: {
    type: String,
    label: 'Address of the business.'
  },
  location: {
    type: String,
    label: 'Location of the business.',
    optional: true
  }
})
Businesses.attachSchema(BusinessSchema)

// Need to be more clear
let ReservationSchema = new SimpleSchema({
  userId: {
    type: String,
    label: 'User ID'
  },
  businessId: {
    type: String,
    label: 'Business ID'
  },
  timeSlot: {
    type: String,
    label: 'Time Slot'
  }
})
Reservations.attachSchema(ReservationSchema)
