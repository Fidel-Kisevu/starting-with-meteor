import React, {useState} from "react";
import { ContactsCollection } from '/imports/api/ContactsCollection';

export const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const saveContact = () =>{
        console.log(name, email, imageUrl);
        ContactsCollection.insert(({name, email, imageUrl}));

        setEmail('');
        setName('');
        setImageUrl('');


    }

    return <form>
        <div>
            <label htmlFor="name">Name</label>
            <input id="name" value={name}
                   onChange ={(e) => setName(e.target.value)}
                   type="text" />
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input id="email" value={email}
                   onChange ={(e) => setEmail(e.target.value)}
                   type="email" />
        </div>
        <div>
            <label htmlFor="imageUrl">Image URL</label>
            <input id="imageurl" value={imageUrl}
                   onChange ={(e) => setImageUrl(e.target.value)}
                   type="text" />
        </div>
        <div>
            <button type="button" onClick={saveContact}>Save Contact</button>
        </div>
    </form>
}