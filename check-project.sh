#!/bin/bash

if [ -d "shirt-designer" ]; then
  cd shirt-designer
  yarn install
  yarn build
else
  git clone git@github.com:chadwithz/shirt-designer.git
  cd shirt-designer
  yarn install
  yarn build
fi

pm2 list | grep "shirt-designer"
if [ $? -eq 0 ]; then
  pm2 stop "shirt-designer"
  pm2 delete "shirt-designer"
fi
pm2 start npm --name "shirt-designer" -- start