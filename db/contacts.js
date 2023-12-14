const fs = require('fs');
const path = require('path');
const contactsPath = path.join(__dirname, 'contacts.json');
// const contactsPath = path.join(__dirname, 'db', 'contacts.json');






function listContacts() {
	// Otwórz plik i odczytaj jego zawartość
	fs.readFile(contactsPath, 'utf8', (err, contacts) => {
		if (err) {
			console.log(err);
			return;
		}
		const contactsObject = JSON.parse(contacts);

		// Wyświetl listę kontaktów
		for (const contact of contactsObject) {
			console.log(contact);
		}
	});
}

// console.log(listContacts())

function getContactById(contactId) {
	// Otwórz plik i odczytaj jego zawartość
	fs.readFile(contactsPath, 'utf8', (err, contacts) => {
		if (err) {
			console.log(err);
			return;
		}
		const contactsObject = JSON.parse(contacts);

		const contact = contactsObject.find((contact) => contact.id === contactId);
		if (contact) {
			console.log(contact);
		} else {
			console.log('Contact not found');
		}
	});
}
// console.log(getContactById("1"));






function removeContact(contactId) {
	// Otwórz plik i odczytaj jego zawartość
	fs.readFile(contactsPath, 'utf8', (err, contacts) => {
		if (err) {
			console.log(err);
			return;
		}

		// Konwertuj zawartość pliku na obiekt JSON
		const contactsObject = JSON.parse(contacts);

		// Znajdź kontakt o podanym identyfikatorze
		const contactToRemove = contactsObject.find((contact) => contact.id === contactId);

		// Usuń kontakt z obiektu
		contactsObject.splice(contactsObject.indexOf(contactToRemove), 1);

		// Zapisz nową zawartość pliku
		fs.writeFile(contactsPath, JSON.stringify(contactsObject), (err) => {
			if (err) {
				console.log(err);
				return;
			}
		});
	});
}

function addContact(name, email, phone) {
	// Utwórz nowy obiekt kontakt
	const contact = {
		id: Date.now(),
		name,
		email,
		phone
	};

	// Otwórz plik i odczytaj jego zawartość
	fs.readFile(contactsPath, 'utf8', (err, contacts) => {
		if (err) {
			console.log(err);
			return;
		}

		// Konwertuj zawartość pliku na obiekt JSON
		const contactsObject = JSON.parse(contacts);

		// Dodaj nowy kontakt do obiektu
		contactsObject.push(contact);

		// Zapisz nową zawartość pliku
		fs.writeFile(contactsPath, JSON.stringify(contactsObject), (err) => {
			if (err) {
				console.log(err);
				return;
			}
		});
	});
}

module.exports = {
	listContacts,
	getContactById,
	removeContact,
	addContact
};
