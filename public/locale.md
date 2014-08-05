Locale
=========

Web Developer Toolbar
---------------------

As stated in the [configuration](configuration.md) section, if you set the setting 'locale_wdt' to true, it will be enabled and show within the Web Developer Toolbar, as seen here, highlighted in green.

![Locale Toolbar](locale_toolbar.png)

Profiler Panel
--------------
The profiler panel shows the locale information for the currently rendered page.

<div style="float: right;">![Locale Panel](locale_profiler.png)</div>
The switch locale section allows a user to switch between the different supported locales.<br />

The browser requested locale is the accept-language attribute from the page request headers, converted into human readable form.<br /><br />

The current locale section describes the locale as it was used for the currently rendered page.

The default locale section is factored by the app/config settings as defined by default_locale.<br /><br />

The supported locales sections is a list of the supported locales, and their associated human readable form.
