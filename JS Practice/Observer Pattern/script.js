class YoutubeChannel{
    constructor(){
        this.subscribers = [];
    }
    subscribe(user){
        this.subscribers.push(user);
        user.update(`${user.name}, You have subscribed the channel.`)
    }
    unsubscribe(user){
        this.subscribers = this.subscribers.filter((sub)=> {sub !== user})
        user.update(`You have unsubscribed the channel`);
    }
    notify(message){
        this.subscribers.forEach((sub) => {
            sub.update(message);
            
        });
    }
}

class User{
    constructor(name){
        this.name = name
    }
    update(data){
        console.log(data);
        
    }
}

let abd = new YoutubeChannel();
let user1 = new User("Arhan");
abd.subscribe(user1);
abd.notify("New video is out! Check it out Now");