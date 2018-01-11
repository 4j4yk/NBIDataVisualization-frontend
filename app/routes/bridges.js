import DataTableRouteMixin from 'ember-data-table/mixins/route';
export default Ember.Route.extend(DataTableRouteMixin, {
  model() {
      return this.store.findAll('event');
  }
});
