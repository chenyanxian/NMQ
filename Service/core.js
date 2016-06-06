

angular.module('app').service("core",function($http,$state){

    //return {
    //    splitStr:function(str){
    //        return str.split(',');
    //    }
    //}

    var cooke = function(){

        this.user = null;

        this.setUser = function(user){
            this.user = user;
        }

        /*this.getUser = function(){
            if(this.user){
                return this.user;
            }else{
                $state.go("admin");
            }
        }
*/
        this.clearCacheData = function(){
            this.user = null;
        }

    }
    return new cooke();
})