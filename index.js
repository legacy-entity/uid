var uuid = module.exports = function (id) {
  return id || (Math.random() * 10e6 | 0).toString(36)
}

uuid.id = uuid
