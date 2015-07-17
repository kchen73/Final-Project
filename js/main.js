var app = angular.module('myApp', [])

app.controller('myCtrl', function($scope, $http) {
	$http.get('URL')
		.success(function(response) {
				$scope.data = response.data
		})
});

var data;
$.ajax({
	url: '/student/{version}/course/{year},{quarter},{curriculum_abbreviation},{course_number}/{section_id}.{xml/json/xhtml}'
	type: "get"
	success:function(dat) {
		data = dat
		// do something
	},
	dataType: "json"
})
