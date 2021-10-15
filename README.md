install typescript compiler
#npm install typescript -g  -----windows
#sudo npm install typescript -g  ------mac

check compiler version
#tsc -v

extension should be
.ts

run typescript file
#tsc filename.ts

tsc default compiler support es5
we have to change to es6
i.e we have to change the default compiler to custom compiler
#tsc --init
it creates file tsconfig.jsong
here we have to change es5 to es6 manually
after that we have to run command
#tsc
then all the js files will converted into es6 format

enable watch mode i.e auto run file everytime we change the code without run manually
#tsc --watch

eventhough file have static type error i.e if string reassign to number vice versa, the code will be compiled and we get output in js file.
to avoid that we have to enable feature 
"noEmitOnError": true, in tsconfig.json file
if we enable that feature , it won't compile and return js file if it have any static errors
