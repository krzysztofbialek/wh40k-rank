Wh40kRank.ResultsTransform = DS.Transform.extend({
  serialize: function(deserialized) {
    console.log(deserialized)
    return deserialized.map(function(item) {
            return item.map(function(item) {
              return item;
            })
        });
  }
});
