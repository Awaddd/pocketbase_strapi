migrate((db) => {
  const collection = new Collection({
    "id": "1drg9qfcpu35hb3",
    "created": "2023-07-25 00:24:34.721Z",
    "updated": "2023-07-25 00:24:34.721Z",
    "name": "threads_and_comments",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "9gvypfun",
        "name": "text",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT\n  threads.id,\n  comments.text\nFROM threads\nINNER JOIN comments ON threads.id=comments.thread_id;"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("1drg9qfcpu35hb3");

  return dao.deleteCollection(collection);
})
