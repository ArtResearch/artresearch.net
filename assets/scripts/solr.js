/**
 * Uploads image and get URL
 *
 * @class ReqSolr
 * @extends {HTMLElement}
 */
class ReqSolr extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    const core = this.getAttribute("core");
    const keyword = this.getAttribute("keyword");
    
    solrRequest()

    function solrRequest(){
      var base_url = "https://solr.artresearch.net/solr/"
      if (core=="artworks") {
        base_url = base_url.concat("artworks_v8","/select?defType=dismax&q.op=AND")
      } else if (core=="artists") {
        base_url = base_url.concat("artists_v5","/select?defType=dismax&q.op=AND")
      }else if (core=="photographers") {
        base_url = base_url.concat("photographers_v5","/select?defType=dismax&q.op=AND")
      }else if (core=="photos") {
        base_url = base_url.concat("photos_v5","/select?defType=dismax&q.op=AND")
      }
  
      var request_url = base_url.concat("&q=",encodeURIComponent(keyword));
      console.log(request_url)
      $.ajax({
          url: request_url,
          dataType: 'json',
          type: 'GET',
          beforeSend: function(request) {
          },
          success: function(data) {
              $("#results").append('all good');
              console.log(data);
          },
          error: function() {
              $("#results").append("error");
              alert('error');
          }
      });
    }
  }
}

customElements.define("solr-request", ReqSolr);
