migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ly4q1ptju2qzmz5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "78bnmqn9",
    "name": "user_id",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ly4q1ptju2qzmz5")

  // remove
  collection.schema.removeField("78bnmqn9")

  return dao.saveCollection(collection)
})
