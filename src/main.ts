import * as d3 from 'd3';

d3.select('body').append('h1').text('Hello World');
d3.csv('./database/a.csv').then(data => {
    console.log(data);
})

d3.json('./database/b.json').then(data => {
    console.log(data);
})