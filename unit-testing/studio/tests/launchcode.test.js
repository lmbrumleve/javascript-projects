// launchcode.test.js code:
const launchcode = require('../index.js');

describe("properties of Launchcode", function(){

  test("should return 'nonprofit' value of organization", function (){
    expect(launchcode.organization).toEqual('nonprofit');
  }) 

  test("should return 'jeff' value of executiveDirector", function (){
    expect(launchcode.executiveDirector).toEqual('Jeff');
  }) 

  test("should return '100' value of percentageCoolEmployees", function (){
    expect(launchcode.percentageCoolEmployees).toEqual('100');
  }) 

  test(`should return ["Web Development", "Data Analysis", "Liftoff"] for value of programsOffered, and an array length of 3`, function (){
    expect(launchcode.programsOffered.length).toEqual(3);
    expect((launchcode.programsOffered)[0]).toEqual("Web Development");
    expect((launchcode.programsOffered)[1]).toEqual("Data Analysis");
    expect((launchcode.programsOffered)[2]).toEqual("Liftoff");
  }) 

  test("When passed a number that is ONLY divisible by 2, launchOutput() returns 'Launch!'", function () {
    expect(launchcode.launchOutput(2)).toBe('Launch!');
  })

  test("When passed a number that is ONLY divisible by 3, launchOutput() returns 'Code!'", function () {
    expect(launchcode.launchOutput(3)).toBe('Code!');
  })

  test("When passed a number that is ONLY divisible by 5, launchOutput() returns 'Rocks!'", function () {
    expect(launchcode.launchOutput(5)).toBe('Rocks!');
  })
 
  test("When passed a number that is divisible by 2 AND 3, launchOutput() returns 'LaunchCode!' (not 'Launch!Code!')", function () {
    expect(launchcode.launchOutput(6)).toBe('LaunchCode!');
  })
test("When passed a number that is divisible by 2 and 5, launchOutput() returns 'Launch Rocks! (CRASH!!!!)'", function () {
  expect(launchcode.launchOutput(10)).toBe('Launch Rocks! (CRASH!!!!)');
})
  // Write your unit tests here!
  
});