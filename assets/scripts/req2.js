(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw ((a.code = "MODULE_NOT_FOUND"), a);
        }
        var p = (n[i] = { exports: {} });
        e[i][0].call(
          p.exports,
          function (r) {
            var n = e[i][1][r];
            return o(n || r);
          },
          p,
          p.exports,
          r,
          e,
          n,
          t
        );
      }
      return n[i].exports;
    }
    for (
      var u = "function" == typeof require && require, i = 0;
      i < t.length;
      i++
    )
      o(t[i]);
    return o;
  }
  return r;
})()(
  {
    1: [
      function (require, module, exports) {
        module.exports = XMLHttpRequest;
      },
      {},
    ],
    2: [
      function (require, module, exports) {
        /**
         * Uploads image and get URL
         *
         * @class ReqSolr2
         * @extends {HTMLElement}
         */
        var XMLHttpRequest = require("xhr2");
        class ReqSolr2 extends HTMLElement {
          constructor() {
            super();
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
      },
      { xhr2: 1 },
    ],
  },
  {},
  [2]
);
