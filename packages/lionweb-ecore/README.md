# lionweb-ecore


### Note

1. Not all information present in an Ecore file is deserialized into an instance of `EPackage`.
    Only information in an Ecore file that’s useful for mapping to a LionWeb language is preserved.
    The purpose of this package is to be able to read in an XMI file that conforms to a given Ecore file, as an instance of the mapped LionWeb language.


### Assumptions:

1. The following namespace prefixes are currently hard-coded:
    * `http://www.eclipse.org/emf/2002/Ecore` &rarr; `ecore`
    * `http://www.w3.org/2001/XMLSchema-instance` &rarr; `xsi`
    * `http://www.omg.org/XMI` &rarr; `xmi`
2. Sub packages are not processed.

