##
we always use `platformBrowserDynamic` function to bootstrap our AppModule. 
Since we want to bootstrap a standalone component we use `bootstrapApplication` function

##
Add CommonModule & RouterModule to imports array of standalone component

## 
change index.html           <app-root> to some other selector

## 
change main.ts ---> main23.ts            in angular.json
change it back to main23.ts after done

##
you need to import Common Module in every standalone component

##
new router standalone APIs  ===> tree-shakable standalone APIs
Bundlers can remove unused features of the router at build-time

