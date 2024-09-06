class Participant {
    constructor(name) {
        this.name = name;
        this.chatRoom = null;
        this.messages = [];
    }

    send(messages, to) {
        this.chatRoom.send(messages, this, to);
    }

    receive(messages, from) {
        this.messages.push({ messages, from });
    }

    showMessage() {
        console.log(this.messages);
    }
}

class chatRoom {
    constructor() {
        this.participants = {};
    }

    enter(participant) {
        this.participants[Participant.name] = participant;
        participant.chatRoom = this;
    }

    senf(messages, participant, to) {
        this.participants[to.name].receive(messages, participant);
    }
}

const chatRoom = new chatRoom();

const user1 = new Participant("user1");
const user2 = new Participant("user2");
const user3 = new Participant("user3");

chatRoom.enter(user1);
chatRoom.enter(user2);
chatRoom.enter(user3);

console.log(chatRoom);
console.log(user1);

user1.send("Hello", user2);
user1.send("Hello2222", user2);

console.log(chatRoom);
