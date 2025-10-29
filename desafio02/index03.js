class TaskItem {
    constructor(name) {
      this.name = name;
    }
  
    showDetails(indent = "") {
      throw new Error("Este método deve ser implementado pelas subclasses");
    }
  
    add(item) {
      throw new Error("Não é possível adicionar itens a uma tarefa simples");
    }
  }
  
  class Task extends TaskItem {
    constructor(name) {
      super(name);
    }
  
    showDetails(indent = "") {
      console.log(`${indent}- [Tarefa] ${this.name}`);
    }
  }
  
  class Project extends TaskItem {
    constructor(name) {
      super(name);
      this.children = [];
    }
  
    add(item) {
      this.children.push(item);
    }
  
    showDetails(indent = "") {
      console.log(`\n${indent}+ [Projeto] ${this.name}`);
      
      this.children.forEach(child => {
        child.showDetails(indent + "    ");
      });
    }
  }
  
  const t1 = new Task("Escrever documentação da API");
  const t2 = new Task("Fazer testes unitários");
  const t3 = new Task("Corrigir bug #123");
  
  const backendProject = new Project("Desenvolvimento Backend");
  backendProject.add(t1);
  backendProject.add(t2);
  
  const mainProject = new Project("Lançamento v1.0");
  mainProject.add(backendProject);
  mainProject.add(t3); 
  
  console.log("--- Detalhes do Projeto Principal ---");
  mainProject.showDetails();