function ContactController(){
  var vm = this;
  this.name = "apple";
  this.email = "apple@apple.com";
  this.phone = "1234567890";
  this.changeName = function() {
    vm.name = "orange";
  }
}

angular.module('app').controller('ContactController', ContactController)