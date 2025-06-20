// Takes a month name as input and prints the number of days in that month.
month='februar';

if(month==='january'||month==='march'||month==='may'||month==='july'||month==='september'
    ||month==='november'||month==='december'){
console.log('31 days');
    }
else if(month==='february'){
    console.log('28 or 29 days');
}
else if(month==='april'||month==='june'||month==='august'||month==='october'){
    console.log('30 days');
    }
    else{
        console.log('invalid');
    }