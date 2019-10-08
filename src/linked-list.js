const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        if (this._head === null) {
            this._tail = new Node(data, null, null);
            this._head = this._tail;
          } else {
            this._tail.next = new Node(data, this._tail, null);
            this._tail = this._tail.next;
          };
        this.length++;

        return this;
    }

    head() {
        if (this._head !== null)
            return this._head.data;
        return null;
    
    }

    tail() {
        if (this._tail !== null)
            return this._tail.data;
        return null;
    }

    at(index) {
        if (index > this.length - 1) return 'null';
        let temp = new Node(this._head.data, null, this._head.next)
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp.data;
    }

    insertAt(index, data) {
        let temp = this._head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        };
        if (index === 0) {
            this.append(data);
        } else {
            temp.prev.next = new Node(data, temp.prev, temp);
            temp.prev = temp.prev.next; 
            this.length++;
        }

        return this;
    }

    isEmpty() {
        return this._head === null;
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;

        return this;
    }

    deleteAt(index) {
        if (index === 0) {
            this._head.prev = null;
            this._head = this._head.next;
        } else {
            let temp = this._head;
            for (let i = 0; i < index; i++) {
                temp = temp.next;
            };
            temp.prev.next = temp.next;
            temp.next.prev = temp.prev;
            this.length--;
        }
        return this;
    }

    reverse() {
        for (let j = 0; j < this.length - 1; j++) {
            let temp = this._head;
            for (let i = 0; i < this.length - 1 - j; i++) {
                let copy = temp.data;
                temp.data = temp.next.data;
                temp.next.data = copy;
                temp = temp.next;
            };  
        } 
        

        return this;
    }

    indexOf(data) {
        let temp = new Node(this._head.data, null, this._head.next);
        for (let i = 0; i < this.length; i++) {
            if (temp.data === data) return i;
            temp = temp.next;
        }
        return -1;
    }
}

module.exports = LinkedList;