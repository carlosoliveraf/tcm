angular.module("main").controller("loginCtrl", function ($rootScope, $scope, $http, $routeParams, $location) {
	
	$rootScope.logged = false;
	$rootScope.menu = false;
	$scope.users = {};
    $scope.params = {};
    $scope.showPassword = false;
    $scope.error = false;

    $scope.toggleShowPassword = function() {
        $scope.showPassword = !$scope.showPassword;
    }



    $scope.login = function (params) {
		//$http.get('http://localhost:5000/users/').then(function (response) {
		$http.get('https://lit-hamlet-34738.herokuapp.com/users/').then(function (response) {
			$scope.users = response.data;
			console.log($scope.users);
			var login = params.login;
			var passw = params.password;
			for(index in $scope.users){
				if($scope.users[index].username.toUpperCase() == login.toUpperCase() ){
					if($scope.users[index].password == passw){
						$rootScope.logged = true;
						$rootScope.menu = true;
						$rootScope.username = $scope.users[index].name;
						$scope.error = false;
						console.log("logged in");
						return $location.path('/home');
						//return $location.url('/home');
					}
				}

			};
			$scope.error = true;

		});
			


		};







});

