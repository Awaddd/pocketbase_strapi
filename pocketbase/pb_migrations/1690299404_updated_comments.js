migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y1hxtwadaokoqb1")

  collection.createRule = ""
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y1hxtwadaokoqb1")

  collection.createRule = null
  collection.updateRule = "id = @request.auth.id"
  collection.deleteRule = "id = @request.auth.id"

  return dao.saveCollection(collection)
})
