angular.module('avenicaTestTaskTrue', [])
  .controller('TestTaskController', function() {
  var testTaskApp = this;

  testTaskApp.drafts = [];
  testTaskApp.saved = [];
  testTaskApp.editingDraftIndex = -1;
  testTaskApp.editedText = "";

  testTaskApp.addDraft = function(){
    testTaskApp.drafts.push({text:testTaskApp.draftText, marked:false});
    testTaskApp.draftText = "";
  };
  testTaskApp.delDraft = function(e){
    testTaskApp.drafts.splice(e.$index, 1);
  };
  testTaskApp.saveDraft = function(e){
    let draftToSave = e ? testTaskApp.drafts.splice(e.$index, 1)[0] : { text:testTaskApp.draftText }
    draftToSave["marked"] = false;
    testTaskApp.saved.push(draftToSave);
  };
  testTaskApp.draftSaved = function(e){
    let draftToSave = testTaskApp.saved.splice(e.$index, 1)[0];
    delete draftToSave.marked;
    testTaskApp.drafts.push(draftToSave);
  }
  testTaskApp.markSaved = function(e){
    let nowMarked = testTaskApp.saved[e.$index].marked;
    testTaskApp.saved[e.$index].marked = !nowMarked;
  }
  testTaskApp.editText = function(e){ 
    let inp = e.currentTarget;
    alert(inp.value);
    editedText = inp.value;
  }

  testTaskApp.marked = function(){
    var cnt = 0;
    angular.forEach(testTaskApp.saved, function(draft){
      cnt += draft.marked?1:0;
    });
    return cnt;
  }
});
  