

angular.module('app').service("cooke",function($http,$state){

    var cooke = function(){

        this.user = null;

        this.setUser = function(user){
            this.user = user;
        }

        this.getUser = function(){
            if(this.user){
                return this.user;
            }else{
                $state.go("login");
            }
        }

        this.clearCacheData = function(){
            this.user = null;
        }
    }
    return new cooke();
})