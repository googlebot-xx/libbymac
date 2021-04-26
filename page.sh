#!/bin/bash
key="123456781234567812345678"
input="/Users/aa/work/project/vbkbrowser-wk/page.js"
output="/Users/aa/work/project/vbkbrowser-wk/page.dat"
aes="/Users/aa/work/project/vbkbrowser-wk/aes"
$aes e $key $input $output
cp ./page.dat vbkbrowser/page.dat