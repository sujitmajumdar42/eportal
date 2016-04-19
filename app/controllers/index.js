import Ember from 'ember';

export default Ember.Controller.extend({
    actions:{
        authenticate(){
            var username = this.get('username');
            var password = this.get('password');
            
            /*if(username === "admin" && password == "admin"){
             this.set('authenticated',true);
            } else{
             this.set('authenticated',false);
            }*/
            this.set('authenticated',true);
        }
    }
});
