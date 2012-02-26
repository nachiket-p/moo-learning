var ProgressBar = new Class({
    Implements:Options,
    options: {},
    initialize:function(el,options) {
        this.setOptions(options);
        this.el = el;
        this._createElement();
        this.fx = new Fx.Tween(this.innerDiv, {
            duration: 'long',
            transition: Fx.Transitions.linear.easeOut,
            link: 'cancel', property: 'width'
        });
    },
    _createElement:function() {
        if(typeof(this.el) == 'string') {
            this.el = new Element('div',{'id':this.el});
        }
        this.el.addClass('progressBar');
        this.innerDiv = new Element('div',{'class':'progressBar-InnerDiv'});
        this.el.adopt(this.innerDiv);
    }.protect(),
    toElement:function() {
        return this.el;
    },
    setValue:function(value) {
        this.fx.start(value);                
    }
});
