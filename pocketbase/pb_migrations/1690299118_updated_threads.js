migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ly4q1ptju2qzmz5")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lbaqdj7e",
    "name": "article",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ly4q1ptju2qzmz5")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lbaqdj7e",
    "name": "article_id",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
