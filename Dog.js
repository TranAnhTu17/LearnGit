function Dog() {
	this.stomach = []
	this.eat = function(cat) {
		this.stomach.push(cat)
	}
}

module.exports = Dog;