App.Router.map(function() {
    this.resource("customers", function(){
        this.route("show", { path: "/:id" });
    });
});
App.CustomersRoute = Ember.Route.extend({
    model: function () {
        return this.store.find('customer');
    }
});