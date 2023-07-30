migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1drg9qfcpu35hb3")

  collection.options = {
    "query": "SELECT\n  threads.id,\n  threads.article_id,\n  comments.text\nFROM threads\nINNER JOIN comments ON threads.id=comments.thread_id;"
  }

  // remove
  collection.schema.removeField("9gvypfun")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "evih353a",
    "name": "article_id",
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
    "id": "mx1hnj54",
    "name": "text",
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
  const collection = dao.findCollectionByNameOrId("1drg9qfcpu35hb3")

  collection.options = {
    "query": "SELECT\n  threads.id,\n  comments.text\nFROM threads\nINNER JOIN comments ON threads.id=comments.thread_id;"
  }

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // remove
  collection.schema.removeField("evih353a")

  // remove
  collection.schema.removeField("mx1hnj54")

  return dao.saveCollection(collection)
})
