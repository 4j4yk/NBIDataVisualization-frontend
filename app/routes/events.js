import Route from '@ember/routing/route';
// import {singularize, pluralize} from 'ember-inflector';

export default Route.extend({
    model() {
        return this.store.findAll('event');
    }
});
