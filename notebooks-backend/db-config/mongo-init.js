const notebookdbuser = process.env.NOTEBOOKS_DB_USER;
const notebookdbpassword = process.env.NOTEBOOKS_DB_PASSWORD;
const notebookdbname = process.env.NOTEBOOKS_DB_NAME;

console.log(`Connecting to MongoDB with user: ${notebookdbuser}, database: ${notebookdbname}`);
db=db.getSiblingDB(notebookdbname);
db.createUser({
  user: notebookdbuser,
  pwd: notebookdbpassword,
  roles: [
    { 
        role: "readWrite", 
        db: notebookdbname }
  ]});