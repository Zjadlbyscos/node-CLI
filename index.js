//npm run start:dev
const { listContacts, getContactById, removeContact, addContact,getContacts } = require('./db/contacts');

const { Command } = require("commander");

const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();


function invokeAction({ action, id, name, email, phone }) {
    const contacts = getContacts();

  switch (action) {
    case "list":
        listContacts(contacts);
      break;

    case "get":
        getContactById(contacts, id);
      break;

    case "add":
        addContact(contacts, name, email, phone);
      break;

    case "remove":
        removeContact(contacts, id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);

