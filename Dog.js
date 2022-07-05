function Dog() {
	this.stomach = []
	this.eat = function(cat) {
		this.stomach.push(cat)
	}
	this.walk = function() {
		console.log("Walking...")
	}
}

module.exports = Dog;