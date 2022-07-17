### A fast initial analysis of the task    

The data set is quite large. Ideally, this should be the output of dedicted endpoint on a server, and definetely SHOULD implement pagination. However, given no point nor evaluation for the server app will be given, i will use the data `as is` to bootstrap the project. Json-server is a fast alternative to a dedicated express app. Also, adding a custom srver will increase complexity of spinning the containers and deployment. I will leave this feature as last, if i will have enough time.    


Will use a classic CRA with redux toolkit as base app.   
React cosmos for visual testing, and cypress for e2e. (I don´t think it is necessary to specify there will be unit tests :) ).

Being used to git flow, this will be the only file directly committed on master.