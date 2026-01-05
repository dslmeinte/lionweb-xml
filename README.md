# lionweb-xml

* `lionweb-ecore` contains the following:
  * An implementation (based on `@lionweb/class-core`) of the EMF Ecore language.
  * An Ecore file reader.
  * A transformer to transform an Ecore `EPackage` into a LionWeb language.
* `build` generates various artifacts: under its `artifacts/` directory, and in the `lionweb-ecore` package.
* `examples` contains and generates artifacts for various Ecore meta-models: Ecore itself, SysML v2 (including KerML), and the usual library example. 


## Development

Run the following commands on the command line to build everything:

```shell
$ npm run initialize
$ ./make.sh
```

Running the `initialize` NPM task is only necessary once, after cloning.

