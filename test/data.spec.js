global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

//it('debería retornar "example"', () => {
   // assert.equal(example(), 'example');
  //});

describe("window.filterData", () => {
  
  it("debería ser una función", () => {
    assert.equal(typeof window.filterData, "function");
  });
})

describe("window.filterData", () => {
  const Data = [
    { 
      "name":"Balbasaur",
      "type":"Gross, Poison"
    },
    {
      "name":"Charmander",
      "type":"Fire"
    },
    { 
      "name":"Squirtle",
      "type":"Water"
    },
    ]
  
    it("deberia retornar el objeto Balbasaur al filtrar por tipo Gross", () => {
      assert.deepEqual(window.filterData(Data, "Gross"), [{"name":"Balbasaur", "type":"Gross, Poison"}])
      });
    })

    describe("window.filterOrder", () => {
  
      it("debería ser una función", () => {
        assert.equal(typeof window.filterOrder, "function");
      });
    })

    describe("window.filterOrder", () => {
      const Data = [
        { "id": 1,
          "name":"Balbasaur",
          "type":"Gross, Poison"
        },
        { "id": 4,
          "name":"Charmander",
          "type":"Fire"
        },
        { "id": 7,
          "name":"Squirtle",
          "type":"Water"
        },
        ]
      
        it("deberia retornar los objetos ordenados de manera decreciente según su id", () => {
          assert.deepEqual(window.filterOrder(Data, "id", "decreasing"), [{"id": 7, "name":"Squirtle", "type":"Water"}, { "id": 4,
          "name":"Charmander", "type":"Fire"}, { "id": 1, "name":"Balbasaur", "type":"Gross, Poison"},])
          });
        })

        describe("window.filterOrder", () => {
          const Data = [
            { 
              "id": 7,
              "name":"Squirtle",
              "type":"Water"
            },
            { "id": 4,
              "name":"Charmander",
              "type":"Fire"
            },
            { "id": 1,
              "name":"Balbasaur",
              "type":"Gross, Poison"
            },
            ]
          
            it("deberia retornar los objetos ordenados de manera creciente según su id", () => {
              assert.deepEqual(window.filterOrder(Data, "id", "growing"), [{"id": 1, "name":"Balbasaur", "type":"Gross, Poison"}, { "id": 4,
              "name":"Charmander", "type":"Fire"}, {"id": 7, "name":"Squirtle", "type":"Water"},])
              });
            })

            describe("window.filterHour", () => {
  
              it("debería ser una función", () => {
                assert.equal(typeof window.filterHour, "function");
              });
            })

            describe("window.filterHour", () => {
              const Data = [
                { 
                  "name":"Balbasaur",
                  "spawn_time": "20:00",
                },
                { 
                  "name":"Charmander",
                  "spawn_time": "08:45",
                },
                { 
                  "name": "Spearow",
                  "spawn_time": "12:25",
                },
                { 
                  "name": "Articuno",
                  "spawn_time": "N/A",
                },
                ]
              
                it("deberia retornar los objetos Charmander y 08:45", () => {
                  assert.deepEqual(window.filterHour(Data, "spawn_time", "morning"), [{"name":"Charmander", "spawn_time": "08:45"},])
                  });

                it("deberia retornar los objetos Spearow y 12:25", () => {
                  assert.deepEqual(window.filterHour(Data, "spawn_time", "late"), [{"name":"Spearow", "spawn_time": "12:25"},])
                  });

                it("deberia retornar los objetos Balbasaur y 20:00", () => {
                  assert.deepEqual(window.filterHour(Data, "spawn_time","night"), [{"name":"Balbasaur", "spawn_time": "20:00"},])
                  });

                it("deberia retornar los objetos Articuno y N/A", () => {
                  assert.deepEqual(window.filterHour(Data, "spawn_time","N/A"), [{"name":"Articuno", "spawn_time": "N/A"},])
                  });

                })

                describe("window.filterCal", () => {
  
                  it("debería ser una función", () => {
                    assert.equal(typeof window.filterCal, "function");
                  });
                })

                describe("window.filterCal", () => {
                  const Data = [
                    { 
                      "name": "Ivysaur",
                      "spawn_time": "07:00",
                    },
                    { 
                      "name":"Charmander",
                      "spawn_time": "08:45",
                    },
                    { 
                      "name": "Venusaur",
                      "spawn_time": "11:30",
                    },
                    { 
                      "name": "Squirtle",
                      "spawn_time": "04:25",
                    },
                    ]
                  
                    it("deberia retornar 3%", () => {
                      assert.deepEqual(window.filterCal(Data), 3)
                      });

                    })