/**
 * Uploads image and get URL
 *
 * @class ReqSolr
 * @extends {HTMLElement}
 */
class ReqSolr extends HTMLElement {
  constructor() {

    super();
    $.ajax({
        url: 'https://solr.artresearch.net/solr/artists_v5/select?defType=dismax&facet.field=roles_str&facet=true&indent=true&q.op=OR&q=leonardo%20da',
        dataType: 'json',
        type: 'POST',
        crossDomain: true,
        beforeSend: function(request) {
          request.setRequestHeader("Access-Control-Allow-Origin", "http://dev.artresearch.net/");
        },
        success: function(data) {

            $("#results").append('all good');
            alert(data);
        },
          error: function() {
            $("#results").append("error");
            alert('error');
        }
    });
  }
}

customElements.define("req-element", ReqSolr);
