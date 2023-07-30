migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y1hxtwadaokoqb1")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h0jq5anw",
    "name": "author",
    "type": "text",
    "required": false,
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
  const collection = dao.findCollectionByNameOrId("y1hxtwadaokoqb1")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h0jq5anw",
    "name": "author",
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
