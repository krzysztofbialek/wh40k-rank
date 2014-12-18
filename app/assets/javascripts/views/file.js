Wh40kRank.UploadFile = Ember.TextField.extend({                             
  tagName: 'input',                                     
  attributeBindings: ['name'],                     
  type: 'file',
  classNames: ['results-file'],
  file: null,
                           
  change: function(e){       
    var view, reader;
    view = this;                                
    var reader = new FileReader();                                        
    reader.onload = function(e){             
      var fileToUpload = e.target.result;
      return view.set('file', fileToUpload);
    };                    
    return reader.readAsText(e.target.files[0]);
  } 
});