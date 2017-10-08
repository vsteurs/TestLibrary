require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"cloudstitch":[function(require,module,exports){
exports.get = function(user, app, callback) {
  var request, url;
  url = "https://api.cloudstitch.com/" + user + "/" + app;
  request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      return callback(JSON.parse(request.responseText));
    } else {
      return callback(JSON.parse({
        error: true,
        message: 'Bad status response from the server: ' + request.status
      }));
    }
  };
  request.onerror = function() {
    return callback(JSON.parse({
      error: true,
      message: 'Error response from server'
    }));
  };
  return request.send();
};


},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL0RvY3VtZW50cy9fUHJvdG90eXBlcy9fVGVzdExpYnJhcnkuZnJhbWVyL21vZHVsZXMvbXlNb2R1bGUuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vRG9jdW1lbnRzL19Qcm90b3R5cGVzL19UZXN0TGlicmFyeS5mcmFtZXIvbW9kdWxlcy9jbG91ZHN0aXRjaC5jb2ZmZWUiLCJub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiMgQWRkIHRoZSBmb2xsb3dpbmcgbGluZSB0byB5b3VyIHByb2plY3QgaW4gRnJhbWVyIFN0dWRpby4gXG4jIG15TW9kdWxlID0gcmVxdWlyZSBcIm15TW9kdWxlXCJcbiMgUmVmZXJlbmNlIHRoZSBjb250ZW50cyBieSBuYW1lLCBsaWtlIG15TW9kdWxlLm15RnVuY3Rpb24oKSBvciBteU1vZHVsZS5teVZhclxuXG5leHBvcnRzLm15VmFyID0gXCJteVZhcmlhYmxlXCJcblxuZXhwb3J0cy5teUZ1bmN0aW9uID0gLT5cblx0cHJpbnQgXCJteUZ1bmN0aW9uIGlzIHJ1bm5pbmdcIlxuXG5leHBvcnRzLm15QXJyYXkgPSBbMSwgMiwgM10iLCJleHBvcnRzLmdldCA9ICh1c2VyLCBhcHAsIGNhbGxiYWNrKSAtPlxuICB1cmwgPSBcImh0dHBzOi8vYXBpLmNsb3Vkc3RpdGNoLmNvbS9cIiArIHVzZXIgKyBcIi9cIiArIGFwcFxuICByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcbiAgcmVxdWVzdC5vcGVuKCdHRVQnLCB1cmwsIHRydWUpXG5cbiAgcmVxdWVzdC5vbmxvYWQgPSAtPlxuICAgIGlmIHJlcXVlc3Quc3RhdHVzID49IDIwMCBhbmQgcmVxdWVzdC5zdGF0dXMgPCA0MDBcbiAgICAgIGNhbGxiYWNrKEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpKVxuICAgIGVsc2VcbiAgICAgIGNhbGxiYWNrKEpTT04ucGFyc2Uoe2Vycm9yOiB0cnVlLCBtZXNzYWdlOiAnQmFkIHN0YXR1cyByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXI6ICcgKyByZXF1ZXN0LnN0YXR1c30pKVxuICByZXF1ZXN0Lm9uZXJyb3IgPSAtPlxuICAgIGNhbGxiYWNrKEpTT04ucGFyc2Uoe2Vycm9yOiB0cnVlLCBtZXNzYWdlOiAnRXJyb3IgcmVzcG9uc2UgZnJvbSBzZXJ2ZXInfSkpXG5cbiAgcmVxdWVzdC5zZW5kKCkiLCIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUVBQTtBREFBLE9BQU8sQ0FBQyxHQUFSLEdBQWMsU0FBQyxJQUFELEVBQU8sR0FBUCxFQUFZLFFBQVo7QUFDWixNQUFBO0VBQUEsR0FBQSxHQUFNLDhCQUFBLEdBQWlDLElBQWpDLEdBQXdDLEdBQXhDLEdBQThDO0VBQ3BELE9BQUEsR0FBYyxJQUFBLGNBQUEsQ0FBQTtFQUNkLE9BQU8sQ0FBQyxJQUFSLENBQWEsS0FBYixFQUFvQixHQUFwQixFQUF5QixJQUF6QjtFQUVBLE9BQU8sQ0FBQyxNQUFSLEdBQWlCLFNBQUE7SUFDZixJQUFHLE9BQU8sQ0FBQyxNQUFSLElBQWtCLEdBQWxCLElBQTBCLE9BQU8sQ0FBQyxNQUFSLEdBQWlCLEdBQTlDO2FBQ0UsUUFBQSxDQUFTLElBQUksQ0FBQyxLQUFMLENBQVcsT0FBTyxDQUFDLFlBQW5CLENBQVQsRUFERjtLQUFBLE1BQUE7YUFHRSxRQUFBLENBQVMsSUFBSSxDQUFDLEtBQUwsQ0FBVztRQUFDLEtBQUEsRUFBTyxJQUFSO1FBQWMsT0FBQSxFQUFTLHVDQUFBLEdBQTBDLE9BQU8sQ0FBQyxNQUF6RTtPQUFYLENBQVQsRUFIRjs7RUFEZTtFQUtqQixPQUFPLENBQUMsT0FBUixHQUFrQixTQUFBO1dBQ2hCLFFBQUEsQ0FBUyxJQUFJLENBQUMsS0FBTCxDQUFXO01BQUMsS0FBQSxFQUFPLElBQVI7TUFBYyxPQUFBLEVBQVMsNEJBQXZCO0tBQVgsQ0FBVDtFQURnQjtTQUdsQixPQUFPLENBQUMsSUFBUixDQUFBO0FBYlk7Ozs7QURJZCxPQUFPLENBQUMsS0FBUixHQUFnQjs7QUFFaEIsT0FBTyxDQUFDLFVBQVIsR0FBcUIsU0FBQTtTQUNwQixLQUFBLENBQU0sdUJBQU47QUFEb0I7O0FBR3JCLE9BQU8sQ0FBQyxPQUFSLEdBQWtCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQIn0=
