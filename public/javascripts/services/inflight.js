(function(){

InFlight.initService(["flightdata/v2"], function(FlightData){
    window.FlightData = FlightData;
}, function(){
    console.log("Couldn't load inflight services")
});

})();