module.exports = function (RED) {

  function NodeOCR(config) {
    RED.nodes.createNode(this, config);
    var node = this;

    const XOCRSECRET = config.XOCRSECRET;

    node.on("input", function (msg) {
      var x = {
        images: [
          {
            format: "png",
            name: "medium",
            data: msg.payload,
          },
        ],
        requestId: "string",
        resultType: "string",
        timestamp: 1624522929024,
        version: "V2",
      };
      msg.payload = x;

      msg.headers = {
        "X-OCR-SECRET": XOCRSECRET,
        "content-type": "application/json"
      }

      node.send(msg);
    });
  }
  RED.nodes.registerType("node-ocr", NodeOCR);
};
