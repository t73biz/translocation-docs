Configuration
==============

Basic Setup
-------------

The configuration only requires one setting. The 'supported_locales' setting takes an array of supported locales. The locale identifier should be compliant with UTF-8 encoding.

There is also an optional setting that can be used to enable the locale portion of this bundle. The setting 'locale_wdt' when set to true, will activate the wdt toolbar icon and the panel inside of the profiler. This is only useful when in a dev environment, as the toolbar is not normally active in production.

A complete configuration set could look like:

```
t73_biz_translocation:
    supported_locales: ['en', 'es', 'ru', 'de', 'fr']
    locale_wdt: true
```
