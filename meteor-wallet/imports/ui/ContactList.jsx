import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { ContactsCollection } from "../api/ContactsCollection"; // <-- Make sure this path is correct

export const ContactList = () => {

    const contacts = useTracker(() => {
        Meteor.subscribe('contacts');
        return ContactsCollection.find({}).fetch();
    });

    return (
        <>
            <h3>ContactList</h3>
            <ul>
                {contacts.map(contact => (
                    <li key={contact._id || contact.email}>
                        {contact.name} - {contact.email}
                    </li>
                ))}
            </ul>
        </>

    )
}
