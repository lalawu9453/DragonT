
var body = $response.body;

// We have not performed request link comparison.
var obj = JSON.parse(body);
// rewrite
// obj = JSON.parse(body);
// obj = JSON.parse($response.body);
obj.data.gameProps = "com.lzqy.mlcnnew_100002";
obj.data.replace(
    /("gameProps"\s*:\s*")com\.lzqy\.mlcnnew_100008(")/,
    '$1com.lzqy.mlcnnew_100002$2'
  );
body = JSON.stringify(obj);

$done({body});


$notification.post("Storm Sniffer2","Network Debug Tool2","Dragon Get it!!!")

