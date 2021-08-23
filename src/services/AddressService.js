const got = require("got");
const validate = require("../helpers/validate");
const utility = require("../helpers/utility");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const NO_RESPONSE_MESSAGE = "NO RESPONSE";

/**
 * Fetch Title from given web url.
 *
 * @param   {string}  address
 *
 * @return  {string}
 */
exports.fetchTitleFromUrl = async (address) => {
  address = utility.normailzeUrlProtocol(address);

  let validateUrl = validate(address);

  if (validateUrl.success) {
    let dom = await fetchDom(address);
    if (dom) {
      return fetchSingleNode(dom, "title");
    }
    return NO_RESPONSE_MESSAGE;
  }
  return NO_RESPONSE_MESSAGE;
};

/**
 * Fetch DOM of given URL.
 *
 * @param   {string}  address
 *
 * @return  {object}
 */
const fetchDom = async (address) => {
  try {
    const response = await got(address);
    if (response.statusCode === 200) {
      const virtualConsole = new jsdom.VirtualConsole();
      return new JSDOM(response.body, { virtualConsole });
    }
    return false;
  } catch (error) {
    return false;
  }
};

/**
 * Fetch Single node from DOM
 *
 * @param   {object}  dom   JSDOM
 * @param   {string}  node
 *
 * @return  {string}        [return description]
 */
const fetchSingleNode = (dom, node) => {
  return dom.window.document.querySelector(node).textContent;
};
