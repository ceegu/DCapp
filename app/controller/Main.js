Ext.define('DCapp.controller.Main', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            main: 'mainpanel',
            menu: 'menupanel',
            loginform: 'loginpanel'
        },
        control: {
            'button[action=login]': {
                tap: 'doLogin'
            }
        }
    },

    launch: function() {
        this.getMain().push({xtype: 'loginpanel'});
    },

    doLogin: function(){
        var form = this.getLoginform()
        , vals = form.getValues()
        , user = vals.username
        , pass = vals.password
        , err = []
        , main = this.getMain()
        , menu = this.getMenu();
        if(!user) {
            err.push("Utilizatorul este necompletat.");
        }
        if(!pass) {
            err.push("Parola este necompletata.");
        }
        if(err.length > 0) {
            var msg = err.join("<br>");
            Ext.Msg.alert('Eroare', msg, Ext.emptyFn);
        } else {
            form.submit({
                url: 'login.php',
                method: 'POST',
                success: function(frm, res) {
                    if(res.success) {
                        main.push({xtype: 'menupanel'});
                    }
                },
                failure: function(frm, res) {
                    var error = res.err;
                    Ext.Msg.alert('Eroare', error, Ext.emptyFn);
                }
            });
        }
    }
});
