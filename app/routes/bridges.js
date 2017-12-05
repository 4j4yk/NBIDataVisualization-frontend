import Ember from 'ember';
// import Route from '@ember/routing/route';
import DataTableRouteMixin from 'ember-data-table/mixins/route';
export default Ember.Route.extend(DataTableRouteMixin, {
   modelName: 'bridge'
});
