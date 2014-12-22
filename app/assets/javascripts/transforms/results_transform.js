Wh40kRank.ResultsTransform = DS.Transform.extend({
  serialize: function(deserialized) {
    if (deserialized) {
      return deserialized.map(function(item) {
        return item.map(function(item) {
        return item;
        })
      });
    } else {
      return []
    }
  }
});
