// This is a placeholder Netlify function that helps with SSR
// It's required for proper routing in SPAs on Netlify
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Netlify function is working" })
  };
};
