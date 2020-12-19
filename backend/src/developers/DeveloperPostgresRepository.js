const PostgresRepository = require("../common/PostgresRepository");
const Developer = require("./Developer");

class DeveloperPostgresRepository extends PostgresRepository {
  constructor() {
    super("developers");
  }

  toModel(attrs) {
    return new Developer({
      ...attrs,
      foundedDate: new Date(attrs.foundedDate).toISOString()
    });
  }
}

module.exports = DeveloperPostgresRepository;
