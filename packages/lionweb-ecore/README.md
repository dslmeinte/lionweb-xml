# @lionweb-xml/lionweb-ecore

This package contains the following:

1. An **implementation of the EMF Ecore language**, as a LionWeb language (based on `@lionweb/class-core`).
   Note that not all information present in an Ecore file is deserialized into an instance of `EPackage`.
   Only information in an Ecore file that’s useful for mapping to a LionWeb language is preserved.

2. An **Ecore file reader** that deserializes an Ecore file as an instance of the LionWeb language (of 1).
  The `readEcoreFile` function reads the Ecore file at the given path, and deserializes it as an instance of the `EPackage` concept of the `Ecore` LionWeb language.

3. A `asLionWebLanguage` transformer function that transforms an Ecore `EPackage` into a LionWeb language.

The eventual purpose of this package is to be able to read in an XMI file that conforms to a given Ecore file, as an instance of the mapped LionWeb language.


## Development

Run the following on the command line to build this package:

```shell
$ npm run build
```

