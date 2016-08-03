angular.module('paGraphs', [])

    .service('drawChart', function () {
        randomScalingFactor = function () {
            return Math.round(Math.random() * 100);
            //return 0;
        };
        randomColorFactor = function () {
            return Math.round(Math.random() * 255);
        };
        this.randomColor = function (opacity) {
            return 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',' + (opacity || '.3') + ')';
        };


        this.createChart = function (chartCanvas, chartData, chartType, chartTitle) {
            return new Chart(chartCanvas, {
                type: chartType,
                data: chartData,
                options: {
                    responsive: true,
                    title: {
                        display: true,
                        text: chartTitle
                    },
                    tooltips: {
                        mode: 'single',
                        callbacks: {}
                    },
                    hover: {
                        mode: 'label'
                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: ''
                            }
                        }],
                        yAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: '# of candidates'
                            },
                            ticks: {
                                suggestedMin: 0,
                                suggestedMax: 8
                            }
                        }]
                    }
                }
            });
        }
    })


    .controller('graphCtrl', function ($scope, drawChart) {
        var chartCanvas = document.getElementById("myChart");
        var chartObj;

        $scope.randomScalingFactor = function () {
            return Math.round(Math.random() * 100);
            //return 0;
        };
        $scope.randomColorFactor = function () {
            return Math.round(Math.random() * 255);
        };
        $scope.randomColor = function (opacity) {
            return 'rgba(' + $scope.randomColorFactor() + ',' + $scope.randomColorFactor() + ',' + $scope.randomColorFactor() + ',' + (opacity || '.3') + ')';
        };

        $scope.readTextFile = function (file) {
            var rawFile = new XMLHttpRequest();
            var allText;
            rawFile.open("GET", file, false);
            rawFile.onreadystatechange = function () {
                if (rawFile.readyState === 4) {
                    if (rawFile.status === 200 || rawFile.status == 0) {
                        allText = rawFile.responseText;
                    }
                }
            };
            rawFile.send(null);
            console.log(allText);
            $scope.parseJSON(allText);
        };

        // $scope.jsondata; //Will store JSON data once parsed

        $scope.names = [];

        $scope.calls = [];
        $scope.rejected = [];
        $scope.interested = [];
        $scope.offer = [];
        $scope.joined = [];

        var data = [];

        //Uses PapaParser, converts csv to JSON, ready to be parsed for charting
        $scope.parseJSON = function (csv) {
            Papa.parse(csv, {
                delimiter: "",
                newline: "",
                header: true,
                complete: function (results) {
                    $scope.jsondata = results;
                    console.log($scope.jsondata.data);
                }
            });

            data = $scope.jsondata.data;

            for (i = 0; i < data.length; i++) {
                var name = data[i]["Date"];
                $scope.names.push(name);
                $scope.calls[name] = data[i]["Call"];
                $scope.rejected[name] = data[i]["Rejected"];
                $scope.interested[name] = data[i]["Interested"];
                $scope.offer[name] = data[i]["Offer"];
                $scope.joined[name] = data[i]["Joined"];
            }

        };

        $scope.button = function () {
            $scope.readTextFile('csvGroupJuly.csv');
            $scope.labels = ["Called", "Rejected", "Interested", "Offer Made", "Joined"];
        };

        $scope.nameChosen = function (name) {
            console.log(name);
            // console.log("# calls for " + name + " = " + $scope.calls[name]);
            $scope.createChart(name);
        };

        $scope.createChart = function (name) {
            console.log("creating chart for " + name);
            console.log("# calls for " + name + " = " + $scope.calls[name]);
            if (chartObj != null || chartObj != undefined) {
                console.log(chartObj);
                chartObj.destroy();
            }


            var calls = [];
            calls.push($scope.calls[name]);
            console.log("Called: " + calls);
            var rejected = [];
            rejected.push($scope.rejected[name]);
            console.log("Rejected: " + rejected);
            var interested = [];
            interested.push($scope.interested[name]);
            console.log("interested: " + interested);
            var offer = [];
            offer.push($scope.offer[name]);
            console.log("offer: " + offer);
            var joined = [];
            joined.push($scope.joined[name]);
            console.log("joined: " + joined);


            var chartTitle = 'Data for: ' + name;

            var theDataForTheChart = {
                labels: [name],
                datasets: [
                    {
                        label: "Total Calls",
                        fill: false,
                        borderColor : '#000000',
                        backgroundColor: '#0078FF',
                        borderWidth: 3,
                        data: calls
                    },
                    {
                        label: "Rejected",
                        fill: false,
                        borderColor : '#000000',
                        backgroundColor: '#00FF00',
                        borderWidth: 3,
                        data: rejected
                    },
                    {
                        label: "Interested",
                        fill: false,
                        borderColor : '#000000',
                        backgroundColor: '#FF0000',
                        borderWidth: 3,
                        data: interested
                    },
                    {
                        label: "Offer made",
                        fill: false,
                        borderColor : '#000000',
                        backgroundColor: '#00FFFF',
                        borderWidth: 3,
                        data: offer
                    },
                    {
                        label: "Joined",
                        fill: false,
                        borderColor : '#000000',
                        backgroundColor: '#FFFF00',
                        borderWidth: 3,
                        data: joined
                    }

                ]
            };

            chartObj = drawChart.createChart(chartCanvas, theDataForTheChart, 'bar', chartTitle);

        };
    });
