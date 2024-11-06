Then(
  "the DynamoDB Item with partition key {string} as {string} exists. tableName: {string}",
  async function (key, value, tableName) {
    const ddbTableName = dynamoUtil.getTableName(tableName);
    const primaryKey = {};
    primaryKey[key] = this[value];
    const response = await dynamoUtil.getItemByKey.call(
      this,
      this.dynamoDbClient,
      ddbTableName,
      primaryKey
    );
    const item = response?.Item;
    this.dynamoItem = await dynamoUtil.assertWithRetry.call(
      this,
      item,
      (item) => {
        assert.notEqual(
          item,
          undefined,
          common.assertMessage.call(
            this,
            `Unable to retrieve records from ${ddbTableName} with keys ${JSON.stringify(
              primaryKey
            )}`
          )
        );
      }
    );
    this.logger(
      `DynamoDB Item with partition key ${key} as ${value} successfully found`
    );
  }
);
