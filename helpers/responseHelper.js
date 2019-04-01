var createResponse = function(result, isSuccess, error){
  let response = {
    success: isSuccess,
    result: result,
    error: isSuccess ? null : error
  };
  return response;
}

const responseHelper = {
  createResponse
};

module.exports = responseHelper
