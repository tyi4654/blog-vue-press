#!/bin/bash

npm run docs:build

scp -r ./docs/.vuepress/dist/. front_souxw:/www/wwwroot/front.souxw.com