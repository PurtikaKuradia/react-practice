import { useState } from "react";
import ContactList from "./contactList";
import Chat from "./chat";

export default function ContactApp() {
  const [to, setTo] = useState(contacts[0]);

  return (
    <div>
      <ContactList
        selectedContact={to}
        contacts={contacts}
        onSelect={(contact) => setTo(contact)}
      />
      <Chat key={to.id} contact={to} />
    </div>
  );
}
const contacts = [
  { id: 1, name: "Sheldon", email: "bajinga@gmail.com" },
  { id: 2, name: "Leonard", email: "leonard@gmail.com" },
  { id: 3, name: "Rajesh", email: "kuthrapalli@gmail.com" },
];
