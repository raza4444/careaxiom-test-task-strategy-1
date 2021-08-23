const path = require("path");
const AddressService = require("../services/AddressService");


exports.view = async function (req, res) {
  let addresses = [];
  if (Object.keys(req.query).length > 0 && req.query.address) {
    if(typeof req.query.address === "string") {
      const title = await AddressService.fetchTitleFromUrl(req.query.address)
      addresses.push(
        {
          id: 1,
          url: req.query.address,
          title: title,
        }
      );
    } else {

      addresses = await Promise.all(req.query.address.map( async (address, index) => {
        return {
          id: index + 1,
          url: address,
          title: await AddressService.fetchTitleFromUrl(address),
        };
      }));
    }

    
  }
  res.render(path.resolve("src/views/address/view"), {
    addressesDetail: addresses
});
};
