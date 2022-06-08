/**
 * Uploads image and get URL
 *
 * @class ReqSolr
 * @extends {HTMLElement}
 */
// import org.researchspace;

class ReqSolr extends HTMLElement {
  constructor() {
    super();
    // this._shadowRoot = this.attachShadow({ mode: "open" });
    
    const core = this.getAttribute("core");
    const keyword = this.getAttribute("keyword");
    
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
          
    const test1 = document.querySelector('test1');

    var request_url = base_url.concat("&q=",encodeURIComponent(keyword));
    // console.log(request_url)
    $.ajax({
        url: request_url,
        dataType: 'json',
        type: 'GET',
        beforeSend: function(request) {
        },
        success: function(data) {
            $("#results").append('all good');
            let docs = data['response']['docs']
            console.log(docs);
            let sl = document.createElement('semantic-link')
            for (var key in docs ){

              document.getElementById('json').textContent = document.getElementById('json').textContent + "\n"+ docs[key]['id'];
              sl.setAttribute('iri', "https://artresearch.net/resource/?uri=" +docs[key]['id']);
              sl.textContent = key;
              document.getElementById('json').appendChild(sl);
            }
            // document.getElementById('json').textContent = "ffff";
            // alert(data);
        },
        error: function() {
            $("#results").append("error");
            alert('error');
        }
    });
      
      
  }
}
customElements.define("solr-request", ReqSolr);
