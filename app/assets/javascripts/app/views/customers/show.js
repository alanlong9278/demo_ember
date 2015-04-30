App.ShowCustomerView = Ember.View.extend({
    templateName: 'app/templates/customers/show',
    init: function() {
        this._super();

        // Create a new contact that's a duplicate of the contact in the parentView;
        // Changes made to the duplicate won't be applied to the original unless
        // everything goes well in submitForm()
       // this.set("customer", this.get('parentView').get('customer').copy());
    },
    cancelDetail: function() {
        this.get("parentView").hideDetail();
    }
});