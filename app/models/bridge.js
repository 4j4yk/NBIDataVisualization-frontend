import DS from 'ember-data';

export default DS.Model.extend({
  year: DS.attr('number'),
  stateCode: DS.attr(),
  structureNumber: DS.attr(),
  routeNumber: DS.attr(),
  highwayAgencyDistrict: DS.attr(),
  countyCode: DS.attr('number'),
  placeCode: DS.attr('number'),
  location: DS.attr(),
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  yearBuilt: DS.attr('number'),
  owner: DS.attr('number'),
  toll: DS.attr('number'),
  averageDailyTraffic: DS.attr('number'),
  historicalSignificance: DS.attr('number'),
  kindofMaterialDesign: DS.attr('number'),
  typeOfDesignConstruction: DS.attr('number'),
  structureLength: DS.attr()
});
