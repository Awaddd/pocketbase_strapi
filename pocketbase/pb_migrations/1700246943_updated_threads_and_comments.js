/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1drg9qfcpu35hb3")

  collection.options = {
    "query": "SELECT\n  threads.id,\n  comments.id as comment_id,\n  threads.article,\n  comments.text,\n  comments.author,\n  a.username as author_name,\n  comments.reply_to,\n  b.username as reply_to_name,\n  comments.created,\n  comments.updated\nFROM threads\nINNER JOIN comments ON threads.id = comments.thread\nLEFT JOIN users as a ON a.id = comments.author\nLEFT JOIN users as b ON b.id = comments.reply_to"
  }

  // remove
  collection.schema.removeField("sbr3m4k6")

  // remove
  collection.schema.removeField("qdcvwrpm")

  // remove
  collection.schema.removeField("bscoq9lv")

  // remove
  collection.schema.removeField("kbcjxpdq")

  // remove
  collection.schema.removeField("shxz0msz")

  // remove
  collection.schema.removeField("djbjtcmx")

  // remove
  collection.schema.removeField("dfxbmisi")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rp427cst",
    "name": "comment_id",
    "type": "relation",
    "required": false,
    "presentable": false,
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
    "id": "ubqhziqp",
    "name": "article",
    "type": "text",
    "required": true,
    "presentable": false,
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
    "id": "vewkgz2l",
    "name": "text",
    "type": "text",
    "required": true,
    "presentable": false,
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
    "id": "pqsu30zk",
    "name": "author",
    "type": "relation",
    "required": true,
    "presentable": false,
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
    "id": "i07dq18m",
    "name": "author_name",
    "type": "text",
    "required": false,
    "presentable": false,
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
    "id": "dh8fobio",
    "name": "reply_to",
    "type": "relation",
    "required": false,
    "presentable": false,
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
    "id": "xhrkxpsl",
    "name": "reply_to_name",
    "type": "text",
    "required": false,
    "presentable": false,
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
    "query": "SELECT\n  threads.id,\n  comments.id as comment_id,\n  threads.article,\n  comments.text,\n  comments.author,\n  a.name as author_name,\n  comments.reply_to,\n  b.name as reply_to_name,\n  comments.created,\n  comments.updated\nFROM threads\nINNER JOIN comments ON threads.id = comments.thread\nLEFT JOIN users as a ON a.id = comments.author\nLEFT JOIN users as b ON b.id = comments.reply_to"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sbr3m4k6",
    "name": "comment_id",
    "type": "relation",
    "required": false,
    "presentable": false,
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
    "id": "qdcvwrpm",
    "name": "article",
    "type": "text",
    "required": true,
    "presentable": false,
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
    "id": "bscoq9lv",
    "name": "text",
    "type": "text",
    "required": true,
    "presentable": false,
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
    "id": "kbcjxpdq",
    "name": "author",
    "type": "relation",
    "required": true,
    "presentable": false,
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
    "id": "shxz0msz",
    "name": "author_name",
    "type": "text",
    "required": false,
    "presentable": false,
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
    "id": "djbjtcmx",
    "name": "reply_to",
    "type": "relation",
    "required": false,
    "presentable": false,
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
    "id": "dfxbmisi",
    "name": "reply_to_name",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("rp427cst")

  // remove
  collection.schema.removeField("ubqhziqp")

  // remove
  collection.schema.removeField("vewkgz2l")

  // remove
  collection.schema.removeField("pqsu30zk")

  // remove
  collection.schema.removeField("i07dq18m")

  // remove
  collection.schema.removeField("dh8fobio")

  // remove
  collection.schema.removeField("xhrkxpsl")

  return dao.saveCollection(collection)
})
