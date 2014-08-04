Installation
==============

Composer
----------

This is the recommended method of installation. To install via composer, ensure that you have composer installed. Then add this to your composer.json file:

```json
// composer.json
{
    // ...
    require-dev: {
        // ...
        "t73biz/translocation-bundle": "dev-master"
    }
}
```
Then, you can install the new dependencies by running Composer’s update command from the directory where your composer.json file is located:

```bash
	php composer.phar update
```

Now, Composer will automatically download all required files, and install them for you. All that is left to do is to update your AppKernel.php file, and register the new bundle in the development section:

```php
<?php

// in AppKernel::registerBundles()
if (in_array($this->getEnvironment(), array('dev', 'test'))) {
    // ...
    new T73Biz\Bundle\TranslocationBundle(),
    // ...
}
```

Next Steps
----------

Next, you will want to configure the bundle in app/config/config.yml
Visit [Configuration](configuration.md) for more information.
