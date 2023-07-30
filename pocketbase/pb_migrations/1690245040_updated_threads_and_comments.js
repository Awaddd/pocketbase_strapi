migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1drg9qfcpu35hb3")

  collection.options = {
    "query": "SELECT\n  threads.id,\n  comments.id as comment_id,\n  threads.article_id,\n  comments.text,\n  comments.author,\n  comments.replyTo,\n  threads.created as threads_created,\n  threads.updated as threads_updated,\n  comments.created as comments_created,\n  comments.updated as comments_updated\nFROM threads\nINNER JOIN comments ON threads.id = comments.thread_id;"
  }

  // remove
  collection.schema.removeField("gowhvpv3")

  // remove
  collection.schema.removeField("m0c9582f")

  // remove
  collection.schema.removeField("xtxnghww")

  // remove
  collection.schema.removeField("l06ix3o5")

  // remove
  collection.schema.removeField("lendtu8d")

  // remove
  collection.schema.removeField("tui48kz0")

  // remove
  collection.schema.removeField("bosyciwj")

  // remove
  collection.schema.removeField("rlesflfj")

  // remove
  collection.schema.removeField("m5habit5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lqff4qvh",
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
    "id": "ueikaidp",
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
    "id": "sdymdxwu",
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
    "id": "f48cjezk",
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
    "id": "ozj0ycl7",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7toputpa",
    "name": "threads_created",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qzzngaxt",
    "name": "threads_updated",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xbh447rt",
    "name": "comments_created",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3arreez1",
    "name": "comments_updated",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1drg9qfcpu35hb3")

  collection.options = {
    "query": "SELECT\n  threads.id,\n  comments.id as comment_id,\n  threads.article_id,\n  comments.text,\n  comments.author,\n  comments.replyTo,\n  threads.created as threadsCreated,\n  threads.updated as threadsUpdated,\n  comments.created as commentsCreated,\n  comments.updated as commentsUpdated\nFROM threads\nINNER JOIN comments ON threads.id = comments.thread_id;"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gowhvpv3",
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
    "id": "m0c9582f",
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
    "id": "xtxnghww",
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
    "id": "l06ix3o5",
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
    "id": "lendtu8d",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tui48kz0",
    "name": "threadsCreated",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bosyciwj",
    "name": "threadsUpdated",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rlesflfj",
    "name": "commentsCreated",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m5habit5",
    "name": "commentsUpdated",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // remove
  collection.schema.removeField("lqff4qvh")

  // remove
  collection.schema.removeField("ueikaidp")

  // remove
  collection.schema.removeField("sdymdxwu")

  // remove
  collection.schema.removeField("f48cjezk")

  // remove
  collection.schema.removeField("ozj0ycl7")

  // remove
  collection.schema.removeField("7toputpa")

  // remove
  collection.schema.removeField("qzzngaxt")

  // remove
  collection.schema.removeField("xbh447rt")

  // remove
  collection.schema.removeField("3arreez1")

  return dao.saveCollection(collection)
})
