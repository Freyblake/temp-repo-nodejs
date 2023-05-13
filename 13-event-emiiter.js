const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`Data recieved- name: ${name} id: ${id}`);
});

customEmitter.on("response", () => {
  console.log(`Some other logic`);
});

customEmitter.emit("response", "abhijeet", 489);
