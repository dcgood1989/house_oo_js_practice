var Room = function(name, width, length){
  this.contents = [];
  this.name = name;
  this.width = width;
  this.length = length;
}

Room.prototype.addFurniture = function(furniture) {
  if (this.contents.indexOf(furniture) === -1) {
    this.contents.push(furniture)
  } else {
    return "sorry, you can't have two of those"
  }
}

Room.prototype.removeFurniture = function(furniture) {
  var furny = this.contents.indexOf(furniture)
  if (this.contents.indexOf(furniture) !== -1) {
    this.contents.splice(furny, 1)
  }
}

module.exports = Room;
