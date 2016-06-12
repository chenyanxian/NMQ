

angular.module('app').service("cooke",function($http,$state){

    var cooke = function(){

        this.user = null;

        this.setUser = function(user){

            jsCoreMethod.setLocalStorage("user",jsCoreMethod.convertStringJson(user));
            this.user = user;
        }

        this.getUser = function(){

            this.user = jsCoreMethod.convertStringJson(jsCoreMethod.getLocalStorage("user"));

            if(this.user){
                return this.user;
            }else{

                this.user = {name:11,role:"管理员"};

                //$state.go("login");
            }
        }

        this.clearCacheData = function(){
            this.user = null;
        }
    }
    return new cooke();
})