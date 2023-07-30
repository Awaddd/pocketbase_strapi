migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1drg9qfcpu35hb3")

  collection.options = {
    "query": "SELECT\n  threads.id,\n  comments.id as comment_id,\n  threads.article,\n  comments.text,\n  comments.author,\n  comments.replyTo,\n  comments.created,\n  comments.updated\nFROM threads\nINNER JOIN comments ON threads.id = comments.thread;"
  }

  // remove
  collection.schema.removeField("9an35nv6")

  // remove
  collection.schema.removeField("eoq2jp95")

  // remove
  collection.schema.removeField("ssif5dxd")

  // remove
  collection.schema.removeField("j7er9vre")

  // remove
  collection.schema.removeField("ekkw2oii")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1drg9qfcpu35hb3")

  collection.options = {
    "query": "SELECT\n  threads.id,\n  comments.id as comment_id,\n  threads.article_id,\n  comments.text,\n  comments.author,\n  comments.replyTo,\n  comments.created,\n  comments.updated\nFROM threads\nINNER JOIN comments ON threads.id = comments.thread_id;"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9an35nv6",
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
    "id": "eoq2jp95",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ssif5dxd",
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
    "id": "j7er9vre",
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
    "id": "ekkw2oii",
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
  collection.schema.removeField("nkxyvuth")

  // remove
  collection.schema.removeField("5yxovwit")

  // remove
  collection.schema.removeField("l1ztuv16")

  // remove
  collection.schema.removeField("3sqdme1b")

  // remove
  collection.schema.removeField("cghoushu")

  return dao.saveCollection(collection)
})
