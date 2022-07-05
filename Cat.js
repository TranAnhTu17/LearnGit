function Cat(head) {
	this.head = head
	this.stomach = []
	this.eat = function(mouse) {
		this.stomach.push(mouse)
	}
}

module.exports = Cat;