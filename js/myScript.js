//api url
const URL = "https://covid19.mathdro.id/api";


let app=angular.module("MyApp",[]);

app.controller("MyCtrl",($scope,$http)=>{
//this is controller

$scope.title="Corona Virus Updates!";

// $scope.changeValue=()=> {
//     $scope.title = "This is home time";
// }
// console.log("This is done!");

//calling API
$http.get(URL).then((response)=>{
    //success
    
    console.log(response.data);
    $scope.all_data = response.data;
},

(error)=>{
//errror
console.log(error);
}
);
//get country data
$scope.get_c_data = () =>{

    //console.log($scope.c);
    let country = $scope.c;
    if(country == ""){ 
        $scope.c_data=undefined;
        return;
    }
        $http.get(`${URL}/countries/${country}`).
        then ((response)=>{
            //success
            console.log(response.data)
            $scope.c_data = response.data;
        },(error)=>{
            console.log(error);

        })
};

});