#!/bin/sh

#Check connection
echo "Check connection\n"
curl http://localhost:8080/redistest

echo "populate data\n"
curl -d "" http://localhost:8080/redistest/populateDB > /dev/null 2>&1

echo "Time taken for mongoDB to retrieve data\n" 
for (( i=0; i <= 10; ++i ))
do 
  start=`date +%s%N`;curl http://localhost:8080/redistest/mongotime > /dev/null 2>&1;end=`date +%s%N`;echo `expr $end - $start`
done
echo "\n"

echo "Time taken for Redis to retrieve data" 
for (( i=0; i <= 10; ++i ))
do 
  start=`date +%s%N`;curl http://localhost:8080/redistest/redistime > /dev/null 2>&1;end=`date +%s%N`;echo `expr $end - $start`
done
echo "\n"

echo "Teardown\n"
curl -d "" http://localhost:8080/redistest/clearDB
curl -d "" http://localhost:8080/redistest/clearcache