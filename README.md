# React Kanban
===============

## Run On Your Local Machine

1. Set up a postgreSQL database with a database name, username, and password
2. Clone this repository
3. Edit the config_example.json in the config folder of this repo
  - Enter your database username
  - Enter your database name
  - Enter your database password
4. Rename the config_example.json file to config.json
5. cd into react-kanban/server
6. Run `npm install`
7. Run `sequelize db:migrate`
8. Run `nodemon server.js`
9. Leave that terminal window open and running, and open another terminal window
10. In that new terminal window, cd into react-kanban/client
11. Run `npm install`
12. Run `npm run start`
13. Load `localhost:3000` in your browser
14. Create a new task!

-------

## Introduction
Build a Digital Kanban board using:
- **React** for building the front-end User-Interface (UI)
- HTML and CSS (via [sass](https://sass-lang.com))
- **Express** as the Server
- **Sequelize** as your ORM for the **Postgresql** Datastore.

## Layout/Style Guide
![screen shot 2016-11-04 at 1 21 12 pm](https://cloud.githubusercontent.com/assets/4650739/20025357/afd23626-a291-11e6-9d34-667a64ead92d.png)


## Specifications

### Card (component)
Cards contain information about a task.

#### Card Properties

A Card has 6 properties:
  1. A unique identifier, e.g. "Card-Id #001".
  1. A Title
  1. A priority selection
  1. A status, the status of a card. Should match the column the card can be found in. Columns: "Queue", "In Progress", or "Done".
  1. A "Created by" field. This should display name of the person who created the task.
  1. An "Assigned to field". This should display the name of the person who is currently working on the task.

#### Creating a new Card
There should be a form which is used to create a new Card. When a card is first created we need minimal information, the information needed is:
  - Title (String)
  - Priority (low, Medium, High, Blocker)
  - Created By (Full Name)
  - Assigned To (Full Name)

All other fields are not needed when creating a new Card. The other fields: "Unique Identifier", and "Status" fields will be automatically added by the application.

### Cards in Columns
When a Card appears in a column there should be a way (something clickable?) to move that card to either the next or previous column.


### Columns (component)
Columns contain Cards and each column is a collection of Cards that share the same status.

The board you will building will have **3 columns**:
  - Queue
    - A card will automatically appear in this column after creation.
  - In Progress
    - When a card is being worked on it should be displayed in this column.
  - Done
    - When work has finished on a card it should be displayed in this column.

**caveat: do not try to implement click-and-drag just yet, save it as a stretch goal!**

### Kanban Board (Main Component)
A Kanban board contains multiple Columns (and Columns contain Cards). This is the main application component. It is responsible for retreiving data and *passing it down* to other child components.

### Server
Build an Express server which will serve your `index.html` and static assets.

#### Routes

Your server will have these routes:
  - RESTful API endpoints to create, read, update, and delete kanban cards for your application.
    - Remember to use MVC architechture: Models, Views, Controllers!
  - One route to

### Database
MongoDB and Mongoose (ORM). Create a UML Schema for your database, consider [LucidChart](https://www.lucidchart.com/). Add these diagrams to your project.

### Styles
Make It Pretty!™

#### Responsive Layout
- create a desktop and mobile view. Tablet view is not needed (possible stretch goal).

## References

### Kanban Servies

[Trello](http://www.trello.com)

[Taiga](http://www.taiga.io)

[Asana](http://www.asana.com)
