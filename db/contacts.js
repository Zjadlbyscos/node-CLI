const fs = require('fs');
const path = require('path');
const contactsPath = path.join(__dirname, 'contacts.json');

function getContacts() {
	const contacts = fs.readFileSync(contactsPath, 'utf8');
	return JSON.parse(contacts);
}

function listContacts() {
	const contacts = getContacts();
	console.table(contacts);
}

function getContactById(contactId) {
	const contacts = getContacts();

	const contact = contacts.find((contact) => contact.id === contactId);
	if (contact) {
		console.table(contact);
	} else {
		console.log('Contact not found');
	}
	return contact;
}

function removeContact(contactId) {
	let contacts = getContacts();
	const contactIndex = contacts.findIndex((contact) => contact.id === contactId);

	if (contactIndex !== -1) {
		contacts.splice(contactIndex, 1);

		fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2), (err) => {
			if (err) {
				console.error('Error writing contacts file:', err);
				return;
			}
			console.log('Contact removed successfully.');
		});
	} else {
		console.log('Contact not found');
	}
}

function addContact(name, email, phone) {
	const contact = {
		id: Date.now(),
		name,
		email,
		phone
	};
	fs.readFile(contactsPath, 'utf8', (err, contacts) => {
		if (err) {
			console.log(err);
			return;
		}
		const contactsObject = JSON.parse(contacts);
		contactsObject.push(contact);
		fs.writeFile(contactsPath, JSON.stringify(contactsObject, null, 2), (err) => {
			if (err) {
				console.log(err);
				return;
			}
			console.log('Contact added successfully.');
		});
	});
}

module.exports = {
	getContacts,
	listContacts,
	getContactById,
	removeContact,
	addContact
};
