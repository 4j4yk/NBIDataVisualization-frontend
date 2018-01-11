import Route from '@ember/routing/route';
// import Ember from '@ember';
export default Route.extend({
 model() {
   return this.store.findAll('event');
 },
});

// var items = []
// export default Route.extend({
//   model() {
//     var chartdata = this.store.findAll('event');
//     var i;
//     for (i = 0; i < 5; i++) {
//     items.push([chartdata.year,chartdata.State]);
//     }
//     return items;
//     // return [
//     //   ['Country', 'Popularity'],
//     //   ['South America', 600],
//     //   ['Canada', 500],
//     //   ['France', 600],
//     //   ['Russia', 700],
//     //   ['Australia', 600],
//     // ];
//   },
// });


// export default Route.extend({
//   model1() {
//     // chartdata = this.store.findAll('event');
//     return [
//       ['State', 'Number of Bridges'],
//       ['Kansas', 500],
//       ['Missouri', 1200],
//       ['Texas', 2442],
//       ['Nevada', 1400],
//       ['Iowa', 501],
//       ['Idaho', 500],
//       ['Arkansas', 2100],
//       ['Tennesse', 1442],
//       ['Denver', 1400],
//     ];
//   },
//   model2(){
//     return [
//     ['Country', 'Popularity'],
//     ['South America', 600],
//     ['Canada', 500],
//     ['France', 600],
//     ['Russia', 700],
//     ['Australia', 600],
//   ];
//   // model() {
//   //     return this.store.findAll('event');
//   }
// });
