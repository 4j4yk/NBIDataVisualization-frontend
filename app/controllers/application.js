import Controller from '@ember/controller';

export default Controller.extend({
    showMenu: '',
    actions: {
      toggleMenu(){
        if (this.get('showMenu')){
          this.set('showMenu', '');
        }
        else{
          this.set('showMenu', 'active');
        }
  
      },
      logout(){
        this.get('auth').logout();
      }
    }
});
