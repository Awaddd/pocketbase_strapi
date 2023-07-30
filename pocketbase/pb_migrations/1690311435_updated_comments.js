migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y1hxtwadaokoqb1")

  // remove
  collection.schema.removeField("h0jq5anw")

  // remove
  collection.schema.removeField("wkmusstb")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y1hxtwadaokoqb1")

  // add
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wkmusstb",
    "name": "replyTo",
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
})
