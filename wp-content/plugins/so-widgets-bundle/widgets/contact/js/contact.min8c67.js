function soContactFormInitialize(){SiteOriginContactForm.init(window.jQuery,!0)}var SiteOriginContactForm={init:function(i,t){var e=i("form.sow-contact-form");e.each(function(){var e=i(this),o=i(this).find(".sow-submit-wrapper > input.sow-submit");if(t){var n=e.find(".sow-recaptcha");if(n.length){var a=n.data("config");o.prop("disabled",!0),grecaptcha.render(n.get(0),{sitekey:a.sitekey,theme:a.theme,type:a.type,size:a.size,callback:function(i){o.prop("disabled",!1)}})}}o.click(function(){o.prop("disabled",!0),e.submit()})})}};jQuery(function(i){var t=i("form.sow-contact-form"),e=t.toArray().some(function(t){return i(t).find("div").hasClass("sow-recaptcha")});if(e)if(window.recaptcha)SiteOriginContactForm.init(i,e);else{var o="https://www.google.com/recaptcha/api.js?onload=soContactFormInitialize&render=explicit",n=i('<script type="text/javascript" src="'+o+'" async defer>');i("body").append(n)}else SiteOriginContactForm.init(i,e)});