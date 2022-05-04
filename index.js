var osc = require("osc");

var udpPort = new osc.UDPPort({
    // This is the port we're listening on.
    localAddress: "127.0.0.1",
    localPort: 57121,

    // This is where sclang is listening for OSC messages.
    remoteAddress: "127.0.0.1",
    remotePort: 7000,
    metadata: true
});

// Open the socket.
udpPort.open();

var msg = {
    address: "/composition/columns/1/connect",
    args: [
        {
            type: "i",
            value: 1
        }
    ]
};
udpPort.send(msg);