#!/bin/bash

if [ -d "shirt-designer" ]; then
  cd shirt-designer
  echo "----Installing dependencies & building----"
  bash -c "yarn install"
  bash -c "yarn build"
else
  echo "----Cloning Projects----"
  git clone git@github.com:chadwithz/shirt-designer.git
  cd shirt-designer
  git checkout development
  echo "----Installing dependencies & building----"
  bash -c "yarn install"
  bash -c "yarn build"
fi

bash -c "pm2 list" | grep "shirt-designer"
if [ $? -eq 0 ]; then
  bash -c "pm2 stop shirt-designer"
  bash -c "pm2 delete shirt-designer"
fi
pm2 start npm --name "shirt-designer" -- start