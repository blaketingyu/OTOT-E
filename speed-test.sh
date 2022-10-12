#!/bin/sh

#Check connection
echo "Check connection\n"
curl http://localhost:8080/redistest > /dev/null 2>&1

echo "populate data\n"
curl -d "" http://localhost:8080/redistest/populateDB > /dev/null 2>&1

echo "Recording time taken for mongoDB to retrieve data\n" 
for (( i=0; i <= 10; ++i ))
do 
  curl http://localhost:8080/redistest/mongotime > /dev/null 2>&1;
done
echo "\n"

echo "Recording Time taken for Redis to retrieve data" 
for (( i=0; i <= 10; ++i ))
do 
  curl http://localhost:8080/redistest/redistime > /dev/null 2>&1;
done
echo "\n"

echo "Teardown\n"
curl -d "" http://localhost:8080/redistest/clearDB > /dev/null 2>&1;
curl -d "" http://localhost:8080/redistest/clearcache > /dev/null 2>&1;