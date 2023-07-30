migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y1hxtwadaokoqb1")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bhoepurq",
    "name": "thread",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "ly4q1ptju2qzmz5",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y1hxtwadaokoqb1")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bhoepurq",
    "name": "thread_id",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "ly4q1ptju2qzmz5",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
