function Cat(head) {
	this.head = head
	this.stomach = []
	this.eat = function(mouse) {
		this.stomach.push(mouse)
	}
	this.swim = function() {
		console.log("Swimming...")
	}
}

module.exports = Cat;