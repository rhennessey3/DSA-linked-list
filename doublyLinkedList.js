'use strict';
class _Node{
  constructor( data = null){
    this.data = data;
    this.next = null;
    this.previous = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtHead(data){
    let newNode = new _Node(data);
    newNode.previous = null;
    if(this.head === null){
      newNode.next = null;
      this.head = newNode;
      return;
    }
    this.head.previous = newNode;
    newNode.next = this.head;
    this.head = newNode;
  }

  insertAtTail(data){
    if(this.isEmpty()){
      this.insertAtHead(data);
    } 
    let currentNode = this.head;
    while(currentNode.next !== null){
      currentNode = currentNode.next;
    }
    currentNode.next = new _Node(data);
    currentNode.next.previous = currentNode;
  }

  isEmpty(){
    if(this.head === null){
      return true;
    }
    return false;
  }

  printList(){
    if(this.isEmpty()){
      console.log('list is empty');
      return;
    }
    let currentNode = this.head;
    let nodeString = this.head.previous + ' <- ';
    while(currentNode !== null){
      currentNode.next === null ? nodeString += (`${currentNode.data} -> ${currentNode.next}`) :nodeString += (`${currentNode.data} <-> `);
      currentNode = currentNode.next;
    }
    console.log(nodeString);
  }

  printListFromEnd(){
    if(this.isEmpty()){
      console.log('list is empty');
      return;
    }
    let currentNode = this.head;
    while(currentNode.next !== null){
      currentNode = currentNode.next;
    }
    let nodeString = currentNode.next + ' <- ';
    while(currentNode !== null){
      currentNode.previous === null ? nodeString += (`${currentNode.data} -> null`) :nodeString += (`${currentNode.data} <-> `);
      currentNode = currentNode.previous;
    }
    console.log(nodeString);
  }

  findSize(){
    let currentNode = this.head;
    let i = 0;
    while(currentNode !== null){
      i++;
      currentNode = currentNode.next;
    }
    return i;
  }

  reverseList(){
    if(this.isEmpty()){
      console.log('linked List is empty');
      return;
    }
    let currentNode = this.head;
    let tempNode;
    while(currentNode !== null){
      tempNode = currentNode.previous;
      currentNode.previous = currentNode.next;
      currentNode.next = tempNode;
      currentNode = currentNode.previous;
    }

    this.head = tempNode.previous;
  }
}

const linkedList = new LinkedList();
for(let i = 0; i < 5; i++){
  linkedList.insertAtTail(i);
}
linkedList.printList();
linkedList.reverseList();
linkedList.printList();