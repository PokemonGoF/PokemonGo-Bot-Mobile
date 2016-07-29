'use strict';
// Source: https://github.com/andrewmcgivery/ionic-ion-showWhen
angular.module('main')
	.directive('showWhen', ['$window', function($window) {
		return {
			restrict: 'A',
			link: function($scope, $element, $attr) {

				function checkExpose() {
					var mq = $attr.showWhen == 'large' ? '(min-width:768px)' : $attr.showWhen;
					if($window.matchMedia(mq).matches){
						$element.removeClass('ng-hide');
					} else {
						$element.addClass('ng-hide');
					}
				}

				function onResize() {
					debouncedCheck();
				}

				var debouncedCheck = ionic.debounce(function() {
					$scope.$apply(function(){
						checkExpose();
					});
				}, 300, false);

				checkExpose();

				ionic.on('resize', onResize, $window);

				$scope.$on('$destroy', function(){
					ionic.off('resize', onResize, $window);
				});

			}
		};
	}])

	.directive('hideWhen', ['$window', function($window) {
		return {
			restrict: 'A',
			link: function($scope, $element, $attr) {

				function checkExpose() {
					var mq = $attr.hideWhen == 'large' ? '(min-width:768px)' : $attr.hideWhen;
					if($window.matchMedia(mq).matches){
						$element.addClass('ng-hide');
					} else {
						$element.removeClass('ng-hide');
					}
				}

				function onResize() {
					debouncedCheck();
				}

				var debouncedCheck = ionic.debounce(function() {
					$scope.$apply(function(){
						checkExpose();
					});
				}, 300, false);

				checkExpose();

				ionic.on('resize', onResize, $window);

				$scope.$on('$destroy', function(){
					ionic.off('resize', onResize, $window);
				});

			}
		};
	}])

	.directive('showWhenState', ['$window','$state','$rootScope', function($window,$state,$rootScope) {
		return {
			restrict: 'A',
			link: function($scope, $element, $attr) {

				function checkExpose(){
					var state = $state.current.name;
					var statesToMatch = $attr.showWhenState.split(" || ");

					if(statesToMatch.indexOf(state) > -1){
						$element.removeClass('ng-hide');
					} else {
						$element.addClass('ng-hide');
					}
				}

				$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
					checkExpose();
				})

				checkExpose();
			}
		};
	}]);