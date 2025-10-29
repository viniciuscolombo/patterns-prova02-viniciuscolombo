// problemDecorator.js
class Message {
    constructor(text) {
      this.text = text;
    }
  
    getText() {
      return this.text;
    }
  }
  
  class MessageDecorator {
    constructor(message) {
      this.message = message;
    }
  
    getText() {
      return this.message.getText();
    }
  }
  
  class UpperCaseDecorator extends MessageDecorator {
    getText() {
      return super.getText().toUpperCase();
    }
  }
  
  class PositiveMessageDecorator extends MessageDecorator {
    getText() {
      let text = super.getText();
      return text.replace("horrível", "maravilhoso");
    }
  }
  
  class CensorDecorator extends MessageDecorator {
    getText() {
      let text = super.getText();
      return text.replace("horrível", "h*******");
    }
  }
  
  const msg = new Message("hoje o dia está horrível");
  console.log("Original:", msg.getText());
  
  const upperMsg = new UpperCaseDecorator(msg);
  console.log("Uppercase:", upperMsg.getText());
  
  const positiveMsg = new PositiveMessageDecorator(msg);
  console.log("Positivo:", positiveMsg.getText());
  
  const angryCensoredMsg = new UpperCaseDecorator(new CensorDecorator(msg));
  console.log("Censurado e Maiúsculo:", angryCensoredMsg.getText());