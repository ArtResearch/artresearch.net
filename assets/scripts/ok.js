

class ReqSolr2 extends HTMLElement {
  constructor() {
     super();
 this._shadowRoot = this.attachShadow({ mode: "open" });
const strURL ="https://solr.artresearch.net/solr/artists_v5/select?defType=dismax&facet.field=roles_str&facet=true&indent=true&q.op=OR&q=leonardo%20da";
    var xmlHttpReq = false;
    var self = this._shadowRoot;
    if (window.XMLHttpRequest) { // Mozilla/Safari
        self.xmlHttpReq = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) { // IE
        self.xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
    }
    self.xmlHttpReq.open('POST', strURL, true);
    self.xmlHttpReq.setRequestHeader(
      "Access-Control-Allow-Origin", "https://dev.artresearch.net"
    );
    self.xmlHttpReq.onreadystatechange = function() {
        if (self.xmlHttpReq.readyState == 4) {
            // updatepage(self.xmlHttpReq.responseText);
            console.log("good");
            console.log(self.xmlHttpReq.responseText);
        }else{
          console.log("bad");
        }
    }

    var params = getstandardargs().concat(getquerystring());
    var strData = 
    self.xmlHttpReq.send(strData);


function getstandardargs() {
    var params = [
        'wt=json'
        , 'indent=on'
        , 'hl=true'
        , 'hl.fl=name,features'
        ];

    return params;
}
function getquerystring() {
  // var form = document.forms['f1'];
  // var query = form.query.value;
  var qstr =
    "https://solr.artresearch.net/solr/artists_v5/select?defType=dismax&facet.field=roles_str&facet=true&indent=true&q.op=OR&q=leonardo%20da";
  return qstr;
}

// this function does all the work of parsing the solr response and updating the page.
// function updatepage(str){
//   document.getElementById("raw").innerHTML = str;
//   var rsp = eval("("+str+")"); // use eval to parse Solr's JSON response
//   var html= "<br>numFound=" + rsp.response.numFound;
//   var first = rsp.response.docs[0];
//   html += "<br>product name="+ first.name;
//   var hl=rsp.highlighting[first.id];
//   if (hl.name != null) { html += "<br>name highlighted: " + hl.name[0]; }
//   if (hl.features != null) { html += "<br>features highligted: " + hl.features[0]; }
//   document.getElementById("result").innerHTML = html;
// }
  }}

  customElements.define("request-element", ReqSolr2);