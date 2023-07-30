migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1drg9qfcpu35hb3")

  collection.options = {
    "query": "SELECT\n  threads.id,\n  comments.id as comment_id,\n  threads.article,\n  comments.text,\n  comments.author,\n  a.name as author_name,\n  comments.replyTo as reply_to,\n  b.name as reply_to_name,\n  comments.created,\n  comments.updated\nFROM threads\nINNER JOIN comments ON threads.id = comments.thread\nLEFT JOIN users as a ON a.id = comments.author\nLEFT JOIN users as b ON b.id = comments.replyTo"
  }

  // remove
  collection.schema.removeField("614wg3xu")

  // remove
  collection.schema.removeField("vsftbz77")

  // remove
  collection.schema.removeField("vyuoxldm")

  // remove
  collection.schema.removeField("flr2izph")

  // remove
  collection.schema.removeField("7o8w65hj")

  // remove
  collection.schema.removeField("gl8udsym")

  // remove
  collection.schema.removeField("zsxjuiu1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sfkw7hjb",
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
    "id": "lx3ahhsd",
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
    "id": "y95xdwlv",
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
    "id": "l0hzqssb",
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
    "id": "mqqkgbum",
    "name": "author_name",
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
    "id": "kc17o5pp",
    "name": "reply_to",
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
    "id": "st8fgplg",
    "name": "reply_to_name",
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
    "query": "SELECT\n  threads.id,\n  comments.id as comment_id,\n  threads.article,\n  comments.text,\n  comments.author,\n  a.name as author_name,\n  comments.replyTo,\n  b.name as reply_to_name,\n  comments.created,\n  comments.updated\nFROM threads\nINNER JOIN comments ON threads.id = comments.thread\nLEFT JOIN users as a ON a.id = comments.author\nLEFT JOIN users as b ON b.id = comments.replyTo"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "614wg3xu",
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
    "id": "vsftbz77",
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
    "id": "vyuoxldm",
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
    "id": "flr2izph",
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
    "id": "7o8w65hj",
    "name": "author_name",
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
    "id": "gl8udsym",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zsxjuiu1",
    "name": "reply_to_name",
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
  collection.schema.removeField("sfkw7hjb")

  // remove
  collection.schema.removeField("lx3ahhsd")

  // remove
  collection.schema.removeField("y95xdwlv")

  // remove
  collection.schema.removeField("l0hzqssb")

  // remove
  collection.schema.removeField("mqqkgbum")

  // remove
  collection.schema.removeField("kc17o5pp")

  // remove
  collection.schema.removeField("st8fgplg")

  return dao.saveCollection(collection)
})
