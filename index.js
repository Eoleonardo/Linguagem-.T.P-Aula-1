class Estudante{
  constructor(nome,sobrenome,turma,istituto,data_nascimento){
    this.nome = nome;
  this.sobrenome = sobrenome;
  this.turma = turma;
  this.istituto = istituto;
  this.data_nascimento = data_nascimento;
  }
mostrarNome(){
return this.nome + "\n" + this.sobrenome  + "\n" + this.turma  + "\n" + this.istituto  + "\n" + this.data_nascimento
}
}
let estudante = new Estudante("leo","silva","3b","ifms","08/09/2006");
console.log(estudante.mostrarNome())


