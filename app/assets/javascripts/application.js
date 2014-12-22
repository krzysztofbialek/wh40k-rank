//= require jquery
//= require jquery_ujs
//= require handlebars
//= require ember
//= require ember-data
//= require_self
//= require mixins/current_user_proxy
//= require initializers/current_user_initializer
//= require jquery.csv-0.71
//= require transforms/results_transform
//= require ./wh40k_rank

Wh40kRank = Ember.Application.create({
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS: true,
});



