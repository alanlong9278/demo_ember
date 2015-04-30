App.ShowCustomerView = Ember.View.extend({
    templateName: 'app/templates/customers/show',
    init: function() {
        this._super();


       //this.set("customer", this.get('parentView').get('customer').copy());
    },
    cancelDetail: function() {
        this.get("parentView").hideDetail();
    }
});