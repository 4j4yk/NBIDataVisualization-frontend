import Ember from 'ember';
import Controller from '@ember/controller';

export default Controller.extend({

    emailAddress: '',
    
      isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
      isDisabled: Ember.computed.not('isValid'),
    
      actions: {
        saveQuery() {
          alert(`Saving of the following message in progress: ${this.get('emailAddress')}`);
          this.set('responseMessage', `Thank you! We've received you query: ${this.get('message')}`);
          this.set('message', '');
        }
      }
    
});
