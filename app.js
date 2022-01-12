const cryptr = require("cryptr");
const Crypto = new cryptr("Mysecretkey");
const encryption = Crypto.encrypt("Major League Hacking");
console.log(encryption);
