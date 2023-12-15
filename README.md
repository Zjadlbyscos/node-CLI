# Contacts Application
The Contacts Application allows you to manage a list of contacts by adding, displaying, removing, and fetching contact information.

## Features

**Displaying the Contact List**
![App look](./img/--action%20list.png)

**Adding a Contact**
![App look](./img/--action%20add.png)

**Fetching a Contact**
![App look](./img/--action%20get--id.png)

**Removing a Contact**
![App look](./img/--action%20remove%20--id.png)


## Usage

**Displaying the Contact List**
1. To display a list of all contacts, use the command:

2. node index.js --action list

**Adding a Contact**
1. To add a new contact, use the command:

2. node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22

**Deleting a Contact**
1. To remove a contact based on its ID, use the command:

2. node index.js --action remove --id " "

**Filtering Contacts**
1. To fetch detailed information about a specific contact, use the command along with its ID:

2. node index.js --action get --id " "
