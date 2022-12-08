const Http = require('http');

/**
 * @param {Object} event
 * @param {string} event.path Path parameter (original URL encoding)
 * @param {string} httpMethod Incoming request’s method name
 * @param {Http.IncomingHttpHeaders} headers Incoming request headers
 * @param {string} queryStringParameters Query string parameters
 * @param {string} body A JSON string of the request payload
 * @param {boolean} isBase64Encoded A boolean flag to indicate if the applicable request payload is Base64-encoded
 * @returns
 */
const handler = async (event) => {
  try {
    const subject = event.queryStringParameters.name || 'World'
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${subject}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
