# lsf-graphs-react
React.JS and Highcharts to display live cluster usage.

---

This is the follow-on code to lsf-graphs. It's a complete rewrite using React and Highcharts, including a react-highcharts adapter, redux, and an API util (component).
The main goal of this over the old way is to make it of a modern and maintainable design, better performing, and able to add extra components without having to shuffle around old code carefully.

## How to build
* Clone the repo
* Build with local dev server, or for distribution
```
npm install
npm run ( dev | build )
```

## Release History
* 0.2.0 - React 15.3, Babel 6 updates, babelrc hotloader, react key fixes, License fix, and public release
* 0.1.0 - Initial release  

## License
Copyright 2016 Zachary Giles  
MIT License (Expat)  

Please see the LICENSE file 
This license applies to all files in this project unless otherwise noted.  
If any code in here came from elsewhere, it was only in error because I forgot. Please let me know via an issue and I will fix it.
