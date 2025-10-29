
class Device {
    turnOn() {}
    turnOff() {}
    getStatus() {}
  }
  
  class TV extends Device {
    constructor() {
      super();
      this.isOn = false;
    }
  
    turnOn() {
      this.isOn = true;
      console.log("TV ligada.");
    }
  
    turnOff() {
      this.isOn = false;
      console.log("TV desligada.");
    }
  
    getStatus() {
      return this.isOn ? "ligada" : "desligada";
    }
  }
  
  class Radio extends Device {
    constructor() {
      super();
      this.isOn = false;
    }
  
    turnOn() {
      this.isOn = true;
      console.log("Rádio ligado.");
    }
  
    turnOff() {
      this.isOn = false;
      console.log("Rádio desligado.");
    }
  
    getStatus() {
      return this.isOn ? "ligado" : "desligado";
    }
  }
  
  class RemoteControl {
    constructor(device) {
      this.device = device;
    }
  
    pressPowerButton() {
      if (this.device.getStatus() === "ligada" || this.device.getStatus() === "ligado") {
        this.device.turnOff();
      } else {
        this.device.turnOn();
      }
    }
  
    showStatus() {
      console.log(`Dispositivo está: ${this.device.getStatus()}`);
    }
  }
  
  class AdvancedRemoteControl extends RemoteControl {
    mute() {
      console.log("Dispositivo silenciado (se suportar).");
    }
  }
  
  
  const tv = new TV();
  const radio = new Radio();
  
  console.log("--- Controle da TV ---");
  const remoteTV = new RemoteControl(tv); 
  remoteTV.pressPowerButton(); 
  remoteTV.showStatus();
  remoteTV.pressPowerButton(); 
  remoteTV.showStatus();
  
  
  console.log("\n--- Controle Avançado do Rádio ---");
  const remoteRadio = new AdvancedRemoteControl(radio); 
  remoteRadio.pressPowerButton(); 
  remoteRadio.showStatus();
  remoteRadio.mute(); 
  remoteRadio.pressPowerButton(); 