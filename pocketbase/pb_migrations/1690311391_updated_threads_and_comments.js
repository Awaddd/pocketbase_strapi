migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1drg9qfcpu35hb3")

  // remove
  collection.schema.removeField("nkxyvuth")

  // remove
  collection.schema.removeField("5yxovwit")

  // remove
  collection.schema.removeField("l1ztuv16")

  // remove
  collection.schema.removeField("3sqdme1b")

  // remove
  collection.schema.removeField("cghoushu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "t52vsp6y",
    "name": "comment_id",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "y1hxtwadaokoqb1",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0jkyc6sc",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bgohxmni",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "w6awl4lj",
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
    "id": "d9rgv07h",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1drg9qfcpu35hb3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nkxyvuth",
    "name": "comment_id",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "y1hxtwadaokoqb1",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5yxovwit",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "l1ztuv16",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3sqdme1b",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cghoushu",
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

  // remove
  collection.schema.removeField("t52vsp6y")

  // remove
  collection.schema.removeField("0jkyc6sc")

  // remove
  collection.schema.removeField("bgohxmni")

  // remove
  collection.schema.removeField("w6awl4lj")

  // remove
  collection.schema.removeField("d9rgv07h")

  return dao.saveCollection(collection)
})
