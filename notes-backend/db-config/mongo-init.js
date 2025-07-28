const notesdbuser = process.env.NOTES_DB_USER;
const notesdbpassword = process.env.NOTES_DB_PASSWORD;
const notesdbname = process.env.NOTES_DB_NAME;

console.log(`Connecting to MongoDB with user: ${notesdbuser}, database: ${notesdbname}`);
db=db.getSiblingDB(notesdbname);
db.createUser({
  user: notesdbuser,
  pwd: notesdbpassword,
  roles: [
    { 
        role: "readWrite", 
        db: notesdbname }
  ]});