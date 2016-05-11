# yo-glportal

A generator for [Yeoman](http://yeoman.io) based on https://github.com/gpichot/generator-cpp-suite
## Purpose
I use it to set up new C++ project with CMake configured.
It automatically sets up a git repository in the current directory.

## Supports
It currently supports the following tools:

* CMake
* Pkg-config
* Doxygen for documentation
* GTest for unit testing (and testing)
* Lcov and Gcov for code coverage and coverage report

**Note**: for code coverage it will automatically download as a submodule
a repository of CMake modules.

## Usage
To install type as root 

    npm link

To create a new project in an empty directory run:

    yo glportal

## Additional commands
### New class
An additional command can be used to automatically create a new C++ class:

    yo glportal:addclass
