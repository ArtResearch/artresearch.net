/**
 * Uploads image and get URL
 *
 * @class ReqSolr2
 * @extends {HTMLElement}
 */
class ReqSolr2 extends HTMLElement {
  constructor() {
    super();
    const req = "xhr2";
    var XMLHttpRequest = require(req);
    var xhr = new XMLHttpRequest();
    const url =
      "https://solr.artresearch.net/solr/artists_v5/select?defType=dismax&facet.field=roles_str&facet=true&indent=true&q.op=OR&q=leonardo%20da";
    xhr.open("GET", url);
    xhr.send();
 console.log("okkk");
    xhr.onreadystatechange = (e) => {
      console.log("okkk");
      console.log(xhr.responseText);
    };
    
  }
}

customElements.define("req-element2", ReqSolr2);
