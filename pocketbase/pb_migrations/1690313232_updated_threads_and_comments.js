migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1drg9qfcpu35hb3")

  collection.options = {
    "query": "SELECT\n  threads.id,\n  comments.id as comment_id,\n  threads.article,\n  comments.text,\n  comments.author,\n  comments.replyTo,\n  comments.created,\n  comments.updated\nFROM threads\nINNER JOIN comments ON threads.id = comments.thread\nLEFT JOIN users ON users.id = comments.author\nLEFT JOIN users as b ON b.id = comments.replyTo"
  }

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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zweu9vdk",
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
    "id": "xpadp8dy",
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
    "id": "gjbqvspj",
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
    "id": "psaaojpn",
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
    "id": "7tzsxwnj",
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

  collection.options = {
    "query": "SELECT\n  threads.id,\n  comments.id as comment_id,\n  threads.article,\n  comments.text,\n  comments.author,\n  comments.replyTo,\n  comments.created,\n  comments.updated\nFROM threads\nINNER JOIN comments ON threads.id = comments.thread;"
  }

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

  // remove
  collection.schema.removeField("zweu9vdk")

  // remove
  collection.schema.removeField("xpadp8dy")

  // remove
  collection.schema.removeField("gjbqvspj")

  // remove
  collection.schema.removeField("psaaojpn")

  // remove
  collection.schema.removeField("7tzsxwnj")

  return dao.saveCollection(collection)
})
