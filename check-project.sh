#!/bin/bash

if [ -d "shirt-designer" ]; then
  cd shirt-designer
else
  git clone git@github.com:chadwithz/shirt-designer.git
  cd shirt-designer
fi