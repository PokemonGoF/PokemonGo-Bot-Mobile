'use strict';
angular.module('main').controller('MapCtrl', function ($log, $scope, $ionicHistory) {

  // var path = $location.path();
  // $scope.options = $scope.options || {};
  // if (path.indexOf('submit') != -1) {
  //   $scope.options.hideBackButton = true;
  // } else {
  //   $scope.options.hideBackButton = false;
  // }

  $ionicHistory.nextViewOptions({
    disableBack: true
  });

  function addLocationMarker (latLng) {
    var marker = new google.maps.Marker({
      position: latLng,
      map: $scope.map,
      animation: google.maps.Animation.DROP,
    });
    google.maps.event.addListener(marker, 'click', function () {
      //infowindow.open(map, marker);
      $log.log('location marker clicked');
    });
  }


  // Source: https://jsfiddle.net/ogsvzacz/6/
  function addLocationButton ()
  {
    var controlDiv = document.createElement('div');
    var firstChild = document.createElement('button');
    firstChild.style.backgroundColor = '#fff';
    firstChild.style.border = 'none';
    firstChild.style.outline = 'none';
    firstChild.style.width = '28px';
    firstChild.style.height = '28px';
    firstChild.style.borderRadius = '2px';
    firstChild.style.boxShadow = '0 1px 4px rgba(0,0,0,0.3)';
    firstChild.style.cursor = 'pointer';
    firstChild.style.marginRight = '10px';
    firstChild.style.padding = '0';
    //firstChild.title = 'Your Location';
    controlDiv.appendChild(firstChild);

    var secondChild = document.createElement('div');
    secondChild.style.margin = '5px';
    secondChild.style.width = '18px';
    secondChild.style.height = '18px';
    secondChild.style.backgroundImage = 'url(https://maps.gstatic.com/tactile/mylocation/mylocation-sprite-2x.png)';
    secondChild.style.backgroundSize = '180px 18px';
    secondChild.style.backgroundPosition = '0 0';
    secondChild.style.backgroundRepeat = 'no-repeat';
    firstChild.appendChild(secondChild);

    google.maps.event.addListener($scope.map, 'center_changed', function () {
      secondChild.style['background-position'] = '0 0';
    });

    firstChild.addEventListener('click', function () {
      var imgX = '0',
        animationInterval = setInterval( function () {
          imgX = imgX === '-18' ? '0' : '-18';
          secondChild.style['background-position'] = imgX + 'px 0';
        }, 500);

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( function (position) {
          var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
          addLocationMarker(latLng);
          $scope.map.setCenter(latLng);
          clearInterval(animationInterval);
          secondChild.style['background-position'] = '-144px 0';
        });
      } else {
        clearInterval(animationInterval);
        secondChild.style['background-position'] = '0 0';
      }
    });

    controlDiv.index = 1;
    $scope.map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(controlDiv);
  }

  function initializeGoogleMap () {
    /* global google */
    var defaultLocation = new google.maps.LatLng(40.7828647, -73.9675491);
    var mapOptions = {
      center: defaultLocation,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.TOP_LEFT
      },
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.CENTER_RIGHT
      },
      scaleControl: true,
      streetViewControl: false,
      fullscreenControl: false
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    $scope.map = map;

    addLocationMarker(defaultLocation);
    // Create location button after $scope.map is set
    addLocationButton();
  }

  $scope.initMap = initializeGoogleMap();

  $scope.centerOnMe = function () {
    if (!$scope.map) {
      return;
    }
    $log.log('Loading detected location...');
    // $scope.loading = $ionicLoading.show({
    //   content: 'Getting current location...',
    //   showBackdrop: false
    // });
    navigator.geolocation.getCurrentPosition(function (pos) {
      $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      //$scope.loading.hide();
    }, function (error) {
      $log.log('Unable to get location: ' + error.message);
    });
  };

  // $scope.clickTest = function () {
  //   alert('Example of infowindow with ng-click');
  // };
});
