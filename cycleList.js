'use strict';
class _Node{
  constructor( data = null){
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  printList(){
    let currentNode = this.head;
    let nodeString = '';
    let i = 0;
    while(currentNode !== null){
      currentNode.next === null ? nodeString += (`${currentNode.data}`) :nodeString += (`${currentNode.data} -> `);
      currentNode = currentNode.next;
      if(i === 10){
        break;
      }
      i++;
    }
    console.log(nodeString);
  }

  detectLoop(){
    let slowPointer = this.head;
    let fastPointer = this.head;
    while(slowPointer && fastPointer && fastPointer.next){
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;

      if(slowPointer === fastPointer){
        console.log('there is a loop');
        return;
      }
    }
    console.log('there is no loop');
  }
}

const linkedList = new LinkedList();
linkedList.head = new _Node(5);
linkedList.head.next = new _Node(10);
linkedList.head.next.next = new _Node(15);
linkedList.head.next.next.next = new _Node(20);
linkedList.head.next.next.next.next = new _Node(25);
linkedList.printList();
linkedList.detectLoop();