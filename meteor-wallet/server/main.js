import { ContactsCollection } from '/imports/api/ContactsCollection';

Meteor.publish('contacts', function () {
    return ContactsCollection.find();
});
