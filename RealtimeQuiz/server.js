socket.on("hello", (arg, callback) => {
    console.log(arg); // "world"
    callback("got it");
  });