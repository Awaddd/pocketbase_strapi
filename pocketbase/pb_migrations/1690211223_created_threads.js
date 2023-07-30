migrate((db) => {
  const collection = new Collection({
    "id": "ly4q1ptju2qzmz5",
    "created": "2023-07-24 15:07:03.598Z",
    "updated": "2023-07-24 15:07:03.598Z",
    "name": "threads",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xmyximtd",
        "name": "article",
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
    "createRule": "id = @request.auth.id",
    "updateRule": "id = @request.auth.id",
    "deleteRule": "id = @request.auth.id",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ly4q1ptju2qzmz5");

  return dao.deleteCollection(collection);
})
