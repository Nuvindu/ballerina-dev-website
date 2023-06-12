---
title: 'Expressive query language'
description: Ballerina's query language is a powerful feature that enhances data-oriented programming by providing a concise and expressive way to transform and manipulate data. It allows developers to perform complex data operations such as filtering, mapping, aggregating, and sorting with ease. The query language in Ballerina is specifically designed to work seamlessly with structured data types like records, making it well-suited for data-oriented programming tasks.
---
```
import ballerina/io;

type Country record {|
    string country;
    string continent;
    int population;
    int cases;
    int deaths;
|};

public function main() returns error? {
    // Perform data transformation using Ballerina's query language
    json summary = from var {country, continent, population, cases, deaths} in check covidClient->/countries
                   where population >= 100000 && deaths >= 100
                   let decimal caseFatalityRatio = (decimal) deaths / (decimal) cases * 100
                   order by caseFatalityRatio descending
                   limit 10
                   select {country, continent, population, caseFatalityRatio};

    io:println(summary);
}
```