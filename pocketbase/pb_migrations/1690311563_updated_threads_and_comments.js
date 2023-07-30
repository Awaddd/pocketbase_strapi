migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1drg9qfcpu35hb3")

  // remove
  collection.schema.removeField("oprbkz8f")

  // remove
  collection.schema.removeField("vaqqtzdo")

  // remove
  collection.schema.removeField("tqf0vhf7")

  // remove
  collection.schema.removeField("kca5k9qy")

  // remove
  collection.schema.removeField("qit2vqvy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "spqc2cpk",
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
    "id": "mbt1qrxk",
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
    "id": "qyjigaa8",
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
    "id": "bkuhvpms",
    "name": "author",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ufi2yn2x",
    "name": "replyTo",
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
  const collection = dao.findCollectionByNameOrId("1drg9qfcpu35hb3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oprbkz8f",
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
    "id": "vaqqtzdo",
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
    "id": "tqf0vhf7",
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
    "id": "kca5k9qy",
    "name": "author",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qit2vqvy",
    "name": "replyTo",
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

  // remove
  collection.schema.removeField("spqc2cpk")

  // remove
  collection.schema.removeField("mbt1qrxk")

  // remove
  collection.schema.removeField("qyjigaa8")

  // remove
  collection.schema.removeField("bkuhvpms")

  // remove
  collection.schema.removeField("ufi2yn2x")

  return dao.saveCollection(collection)
})
