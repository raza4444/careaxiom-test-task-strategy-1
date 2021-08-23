/**
 * Class Utility
 */
class Utility {

    /**
     * Change URL Protocol
     *
     * @param   {string}  url
     * @param   {string}  scheme
     *
     * @return  {string} 
     */
    normailzeUrlProtocol = (url, scheme="https://") => {
       return (url.indexOf("http://") == 0 || url.indexOf("https://") == 0) ?
        url : scheme+url 
    }
    

}

module.exports = utility = new Utility();

