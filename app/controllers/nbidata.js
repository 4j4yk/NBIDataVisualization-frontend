import Controller from '@ember/controller';
import Ember from 'ember';
var material=["Other",
"Concrete",
"Concrete continuous",
"Steel",
"Steel continuous",
"Prestressed concrete",
"Prestressed concrete continuous",
"Wood or timber",
"Masonry",
"Aluminum, Wrought Iron or Cast Iron",
];

var service=["Other",
"Highway",
"Railroad",
"Pedestrian-BiCycle",
"Highway-Railroad",
"Highway-Pedestrian",
"Overpass Structure",
"Third Level",
"Fourth Level",
"Building of Plaza",
];

var statecodelist = [
  "None",
  "AL",
"AK",
"AS",
"AZ",
"AR",
"CA",
"CO",
"CT",
"DE",
"DC",
"FM",
"FL",
"GA",
"GU",
"HI",
"ID",
"IL",
"IN",
"IA",
"KS",
"KY",
"LA",
"ME",
"MH",
"MD",
"MA",
"MI",
"MN",
"MS",
"MO",
"MT",
"NE",
"NV",
"NH",
"NJ",
"NM",
"NY",
"NC",
"ND",
"MP",
"OH",
"OK",
"OR",
"PW",
"PA",
"PR",
"RI",
"SC",
"SD",
"TN",
"TX",
"UT",
"VT",
"VI",
"VA",
"WA",
"WV",
"WI",
"WY",
];
var statelist = [
  "None",
  "Alabama",
  "Alaska",
  "American Samoa",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District Of Columbia",
  "Federated States Of Micronesia",
  "Florida",
  "Georgia",
  "Guam",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Marshall Islands",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Northern Mariana Islands",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Palau",
  "Pennsylvania",
  "Puerto Rico",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virgin Islands",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming"];

export default Controller.extend({

  cdata: Ember.computed('model', function() {
  // var cdata= Ember.Set.create();
  var cdata= [];
  let chartdata = this.get('model')
  console.log(chartdata.get('length'));
  cdata.pushObject(['StateCode','Year'])
  chartdata.forEach(function(item, index) {
    console.log(index,statelist[parseInt(item.get('stateCode'))], item.get('year'));
    cdata.pushObject([statelist[parseInt(item.get('stateCode'))], item.get('year')]);
  });
  console.log(cdata)
  return cdata;
}),

materialdata:Ember.computed('model', function() {
// var cdata= Ember.Set.create();
var materialdata= [];
let chartdata = this.get('model')
console.log(chartdata.get('length'));
materialdata.pushObject(['structureNumber','Material'])
chartdata.forEach(function(item, index) {
  console.log(index,item.get('structureNumber'), material[parseInt(item.get('structureTypeMain'))]);
  materialdata.pushObject([item.get('structureNumber'), material[parseInt(item.get('structureTypeMain.kindofMaterialDesign'))]]);
});
console.log(materialdata)
return materialdata;
}),

servicedata:Ember.computed('model', function() {
// var cdata= Ember.Set.create();
var servicedata= [];
let chartdata = this.get('model')
console.log(chartdata.get('length'));
console.log(chartdata)
servicedata.pushObject(['structureNumber','typeOfService'])
chartdata.forEach(function(item, index) {
  console.log(index,parseInt(item.get('structureNumber')), service[parseInt(item.get('typeOfService.typeOfServiceOnBridge'))]);
  servicedata.pushObject([service[parseInt(item.get('typeOfService.typeOfServiceOnBridge'))],parseInt(item.get('structureNumber'))]);
});
console.log(servicedata)
return servicedata;
}),


lendata:Ember.computed('model', function() {
// var cdata= Ember.Set.create();
var lendata= [];
let chartdata = this.get('model')
console.log(chartdata.get('length'));
lendata.pushObject(['structureNumber','structureLength'])
chartdata.forEach(function(item, index) {
  console.log(index,item.get('structureNumber'), parseInt(item.get('structureLength')));
  lendata.pushObject([item.get('structureNumber'), parseInt(item.get('structureLength'))]);
});
console.log(lendata)
return lendata;
}),

tdata: Ember.computed('model', function() {
// var cdata= Ember.Set.create();
var tdata= [];
let chartdata = this.get('model')
console.log(chartdata.get('length'));
tdata.pushObject(['StateCode','sufficiencyRating'])
chartdata.forEach(function(item, index) {
  console.log(index,statelist[parseInt(item.get('stateCode'))], parseInt(item.get('sufficiencyRating')));
  tdata.pushObject([statelist[parseInt(item.get('stateCode'))], parseInt(item.get('sufficiencyRating'))]);
});
console.log(tdata)
return tdata;
}),

sdata: Ember.computed('model', function() {
// var cdata= Ember.Set.create();
var sdata= [];
let chartdata = this.get('model')
console.log(chartdata.get('length'));
sdata.pushObject(['structureNumber','yearBuilt'])
chartdata.forEach(function(item, index) {
  console.log(index,parseInt(item.get('structureNumber')), parseInt(item.get('yearBuilt')));
  sdata.pushObject([parseInt(item.get('structureNumber')), parseInt(item.get('yearBuilt'))]);
});
console.log(sdata)
return sdata;
}),

scour: Ember.computed('model', function() {
// var cdata= Ember.Set.create();
var scour= [];
let chartdata = this.get('model')
console.log(chartdata.get('length'));
scour.pushObject(['structureNumber','scourCriticalBridges'])
chartdata.forEach(function(item, index) {
  console.log(index,item.get('structureNumber'), parseInt(item.get('scourCriticalBridges')));
  scour.pushObject([item.get('structureNumber'), parseInt(item.get('scourCriticalBridges'))]);
});
console.log(scour)
return scour;
}),

gdata: Ember.computed('model', function() {
// var cdata= Ember.Set.create();
var gdata= [];
var str1 = "US-"
let chartdata = this.get('model')
console.log(chartdata.get('length'));
gdata.pushObject(['State','scourCriticalBridges'])
chartdata.forEach(function(item, index) {
  console.log(index,item.get('scourCriticalBridges'), str1.concat(statecodelist[parseInt(item.get('stateCode'))]));
  gdata.pushObject([str1.concat(statecodelist[parseInt(item.get('stateCode'))]),parseInt(item.get('scourCriticalBridges'))]);
});
console.log(gdata)
return gdata;
}),
// gdata: Ember.computed('model', function() {
// // var cdata= Ember.Set.create();
// var gdata= [];
// var str1 = "US-"
// let chartdata = this.get('model')
// console.log(chartdata.get('length'));
// gdata.pushObject(['Lat','Long','Name'])
// chartdata.forEach(function(item, index) {
//   console.log(index,item.get('latitude'), item.get('longitude'),str1.concat(statecodelist[parseInt(item.get('stateCode'))]));
//   gdata.pushObject([item.get('latitude'), item.get('longitude'),str1.concat(statecodelist[parseInt(item.get('stateCode'))])]);
// });
// console.log(gdata)
// return gdata;
// }),
customoptions: Ember.computed('model', function() {

return {
          colorAxis: {colors: ['#00853f', 'black', '#e31b23']},
          backgroundColor: '#f5f5f5',
          datalessRegionColor: '#f8bbd0',
          defaultColor: '#f5f5f5',
          height : 500,
        };
      }),

customoptions1: Ember.computed('model', function() {

return {
          region: 'US', // UnitedStates
          displayMode: 'markers',
          colorAxis: {colors: ['#00853f', 'black', '#e31b23']},
          backgroundColor: '#f5f5f5',
          datalessRegionColor: '#AFEEEE',
          defaultColor: '#f5f5f5',

        };
      }),

customoptions3: Ember.computed('model', function() {

      return {
                region: 'US', // UnitedStates
                displayMode: 'markers',
                colorAxis: {colors: ['#00853f', 'black', '#e31b23']},
                backgroundColor: '#f5f5f5',
                datalessRegionColor: '#AFEEEE',
                defaultColor: '#f5f5f5',

              };
            }),
customoptions2: Ember.computed('model', function() {

      return {
                colorAxis: {colors: ['#00853f', 'black', '#e31b23']},
                backgroundColor: '#f5f5f5',
                datalessRegionColor: '#f8bbd0',
                defaultColor: '#f5f5f5',
                height : 500,
              };
            }),
geodata: Ember.computed('model', function() {
  //
  // return [
  //       ['State', 'Popularity'],
  //       ["US-TN", 60.75],
  //       ["US-TN", 60.75],
  //       ["US-TN", 60.75],
  //       ["US-TN", 60.75],
  //       ["US-CO", 50.75]];
  var geodata= [];
  var str1 = "US-"
  let chartdata = this.get('model')
  console.log(chartdata.get('length'));
  geodata.pushObject(['State','sufficiencyRating'])
  chartdata.forEach(function(item, index) {
    console.log(index,str1.concat(statecodelist[parseInt(item.get('stateCode'))]), parseFloat(item.get('sufficiencyRating')));
    geodata.pushObject([str1.concat(statecodelist[parseInt(item.get('stateCode'))]),parseFloat(item.get('sufficiencyRating'))]);
  });
  console.log(geodata)
  return geodata;
}),

odata: Ember.computed('model', function() {
  //
  // return [
  //       ['State', 'Popularity'],
  //       ["US-TN", 60.75],
  //       ["US-TN", 60.75],
  //       ["US-TN", 60.75],
  //       ["US-TN", 60.75],
  //       ["US-CO", 50.75]];
  var odata= [];
  var str1 = "US-"
  let chartdata = this.get('model')
  console.log(chartdata.get('length'));
  odata.pushObject(['State','operatingRating'])
  chartdata.forEach(function(item, index) {
    console.log(index,str1.concat(statecodelist[parseInt(item.get('stateCode'))]), parseFloat(item.get('operatingRating')));
    odata.pushObject([str1.concat(statecodelist[parseInt(item.get('stateCode'))]),parseFloat(item.get('operatingRating'))]);
  });
  console.log(odata)
  return odata;
}),

geodata_traffic: Ember.computed('model', function() {
  var geodata_traffic= [];
  var str1 = "US-"
  let chartdata = this.get('model')
  console.log(chartdata.get('length'));
  geodata_traffic.pushObject(['State','AverageDailyTraffic'])
  chartdata.forEach(function(item, index) {
    console.log(index,str1.concat(statecodelist[parseInt(item.get('stateCode'))]), parseInt(item.get('averageDailyTraffic')));
    geodata_traffic.pushObject([str1.concat(statecodelist[parseInt(item.get('stateCode'))]),parseInt(item.get('averageDailyTraffic'))]);
  });
  console.log(geodata_traffic)
  return geodata_traffic;
}),

users: Ember.computed('model', function() {
return ["Bridge Distribution by State","Bridge Distribution by structureNumber", "Bridge Distribution by ServiceType"]
}),
// });
//   chartdata.forEach(function(item, index) {
//   console.log('Item %@: %@  %@'.fmt(index+1, this.get(item.State), this.get(item.year)));
//   // cdata.add([item.State,item.year]);
//   cdata.pushObject([this.get(item.State), this.get(item.year)]);
//
// return [
//       ['State', 'Popularity'],
//       ['Arizona', 600],
//       ['Canada', 500],
//       ['France', 600],
//       ['Russia', 700],
//       ['Australia', 600],
//     ];

});
