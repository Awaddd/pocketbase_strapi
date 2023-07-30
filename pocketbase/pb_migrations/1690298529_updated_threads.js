migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ly4q1ptju2qzmz5")

  collection.createRule = "id = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ly4q1ptju2qzmz5")

  collection.createRule = null

  return dao.saveCollection(collection)
})
