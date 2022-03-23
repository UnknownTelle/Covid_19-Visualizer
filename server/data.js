const fs = require('fs'); 
const csv = require('csv-parser');
const { debug } = require('console');

class Row {
    constructor(date, totalCases, newCases, newCasesSmoothed,
        totalDeaths, newDeaths, newDeathsSmoothed,
        totalCasesPerMillion, newCasesPerMillion,
        newCasesSmoothedPerMillion, totalDeathsPerMillion,
        newDeathsPerMillion, newDeathsSmoothedPerMillion,
        reproductionRate) {

            this.date = date;
            this.totalCases = totalCases;
            this.newCases = newCases;
            this.newCasesSmoothed = newCasesSmoothed;
            this.totalDeaths = totalDeaths;
            this.newDeaths = newDeaths;
            this.newDeathsSmoothed = newDeathsSmoothed;
            this.total_cases_per_million = totalCasesPerMillion;
            this.newCasesPerMillion = newCasesPerMillion;
            this.newCasesSmoothedPerMillion = newCasesSmoothedPerMillion;
            this.totalDeathsPerMillion = totalDeathsPerMillion;
            this.newDeathsPerMillion = newDeathsPerMillion;
            this.newDeathsSmoothedPerMillion = newDeathsSmoothedPerMillion;
            this.reproductionRate = reproductionRate;
    }
    // setter
    set setDate(value) {this.date = value};
    set setTotalCases(value) {this.totalCases = value};
    set setNewCases(value) {this.newCases = value};
    set setNewCasesSmoothed(value) {this.newCasesSmoothed = value};
    set setTotalDeaths(value) {this.totalDeaths = value};
    set setNewDeaths(value) {this.newDeaths = value};
    set setNewDeathsSmoothed(value) {this.newDeathsSmoothed = value};
    set setTotalCasesPerMillion(value) {this.totalCasesPerMillion = value};
    set setNewCasesPerMillion(value) {this.newCasesPerMillion = value};
    set setNewCasesSmoothedPerMillion(value) {this.newCasesSmoothedPerMillion = value};
    set setTotalDeathsPerMillion(value) {this.totalDeathsPerMillion = value};
    set setNewDeathsPerMillion(value) {this.newDeathsPerMillion = value};
    set setNewDeathsSmoothedPerMillion(value) {this.newDeathsSmoothedPerMillion = value};
    set setReproductionRate(value) {this.reproductionRate = value};
}