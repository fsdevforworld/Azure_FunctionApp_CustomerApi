module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  const objectId = req.query.objectId || (req.body && req.body.objectId);
  const responseMessage = objectId
    ? "this is ObjectId :  " +
      objectId +
      ". This HTTP triggered function executed successfully."
    : "This HTTP triggered function executed successfully. Pass a objectId in the query string or in the request body for a personalized response.";

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: { customerId: responseMessage },
  };
};
