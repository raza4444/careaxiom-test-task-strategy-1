
/**
 * validate URL
 *
 * @param   {string}  url
 *
 * @return  {object}
 */
 const validator = (url) => {
  var regex =
    /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;

    return regex.test(url)
    ? {
        success: false,
        url: url,
      }
    : {
        success: true,
        url: url,
      };
};

module.exports = validator;
