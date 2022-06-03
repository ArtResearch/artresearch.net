/**
 * Uploads image and get URL
 *
 * @class ReqSolr
 * @extends {HTMLElement}
 */
class ReqSolr extends HTMLElement {
  constructor() {

    super();
    // var h = new Header( "Access-Control-Allow-Origin", "https://dev.artresearch.net" );
    this._shadowRoot = this.attachShadow({ mode: "open" });
    // const core = this.getAttribute("core");
    // const keyword = this.getAttribute("keyword");
    // const artworks = "https://solr.artresearch.net/solr/artists_v5/select?defType=dismax&facet.field=roles_str&facet=true&indent=true&q.op=OR&q=leonardo%20da";
    $.getJSON('https://solr.artresearch.net/solr/artists_v5/select?defType=dismax&facet.field=roles_str&facet=true&indent=true&q.op=OR&q=leonardo%20da', function(data) {
      // JSON result in `data` variable
    });
  }
}

customElements.define("req-element", ReqSolr);
