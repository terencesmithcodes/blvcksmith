Then("the DynamoDB Item with partition key {string} as {string} exists. tableName: {string}", 
    async function (key, value, tableName) {
        // Get table name and set up key
        const ddbTableName = dynamoUtil.getTableName(tableName);
        const primaryKey = {};
        primaryKey[key] = this[value];

        // Add logging to help debug
        this.logger(`Attempting to find item in table: ${ddbTableName}`);
        this.logger(`Looking for key: ${key} with value: ${this[value]}`);
        this.logger(`Full primary key: ${JSON.stringify(primaryKey)}`);

        try {
            // First attempt to get the item directly
            const response = await dynamoUtil.getItemByKey.call(
                this,
                this.dynamoDbClient,
                ddbTableName,
                primaryKey
            );

            // Add more detailed logging
            if (response?.Item) {
                this.logger(`Item found on first attempt: ${JSON.stringify(response.Item)}`);
            } else {
                this.logger('Item not found on first attempt, will retry...');
            }

            // Use assertWithRetry with more specific error handling
            this.dynamoItem = await dynamoUtil.assertWithRetry.call(
                this,
                response?.Item,
                (item) => {
                    assert.notEqual(
                        item,
                        undefined,
                        common.assertMessage.call(
                            this,
                            `Unable to retrieve records from ${ddbTableName} with keys ${JSON.stringify(primaryKey)}`
                        )
                    );
                },
                {
                    retryCount: 3,  // Adjust as needed
                    retryDelay: 1000,  // 1 second between retries
                    onRetry: (attempt) => {
                        this.logger(`Retry attempt ${attempt} for key ${JSON.stringify(primaryKey)}`);
                    }
                }
            );

            // Success logging
            this.logger(`DynamoDB Item with partition key ${key} as ${value} successfully found`);
            
            // Optional: Log the found item for debugging
            this.logger(`Found item: ${JSON.stringify(this.dynamoItem)}`);

        } catch (error) {
            // Enhanced error logging
            this.logger(`Error finding DynamoDB item: ${error.message}`);
            this.logger(`AWS Region: ${this.dynamoDbClient.config.region}`);
            this.logger(`Table name: ${ddbTableName}`);
            this.logger(`Primary key used: ${JSON.stringify(primaryKey)}`);
            
            // Rethrow with more context
            throw new Error(`Failed to find DynamoDB item: ${error.message}. Check logs for details.`);
        }
    }
);
