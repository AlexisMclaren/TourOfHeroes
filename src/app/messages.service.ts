import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

//message property which is a string array type and is assigned an empty array
messages: string[] = [];

//A message of string type will be pushed onto the messages array
add(message: string){
	this.messages.push(message);
}	

clear(){
	this.messages = [];
}

  constructor() { }
}
