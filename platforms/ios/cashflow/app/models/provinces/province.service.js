"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
firebase.init({
    persist: false,
    storageBucket: 'gs://hello-e2914.appspot.com',
    onAuthStateChanged: function (data) {
        if (data.loggedIn) {
            data.token = data.user.uid;
        }
        else {
            data.token = "";
        }
    }
}).then(function (instance) {
    console.log("firebase.init done");
}, function (error) {
    console.log("firebase.init error: " + error);
});
var Data = (function () {
    function Data() {
    }
    Data.prototype.getList = function () {
        return firebase.query(this.onQueryEvent, '/list', {
            singleEvent: true,
            orderBy: {
                type: firebase.QueryOrderByType.CHILD,
                value: 'since'
            },
        })
            .then(function (result) {
            return result.value;
        })
            .catch(function (error) {
            return error;
        });
    };
    Data.prototype.onQueryEvent = function (result) {
    };
    ;
    return Data;
}());
Data = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], Data);
exports.Data = Data;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmluY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb3ZpbmNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsdURBQXlEO0FBRXpELFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDVixPQUFPLEVBQUUsS0FBSztJQUNkLGFBQWEsRUFBRSw4QkFBOEI7SUFDN0Msa0JBQWtCLEVBQUUsVUFBQyxJQUFTO1FBQzFCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDM0IsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsQ0FBQztJQUNMLENBQUM7Q0FDQSxDQUFDLENBQUMsSUFBSSxDQUNQLFVBQVUsUUFBUTtJQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUN0QyxDQUFDLEVBQ0QsVUFBVSxLQUFLO0lBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsR0FBRyxLQUFLLENBQUMsQ0FBQztBQUNqRCxDQUFDLENBQ0EsQ0FBQztBQUtOLElBQWEsSUFBSTtJQUtiO0lBQ0EsQ0FBQztJQUVELHNCQUFPLEdBQVA7UUFDSSxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLE9BQU8sRUFBRTtZQUMxQyxXQUFXLEVBQUUsSUFBSTtZQUNqQixPQUFPLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLO2dCQUNyQyxLQUFLLEVBQUUsT0FBTzthQUNqQjtTQUNKLENBQUM7YUFDRCxJQUFJLENBQUMsVUFBQSxNQUFNO1lBQ1IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDeEIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSztZQUNSLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUE7SUFDVixDQUFDO0lBSUQsMkJBQVksR0FBWixVQUFhLE1BQU07SUFDZixDQUFDO0lBQUEsQ0FBQztJQUVWLFdBQUM7QUFBRCxDQUFDLEFBN0JELElBNkJDO0FBN0JZLElBQUk7SUFEaEIsaUJBQVUsRUFBRTs7R0FDQSxJQUFJLENBNkJoQjtBQTdCWSxvQkFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnO1xuXG5maXJlYmFzZS5pbml0KHtcbiAgICBwZXJzaXN0OiBmYWxzZSxcbiAgICBzdG9yYWdlQnVja2V0OiAnZ3M6Ly9oZWxsby1lMjkxNC5hcHBzcG90LmNvbScsXG4gICAgb25BdXRoU3RhdGVDaGFuZ2VkOiAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIGlmIChkYXRhLmxvZ2dlZEluKSB7XG4gICAgICAgIGRhdGEudG9rZW4gPSBkYXRhLnVzZXIudWlkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICBkYXRhLnRva2VuID0gXCJcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICB9KS50aGVuKFxuICAgIGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImZpcmViYXNlLmluaXQgZG9uZVwiKTtcbiAgICB9LFxuICAgIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcImZpcmViYXNlLmluaXQgZXJyb3I6IFwiICsgZXJyb3IpO1xuICAgIH1cbiAgICApO1xuXG4gICAgXG4gXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGF0YSB7XG4gXG4gICAgcHVibGljIHN0b3JhZ2U6IGFueTtcbiAgICBwdWJsaWMgdG9rZW4gOiBhbnk7XG4gXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIGdldExpc3QoKXtcbiAgICAgICAgcmV0dXJuIGZpcmViYXNlLnF1ZXJ5KHRoaXMub25RdWVyeUV2ZW50LCAnL2xpc3QnLCB7XG4gICAgICAgICAgICAgICAgc2luZ2xlRXZlbnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgb3JkZXJCeToge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBmaXJlYmFzZS5RdWVyeU9yZGVyQnlUeXBlLkNISUxELFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ3NpbmNlJyBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC52YWx1ZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG5cblxuICAgIG9uUXVlcnlFdmVudChyZXN1bHQpIHtcbiAgICAgICAgfTtcbiBcbn0iXX0=