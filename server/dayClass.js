module.exports = class Day {
    constructor(date, totalCases, newCases, newCasesSmoothed,
        totalDeaths, newDeaths, newDeathsSmoothed,
        totalCasesPerMillion, newCasesPerMillion,
        newCasesSmoothedPerMillion, totalDeathsPerMillion,
        newDeathsPerMillion, newDeathsSmoothedPerMillion,
        reproductionRate) {

            this.date = date;
            this.total_cases = totalCases;
            this.new_cases = newCases;
            this.new_cases_smoothed = newCasesSmoothed;
            this.total_deaths = totalDeaths;
            this.new_deaths = newDeaths;
            this.new_deaths_smoothed = newDeathsSmoothed;
            this.total_cases_per_million = totalCasesPerMillion;
            this.new_cases_per_million = newCasesPerMillion;
            this.new_cases_smoothed_per_million = newCasesSmoothedPerMillion;
            this.total_deaths_per_million = totalDeathsPerMillion;
            this.new_deaths_per_million = newDeathsPerMillion;
            this.new_deaths_smoothed_per_million = newDeathsSmoothedPerMillion;
            this.reproduction_rate = reproductionRate;
    }
    // setter
    set setDate(date) {this.date = date};
    set setTotalCases(totalCases) {this.total_cases = totalCases};
    set setNewCases(newCases) {this.newCases = newCases};
    set setNewCasesSmoothed(newCasesSmoothed) {this.newCasesSmoothed = newCasesSmoothed};
    set setTotalDeaths(totalDeaths) {this.totalDeaths = totalDeaths};
    set setNewDeaths(newDeaths) {this.newDeaths = newDeaths};
    set setNewDeathsSmoothed(newDeathsSmoothed) {this.newDeathsSmoothed = newDeathsSmoothed};
    set setTotalCasesPerMillion(totalCasesPerMillion) {this.totalCasesPerMillion = totalCasesPerMillion};
    set setNewCasesPerMillion(newCasesPerMillion) {this.newCasesPerMillion = newCasesPerMillion};
    set setNewCasesSmoothedPerMillion(newCasesSmoothedPerMillion) {this.newCasesSmoothedPerMillion = newCasesSmoothedPerMillion};
    set setTotalDeathsPerMillion(totalDeathsPerMillion) {this.totalDeathsPerMillion = totalDeathsPerMillion};
    set setNewDeathsPerMillion(newDeathsPerMillion) {this.newDeathsPerMillion = newDeathsPerMillion};
    set setNewDeathsSmoothedPerMillion(newDeathsSmoothedPerMillion) {this.newDeathsSmoothedPerMillion = newDeathsSmoothedPerMillion};
    set setReproductionRate(reproduction_rate) {this.reproduction_rate = reproduction_rate};

    // getter
    get getDate() {return this.date};
    get getTotalCases() {return this.totalCases};
    get getNewCases() {return this.newCases};
    get getNewCasesSmoothed() {return this.newCasesSmoothed};
    get getTotalDeaths() {return this.totalDeaths};
    get getNewDeaths() {return this.newDeaths};
    get getNewDeathsSmoothed() {return this.newDeathsSmoothed};
    get getTotalCasesPerMillion() {return this.totalCasesPerMillion};
    get getNewCasesPerMillion() {return this.newCasesPerMillion};
    get getNewCasesSmoothedPerMillion() {return this.newCasesSmoothedPerMillion};
    get getTotalDeathsPerMillion() {return this.totalDeathsPerMillion};
    get getNewDeathsPerMillion() {return this.newDeathsPerMillion};
    get getNewDeathsSmoothedPerMillion() {return this.newDeathsSmoothedPerMillion};
    get getReproductionRate() { return this.reproduction_rate};
}
