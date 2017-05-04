var app = angular.module('madMod');

app.factory('madFactory',function(){
var inputs = {};
function setInputs (words){
  inputs= words;
  console.log(inputs);
};
  function returnInputs(){
    return inputs
  }

return {
  returnInputs: returnInputs,
  setInputs: setInputs
}
});



// objet literal -- property and a value.. with exact same name as function__Line 17
// sLine 14 et function or a get function here
