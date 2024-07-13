/**
 * ---------------------------------------
 * This demo was created using amCharts 5.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v5/
 * ---------------------------------------
 */
import * as am5 from "@amcharts/amcharts5/index";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5themes_Dark from "@amcharts/amcharts5/themes/Dark";
import * as am5map from "@amcharts/amcharts5/map";
import * as am5radar from "@amcharts/amcharts5/radar";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5hierarchy from "@amcharts/amcharts5/hierarchy";
import * as am5index from "@amcharts/amcharts5/index";
import * as am5plugins_json from "@amcharts/amcharts5/plugins/json";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import { Tabulator, DataTreeModule } from 'tabulator-tables';
import './index.scss';
import './tabulator.scss';
import './sci-header.scss';

const sampleJsonXYChart = () => {

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new(/*"chartdiv"*/document.getElementById('total-emissions-by-day'), {
  height: 500,
  width: 400
});

// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root),
  am5themes_Dark.new(root)
]);

// Specify date fields, so that they are formatted accordingly in tooltips
// https://www.amcharts.com/docs/v5/concepts/formatters/data-placeholders/#Formatting_placeholders
/*root.dateFormatter.setAll({
  dateFields: ["valueX"]
});*/

// Parse chart config
// https://www.amcharts.com/docs/v5/concepts/serializing/
var parser = am5plugins_json.JsonParser.new(root);
parser.parse({
  refs: {
    data: [
      { date: 1652425200000, value: 92 },
      { date: 1652511600000, value: 95 },
      { date: 1652598000000, value: 100 },
      { date: 1652684400000, value: 100 },
      { date: 1652770800000, value: 96 },
      { date: 1652857200000, value: 97 },
      { date: 1652943600000, value: 94 },
      { date: 1653030000000, value: 89 },
      { date: 1653116400000, value: 89 },
      { date: 1653202800000, value: 87 },
      { date: 1653289200000, value: 84 },
      { date: 1653375600000, value: 81 },
      { date: 1653462000000, value: 85 },
      { date: 1653548400000, value: 89 },
      { date: 1653634800000, value: 86 },
      { date: 1653721200000, value: 90 },
      { date: 1653807600000, value: 93 },
      { date: 1653894000000, value: 94 },
      { date: 1653980400000, value: 94 },
      { date: 1654066800000, value: 96 }
    ],
    xAxis: {
      type: "DateAxis",
      settings: {
        maxDeviation: 0.5,
        baseInterval: {
          timeUnit: "day",
          count: 1
        },
        renderer: {
          type: "AxisRendererX",
          settings: {
            pan: "zoom"
          }
        },
        tooltip: {
          type: "Tooltip",
        },
      }
    },
    yAxis: {
      type: "ValueAxis",
      settings: {
        maxDeviation: 1,
        renderer: {
          type: "AxisRendererY",
          settings: {
            pan: "zoom"
          },
        },
      }
    },
  },
  type: "XYChart",
  settings: {
    panX: false,
    panY: false,
    wheelX: "panX",
    wheelY: "zoomX",
    cursor: {
      type: "XYCursor",
      settings: {
        behavior: "zoomX"
      },
      properties: {
        lineY: {
          settings: {
            visible: false
          },
        },
      },
    },
    scrollbarX: {
      type: "Scrollbar",
      settings: {
        orientation: "horizontal"
      }
    },
  },
  properties: {
    xAxes: [
      "#xAxis",
    ],
    yAxes: [
      "#yAxis",
    ],
    series: [{
      type: "LineSeries",
      settings: {
        name: "Series",
        xAxis: "#xAxis",
        yAxis: "#yAxis",
        valueYField: "value",
        valueXField: "date",
        stroke: {
          type: "Color",
          value: /*0xD54E4B*/ 0x4BA198
        },
        fill: {
          type: "Color",
          value: 0xffffff
        },
        tooltip: {
          type: "Tooltip",
          settings: {
            labelText: "{valueX}: {valueY}"
          }
        },
      },
      properties: {
        data: "#data"
      }
    }]
  }
}, {
  parent: root.container
}).then(function(chart) {
  // This kicks in when config is parsed
  // chart.series.getIndex(0).appear(1000);
  chart.appear(1000, 100);
});

};

const sampleJsonPieChart = () => {

/**
 * ---------------------------------------
 * This demo was created using amCharts 5.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v5/
 * ---------------------------------------
 */

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdiv2");

// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root),
  am5themes_Dark.new(root)
]);

// Specify date fields, so that they are formatted accordingly in tooltips
// https://www.amcharts.com/docs/v5/concepts/formatters/data-placeholders/#Formatting_placeholders
root.dateFormatter.setAll({
  dateFields: ["valueX"]
});

// Parse chart config
// https://www.amcharts.com/docs/v5/concepts/serializing/
am5plugins_json.JsonParser.new(root).parse({
  refs: [{
    data: [{
      country: "France",
      sales: 100000
    }, {
      country: "Spain",
      sales: 160000
    }, {
      country: "United Kingdom",
      sales: 80000
    }],
  }, {
    series: {
      type: "PieSeries",
      settings: {
        name: "Series",
        valueField: "sales",
        categoryField: "country"
      },
      properties: {
        data: "#data"
      }
    },
  }],
  type: "PieChart",
  settings: {
    layout: "vertical",
  },
  properties: {
    series: [
      "#series"
    ]
  },
  children: [{
    type: "Legend",
    settings: {
      centerX: {
        type: "Percent",
        value: 50
      },
      x: {
        type: "Percent",
        value: 50
      },
      layout: "horizontal"
    },
    properties: {
      data: "#series.dataItems"
    }
  }]
}, {
  parent: root.container
}).then(function (chart) {
  // Make stuff animate on load
  // https://www.amcharts.com/docs/v5/concepts/animations/#Forcing_appearance_animation
  chart.series.getIndex(0).appear(1000);
  chart.appear(1000, 100);
});

};

const sampleJsonXYColumnChart = () => {

  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new("chartdiv3");
  
  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([
    am5themes_Animated.new(root),
    am5themes_Dark.new(root)
  ]);
  
  // Specify date fields, so that they are formatted accordingly in tooltips
  // https://www.amcharts.com/docs/v5/concepts/formatters/data-placeholders/#Formatting_placeholders
  /*root.dateFormatter.setAll({
    dateFields: ["valueX"]
  });*/
  
  // Parse chart config
  // https://www.amcharts.com/docs/v5/concepts/serializing/
  var parser = am5plugins_json.JsonParser.new(root);
  parser.parse({
    refs: {
      data: [
        { category: 'one', value: 92 },
        { category: 'two', value: 95 },
        { category: 'three', value: 100 },
        { category: 'four', value: 100 },
        { category: 'five', value: 96 }
      ],
      xAxis: {
        type: "CategoryAxis",
        settings: {
          categoryField: 'category',
          renderer: {
            type: "AxisRendererX",
            settings: {
              pan: "zoom"
            }
          },
          tooltip: {
            type: "Tooltip",
          },
        },
        properties: {
          data: [
            { category: 'one' },
            { category: 'two' },
            { category: 'three' },
            { category: 'four' },
            { category: 'five' }
          ]
        }
      },
      yAxis: {
        type: "ValueAxis",
        settings: {
          maxDeviation: 1,
          renderer: {
            type: "AxisRendererY",
            settings: {
              pan: "zoom"
            },
          },
        }
      },
    },
    type: "XYChart",
    settings: {
      panX: false,
      panY: false,
      wheelX: "panX",
      wheelY: "zoomX",
      cursor: {
        type: "XYCursor",
        settings: {
          behavior: "zoomX"
        },
        properties: {
          lineY: {
            settings: {
              visible: false
            },
          },
        },
      },
      scrollbarX: {
        type: "Scrollbar",
        settings: {
          orientation: "horizontal"
        }
      },
    },
    properties: {
      xAxes: [
        "#xAxis",
      ],
      yAxes: [
        "#yAxis",
      ],
      series: [{
        type: "ColumnSeries",
        settings: {
          name: "Series",
          xAxis: "#xAxis",
          yAxis: "#yAxis",
          valueYField: "value",
          categoryXField: "category",
          tooltip: {
            type: "Tooltip",
            settings: {
              labelText: "{valueX}: {valueY}"
            }
          },
        },
        properties: {
          data: "#data"
        }
      }]
    }
  }, {
    parent: root.container
  }).then(function(chart) {
    // This kicks in when config is parsed
    chart.series.getIndex(0).appear(1000);
    chart.appear(1000, 100);
  });
  
  };

const createJsonMap = () => {

  /**
   * ---------------------------------------
   * This demo was created using amCharts 5.
   *
   * For more information visit:
   * https://www.amcharts.com/
   *
   * Documentation is available at:
   * https://www.amcharts.com/docs/v5/
   * ---------------------------------------
   */

  // Create root and chart
  var root = am5.Root.new("map"); 

  // Set themes
  root.setThemes([
    am5themes_Animated.new(root),
    am5themes_Dark.new(root)
  ]);

  var chart = root.container.children.push(
    am5map.MapChart.new(root, {
      panX: "rotateX",
      projection: am5map.geoNaturalEarth1()
    })
  );

  // Create polygon series
  var polygonSeries = chart.series.push(
    am5map.MapPolygonSeries.new(root, {
      geoJSON: am5geodata_worldLow,
      exclude: ["AQ"]
    })
  );

  polygonSeries.mapPolygons.template.setAll({
    tooltipText: "{name}",
    interactive: true
  });

  //

  polygonSeries.mapPolygons.template.states.create("hover", {
    fill: am5.color(0x677935)
  });

  console.log(root);
  const serializer = am5plugins_json.Serializer.new(root);

  console.log('hiho');

  /*const json = serializer.serialize(root,0,true);
  console.log(json);*/

};

const createJsonMap2 = () => {

  var root = am5.Root.new("map");
  root.setThemes([
    am5themes_Animated.new(root),
    am5themes_Dark.new(root)
  ]);

  var parser = am5plugins_json.JsonParser.new(root);
  parser.parse({
    refs: {
      data: am5geodata_worldLow
    },
    type: "MapChart",
    settings: {
      panX: "rotateX",
      projection: am5map.geoNaturalEarth1()
    },
    properties: {
      series: [{
        type: "MapPolygonSeries",
        settings: {
          name: "MapPolygonSeries"
        },
        properties: {
          geoJSON: "#data"
        }
      }]
    }
  }, {
    parent: root.container
  }).then(function(chart) {
    // This kicks in when config is parsed
    chart.series.getIndex(0).appear(1000);
    chart.appear(1000, 100);
  });

};

const createRadialChart = () => {

  var root = am5.Root.new("radialchart", {
    // id: "whatever"
  });


  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([
    am5themes_Animated.new(root),
    am5themes_Dark.new(root)
  ]);
  
  
  // Create chart
  // https://www.amcharts.com/docs/v5/charts/radar-chart/
  var chart = root.container.children.push(am5radar.RadarChart.new(root, {
    panX: false,
    panY: false,
    wheelX: "panX",
    wheelY: "zoomX"
  }));
  
  // Add cursor
  // https://www.amcharts.com/docs/v5/charts/radar-chart/#Cursor
  var cursor = chart.set("cursor", am5radar.RadarCursor.new(root, {
    behavior: "zoomX"
  }));
  
  cursor.lineY.set("visible", false);
  
  
  // Create axes and their renderers
  // https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_axes
  var xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
    maxDeviation: 0.1,
    groupData: false,
    baseInterval: {
      timeUnit: "month",
      count: 1
    },
    renderer: am5radar.AxisRendererCircular.new(root, {
      minGridDistance: 50
    }),
    tooltip: am5.Tooltip.new(root, {})
  }));
  
  var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
    renderer: am5radar.AxisRendererRadial.new(root, {})
  }));
  
  
  // Create series
  // https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_series
  function createSeries(name, field) {
    var series = chart.series.push(am5radar.RadarLineSeries.new(root, {
      name: name,
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: field,
      valueXField: "date",
      tooltip: am5.Tooltip.new(root, {
        labelText: "{valueY}"
      })
    }));
  
    series.bullets.push(function () {
      return am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
          radius: 5,
          fill: series.get("fill")
        })
      });
    });
    
    return series;
  }
  
  var series1 = createSeries("Series #1", "value1");
  var series2 = createSeries("Series #2", "value2");
  
  
  // Add scrollbars
  chart.set("scrollbarX", am5.Scrollbar.new(root, { orientation: "horizontal" }));
  chart.set("scrollbarY", am5.Scrollbar.new(root, { orientation: "vertical" }));
  
  
  // Generate and set data
  // https://www.amcharts.com/docs/v5/charts/radar-chart/#Setting_data
  var data = [];
  var value1 = 500;
  var value2 = 600;
  
  for(var i = 0; i < 12; i++){
    var date = new Date();
    date.setMonth(i, 1);
    value1 -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 50);
    value2 -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 50);
    data.push({ date: date.getTime(), value1: value1, value2: value2 });
  }
  
  series1.data.setAll(data);
  series2.data.setAll(data);
  
  
  // Animate chart and series in
  // https://www.amcharts.com/docs/v5/concepts/animations/#Initial_animation
  series1.appear(1000);
  series2.appear(1000);
  chart.appear(1000, 100);

  // console.log(root);
  const serializer = am5plugins_json.Serializer.new(root);

  console.log('hiho');

  setTimeout(() => {
    const json = serializer.serialize(root,0,true);
    console.log(json);
  }, 1000);

};

const createRadialChartJson = () => {

  var data = [];
  var value1 = 500;
  var value2 = 600;
  
  for(var i = 0; i < 12; i++){
    var date = new Date();
    date.setMonth(i, 1);
    value1 -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 50);
    value2 -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 50);
    data.push({ date: date.getTime(), value1: value1, value2: value2 });
  }

  const json = {
    refs: {
      data,
      xAxis: {
        type: "DateAxis",
        settings: {
          maxDeviation: 0.1,
          groupData: false,
          baseInterval: {
            timeUnit: 'month',
            count: 1
          },
          renderer: {
            type: "AxisRendererCircular",
            settings: {
              minGridDistance: 50
            }
          }
        }
      },
      yAxis: {
        type: "ValueAxis",
        settings: {
          renderer: {
            type: "AxisRendererRadial"
          }
        }
      }
    },
    type: "RadarChart",
    settings: {
      panX: false,
      panY: false,
      wheelX: "panX",
      wheelY: "zoomX",
      cursor: {
        type: "RadarCursor",
        settings: {
          behavior: "zoomX"
        },
        properties: {
          lineY: {
            settings: {
              visible: false
            },
          },
        },
      },
      scrollbarX: {
        type: "Scrollbar",
        settings: {
          orientation: "horizontal"
        }
      },
      scrollbarY: {
        type: "Scrollbar",
        settings: {
          orientation: "vertical"
        }
      },
    },
    properties: {
      xAxes: [
        "#xAxis",
      ],
      yAxes: [
        "#yAxis",
      ],
      series: [
        {
          type: "RadarLineSeries",
          settings: {
            name: "Series#1",
            xAxis: "#xAxis",
            yAxis: "#yAxis",
            valueYField: "value1",
            valueXField: "date",
            tooltip: {
              type: "Tooltip",
              settings: {
                labelText: "{valueY}"
              }
            },
          },
          properties: {
            data: "#data"
          }
        },
        {
          type: "RadarLineSeries",
          settings: {
            name: "Series#2",
            xAxis: "#xAxis",
            yAxis: "#yAxis",
            valueYField: "value2",
            valueXField: "date",
            tooltip: {
              type: "Tooltip",
              settings: {
                labelText: "{valueY}"
              }
            },
          },
          properties: {
            data: "#data"
          }
        }
      ]
    }
  };

  var root = am5.Root.new("radialjsonchart");
  root.setThemes([
    am5themes_Animated.new(root),
    am5themes_Dark.new(root)
  ]);
  var parser = am5plugins_json.JsonParser.new(root);
  parser.parse(json, {
    parent: root.container
  }).then(function(chart) {
    // This kicks in when config is parsed
    chart.series.getIndex(0).appear(1000);
    chart.appear(1000, 100);
  });

};

const createRlFootprintChart = () => {

  const dataEntity1 = [
    { readinessType: 'trl', readinessLevel: 7 },
    { readinessType: 'mrl', readinessLevel: 2 },
    { readinessType: 'irl', readinessLevel: 5 }
  ];

  const dataEntity2 = [
    { readinessType: 'trl', readinessLevel: 4 },
    { readinessType: 'mrl', readinessLevel: 7 },
    { readinessType: 'irl', readinessLevel: 2 }
  ];

  const json = {
    refs: {
      dataEntity1,
      dataEntity2,
      xAxis: {
        type: "CategoryAxis",
        settings: {
          categoryField: 'category',
          renderer: {
            type: "AxisRendererCircular",
            settings: {
              minGridDistance: 50
            }
          },
          tooltip: {
            type: "Tooltip"
          },
        },
        properties: {
          data: [
            { category: 'mrl' },
            { category: 'irl' },
            { category: 'trl' }
          ]
        }
      },
      yAxis: {
        type: "ValueAxis",
        settings: {
          renderer: {
            type: "AxisRendererRadial"
          }
        }
      }
    },
    type: "RadarChart",
    settings: {
      panX: false,
      panY: false,
      wheelX: "panX",
      wheelY: "zoomX",
      cursor: {
        type: "RadarCursor",
        settings: {
          behavior: "zoomX"
        },
        properties: {
          lineY: {
            settings: {
              visible: false
            },
          },
        },
      },
      scrollbarX: {
        type: "Scrollbar",
        settings: {
          orientation: "horizontal"
        }
      },
      scrollbarY: {
        type: "Scrollbar",
        settings: {
          orientation: "vertical"
        }
      },
    },
    properties: {
      xAxes: [
        "#xAxis",
      ],
      yAxes: [
        "#yAxis",
      ],
      series: [
        {
          type: "RadarLineSeries",
          settings: {
            name: "Entity#1",
            xAxis: "#xAxis",
            yAxis: "#yAxis",
            valueYField: "readinessLevel",
            categoryXField: "readinessType",
            tooltip: {
              type: "Tooltip",
              settings: {
                labelText: "{valueY}"
              }
            },
          },
          properties: {
            data: "#dataEntity1"
          }
        },
        {
          type: "RadarLineSeries",
          settings: {
            name: "Entity#2",
            xAxis: "#xAxis",
            yAxis: "#yAxis",
            valueYField: "readinessLevel",
            categoryXField: "readinessType",
            tooltip: {
              type: "Tooltip",
              settings: {
                labelText: "{valueY}"
              }
            },
          },
          properties: {
            data: "#dataEntity2"
          }
        }
      ]
    }
  };

  var root = am5.Root.new("rlfootprintchart");
  root.setThemes([
    am5themes_Animated.new(root),
    am5themes_Dark.new(root)
  ]);
  var parser = am5plugins_json.JsonParser.new(root);
  parser.parse(json, {
    parent: root.container
  }).then(function(chart) {
    // This kicks in when config is parsed
    chart.series.getIndex(0).appear(1000);
    chart.appear(1000, 100);
  });

};

const radialEmissionsSummaryChart = () => {

  const dataEntity1 = [
    { readinessType: 'min', readinessLevel: 7 },
    { readinessType: 'max', readinessLevel: 2 },
    { readinessType: 'avg', readinessLevel: 5 }
  ];

  const dataEntity2 = [
    { readinessType: 'min', readinessLevel: 4 },
    { readinessType: 'max', readinessLevel: 7 },
    { readinessType: 'avg', readinessLevel: 2 }
  ];

  const json = {
    refs: {
      dataEntity1,
      dataEntity2,
      xAxis: {
        type: "CategoryAxis",
        settings: {
          categoryField: 'category',
          renderer: {
            type: "AxisRendererCircular",
            settings: {
              minGridDistance: 50
            }
          },
          tooltip: {
            type: "Tooltip"
          },
        },
        properties: {
          data: [
            { category: 'min' },
            { category: 'max' },
            { category: 'avg' }
          ]
        }
      },
      yAxis: {
        type: "ValueAxis",
        settings: {
          renderer: {
            type: "AxisRendererRadial"
          }
        }
      }
    },
    type: "RadarChart",
    settings: {
      panX: false,
      panY: false,
      wheelX: "panX",
      wheelY: "zoomX",
      cursor: {
        type: "RadarCursor",
        settings: {
          behavior: "zoomX"
        },
        properties: {
          lineY: {
            settings: {
              visible: false
            },
          },
        },
      },
      scrollbarX: {
        type: "Scrollbar",
        settings: {
          orientation: "horizontal"
        }//,
        /*properties: {
          thumb: {
            settings: {
              fill: {
                type: "Color",
                value: 0xffffff
              }
            }
          }
        }*/
      },
      scrollbarY: {
        type: "Scrollbar",
        settings: {
          orientation: "vertical"
        }
      },
    },
    properties: {
      xAxes: [
        "#xAxis",
      ],
      yAxes: [
        "#yAxis",
      ],
      series: [
        {
          type: "RadarLineSeries",
          settings: {
            name: "Entity#1",
            xAxis: "#xAxis",
            yAxis: "#yAxis",
            valueYField: "readinessLevel",
            categoryXField: "readinessType",
            stroke: {
              type: "Color",
              value: /*0xD54E4B*/ 0xffffff
            },
            fill: {
              type: "Color",
              value: /*0xD54E4B*/ 0xffffff
            },
            tooltip: {
              type: "Tooltip",
              settings: {
                labelText: "{valueY}"
              }
            },
          },
          properties: {
            data: "#dataEntity1"
          }
        },
        {
          type: "RadarLineSeries",
          settings: {
            name: "Entity#2",
            xAxis: "#xAxis",
            yAxis: "#yAxis",
            valueYField: "readinessLevel",
            categoryXField: "readinessType",
            stroke: {
              type: "Color",
              value: /*0xD54E4B*/ 0x4BA198
            },
            fill: {
              type: "Color",
              value: /*0xD54E4B*/ 0x4BA198
            },
            tooltip: {
              type: "Tooltip",
              settings: {
                labelText: "{valueY}"
              }
            },
          },
          properties: {
            data: "#dataEntity2"
          }
        }
      ]
    }
  };

  var root = am5.Root.new("radial-emissions-summary");
  root.setThemes([
    am5themes_Animated.new(root),
    am5themes_Dark.new(root)
  ]);
  var parser = am5plugins_json.JsonParser.new(root);
  parser.parse(json, {
    parent: root.container
  }).then(function(chart) {
    // chart.series.getIndex(0).set('stroke', am5.color(0xffffff));
    /*chart.series.getIndex(0).fills.template.setAll({
      fillOpacity: 0.2,
      visible: true
    });*/
    // This kicks in when config is parsed
    chart.series.getIndex(0).appear(1000);
    chart.appear(1000, 100);
  });

};

const createAMap = () => {

  var root = am5.Root.new("map"); 
  var chart = root.container.children.push(
    am5map.MapChart.new(root, {
      panX: "rotateX",
      panY: "none",
      projection: am5map.geoNaturalEarth1()
    })
  );
  
  // Set themes
  root.setThemes([
    am5themes_Animated.new(root),
    am5themes_Dark.new(root)
  ]);
  
  // Create polygon series
  var polygonSeries = chart.series.push(
    am5map.MapPolygonSeries.new(root, {
      geoJSON: am5geodata_worldLow
    })
  );
  
  var graticuleSeries = chart.series.insertIndex(
    0, am5map.GraticuleSeries.new(root, {})
  );
  
  graticuleSeries.mapLines.template.setAll({
    stroke: am5.color(0x000000),
    strokeOpacity: 0.1
  });
  
  var backgroundSeries = chart.series.unshift(
    am5map.MapPolygonSeries.new(root, {})
  );
  
  backgroundSeries.mapPolygons.template.setAll({
    fill: am5.color(0xedf7fa),
    stroke: am5.color(0xedf7fa),
  });
  
  backgroundSeries.data.push({
    geometry: am5map.getGeoRectangle(90, 180, -90, -180)
  });
  
  // Add projection buttons
  var buttons = chart.children.push(am5.Container.new(root, {
    x: am5.p50,
    centerX: am5.p50,
    y: am5.p100,
    dy: -10,
    centerY: am5.p100,
    layout: root.horizontalLayout,
    paddingTop: 5,
    paddingRight: 8,
    paddingBottom: 5,
    paddingLeft: 8,
    background: am5.RoundedRectangle.new(root, {
      fill: am5.color(0xffffff),
      fillOpacity: 0.3
    })
  }));
  
  function createButton(text, projection) {
    var button = buttons.children.push(am5.Button.new(root, {
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      marginLeft: 5,
      marginRight: 5,
      label: am5.Label.new(root, {
        text: text,
      })
    }));
    
    button.events.on("click", function() {
      chart.set("projection", projection);
    });
  }

  am5map.geoEquirectangular();

};

const createAHierachy = () => {

  var root = am5.Root.new("hierarchy");

  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([
    am5themes_Animated.new(root),
    am5themes_Dark.new(root)
  ]);
  
  var data = {
    name: "Root",
    value: 0,
    children: [
      {
        name: "1",
        linkWith: ["2"],
        children: [
          {
            name: "A",
            children: [
              { name: "A1", value: 1 },
              { name: "A2", value: 1 },
              { name: "A3", value: 1 },
              { name: "A4", value: 1 },
              { name: "A5", value: 1 }
            ]
          },
          {
            name: "B",
            children: [
              { name: "B1", value: 1 },
              { name: "B2", value: 1 },
              { name: "B3", value: 1 },
              { name: "B4", value: 1 },
              { name: "B5", value: 1 }
            ]
          },
          {
            name: "C",
            children: [
              { name: "C1", value: 1 },
              { name: "C2", value: 1 },
              { name: "C3", value: 1 },
              { name: "C4", value: 1 },
              { name: "C5", value: 1 }
            ]
          }
        ]
      },
  
      {
        name: "2",
        linkWith: ["3"],
        children: [
          {
            name: "D", value:1
          },
          {
            name: "E", value:1
          }
        ]
      },
      {
        name: "3",
        children: [
          {
            name: "F",
            children: [
              { name: "F1", value: 1 },
              { name: "F2", value: 1 },
              { name: "F3", value: 1 },
              { name: "F4", value: 1 },
              { name: "F5", value: 1 }
            ]
          },
          {
            name: "H",
            children: [
              { name: "H1", value: 1 },
              { name: "H2", value: 1 },
              { name: "H3", value: 1 },
              { name: "H4", value: 1 },
              { name: "H5", value: 1 }
            ]
          },
          {
            name: "G",
            children: [
              { name: "G1", value: 1 },
              { name: "G2", value: 1 },
              { name: "G3", value: 1 },
              { name: "G4", value: 1 },
              { name: "G5", value: 1 }
            ]
          }
        ]
      }
    ]
  };
  
  // Create wrapper container
  var container = root.container.children.push(
    am5.Container.new(root, {
      width: am5.percent(100),
      height: am5.percent(100),
      layout: root.verticalLayout
    })
  );
  
  // Create series
  // https://www.amcharts.com/docs/v5/charts/hierarchy/#Adding
  var series = container.children.push(
    am5hierarchy.ForceDirected.new(root, {
      singleBranchOnly: false,
      downDepth: 1,
      topDepth: 1,
      maxRadius: 25,
      minRadius: 12,
      valueField: "value",
      categoryField: "name",
      childDataField: "children",
      idField: "name",
      linkWithStrength: 0.3,
      linkWithField: "linkWith",
      manyBodyStrength: -15,
      centerStrength: 0.5
    })
  );
  
  series.get("colors").set("step", 2);
  
  series.data.setAll([data]);
  series.set("selectedDataItem", series.dataItems[0]);
  
  // Make stuff animate on load
  series.appear(1000, 100);

};

const radialHeatmap = () => {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("radial-heat-map");
    
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root),
      am5themes_Dark.new(root)
    ]);
    
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/radar-chart/
    var chart = root.container.children.push(  am5radar.RadarChart.new(root, {
        innerRadius: am5.percent(50),
        panX: false,
        panY: false,
        wheelX: "panX",
        wheelY: "zoomX",
        maxTooltipDistance: 0,
        layout: root.verticalLayout
      }));
    
    
    // Create axes and their renderers
    // https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_axes
    var yRenderer = am5radar.AxisRendererRadial.new(root, {
      visible: false,
      axisAngle: 90,
      minGridDistance: 10,
      inversed: true
    });
    
    yRenderer.labels.template.setAll({
      textType: "circular",
      textAlign: "center",
      radius: -8
    });
    
    yRenderer.grid.template.set("visible", false);
    
    var yAxis = chart.yAxes.push(  am5xy.CategoryAxis.new(root, {
        maxDeviation: 0,
        renderer: yRenderer,
        categoryField: "weekday"
      }));
    
    var xRenderer = am5radar.AxisRendererCircular.new(root, {
      visible: false,
      minGridDistance: 30
    });
    
    xRenderer.labels.template.setAll({
      textType: "circular",
      radius: 10
    });
    
    xRenderer.grid.template.set("visible", false);
    
    var xAxis = chart.xAxes.push(  am5xy.CategoryAxis.new(root, {
        renderer: xRenderer,
        categoryField: "hour"
      }));
    
    
    // Create series
    // https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_series
    var series = chart.series.push(  am5radar.RadarColumnSeries.new(root, {
        calculateAggregates: true,
        stroke: am5.color(0xffffff),
        clustered: false,
        xAxis: xAxis,
        yAxis: yAxis,
        categoryXField: "hour",
        categoryYField: "weekday",
        valueField: "value"
      }));
    
    series.columns.template.setAll({
      tooltipText: "{value}",
      strokeOpacity: 1,
      strokeWidth: 2,
      width: am5.percent(100),
      height: am5.percent(100)
    });
    
    series.columns.template.events.on("pointerover", function (event) {
      var di = event.target.dataItem ;
      if (di) {
       heatLegend.showValue(di.get("value", 0) );
      }
    });
    
    series.events.on("datavalidated", function () {
      heatLegend.set("startValue", series.getPrivate("valueHigh"));
      heatLegend.set("endValue", series.getPrivate("valueLow"));
    });
    
    
    // Set up heat rules
    // https://www.amcharts.com/docs/v5/concepts/settings/heat-rules/
    series.set("heatRules", [{
      target: series.columns.template,
      min: am5.color(0x4BA198),
      max: am5.color(0x000000),
      dataField: "value",
      key: "fill"
    }]);
    
    
    // Add heat legend
    // https://www.amcharts.com/docs/v5/concepts/legend/heat-legend/
    var heatLegend = chart.children.push(  am5.HeatLegend.new(root, {
        orientation: "horizontal",
        endColor: am5.color(0x4BA198),
        startColor: am5.color(0x000000)
      }));
    
    
    // Set data
    // https://www.amcharts.com/docs/v5/charts/radar-chart/#Setting_data
    var data = [{
      hour: "12pm",
      weekday: "Sunday",
      value: 2990
    }, {
      hour: "1am",
      weekday: "Sunday",
      value: 2520
    }, {
      hour: "2am",
      weekday: "Sunday",
      value: 2334
    }, {
      hour: "3am",
      weekday: "Sunday",
      value: 2230
    }, {
      hour: "4am",
      weekday: "Sunday",
      value: 2325
    }, {
      hour: "5am",
      weekday: "Sunday",
      value: 2019
    }, {
      hour: "6am",
      weekday: "Sunday",
      value: 2128
    }, {
      hour: "7am",
      weekday: "Sunday",
      value: 2246
    }, {
      hour: "8am",
      weekday: "Sunday",
      value: 2421
    }, {
      hour: "9am",
      weekday: "Sunday",
      value: 2788
    }, {
      hour: "10am",
      weekday: "Sunday",
      value: 2959
    }, {
      hour: "11am",
      weekday: "Sunday",
      value: 3018
    }, {
      hour: "12am",
      weekday: "Sunday",
      value: 3154
    }, {
      hour: "1pm",
      weekday: "Sunday",
      value: 3172
    }, {
      hour: "2pm",
      weekday: "Sunday",
      value: 3368
    }, {
      hour: "3pm",
      weekday: "Sunday",
      value: 3464
    }, {
      hour: "4pm",
      weekday: "Sunday",
      value: 3746
    }, {
      hour: "5pm",
      weekday: "Sunday",
      value: 3656
    }, {
      hour: "6pm",
      weekday: "Sunday",
      value: 3336
    }, {
      hour: "7pm",
      weekday: "Sunday",
      value: 3292
    }, {
      hour: "8pm",
      weekday: "Sunday",
      value: 3269
    }, {
      hour: "9pm",
      weekday: "Sunday",
      value: 3300
    }, {
      hour: "10pm",
      weekday: "Sunday",
      value: 3403
    }, {
      hour: "11pm",
      weekday: "Sunday",
      value: 3323
    }, {
      hour: "12pm",
      weekday: "Monday",
      value: 3346
    }, {
      hour: "1am",
      weekday: "Monday",
      value: 2725
    }, {
      hour: "2am",
      weekday: "Monday",
      value: 3052
    }, {
      hour: "3am",
      weekday: "Monday",
      value: 3876
    }, {
      hour: "4am",
      weekday: "Monday",
      value: 4453
    }, {
      hour: "5am",
      weekday: "Monday",
      value: 3972
    }, {
      hour: "6am",
      weekday: "Monday",
      value: 4644
    }, {
      hour: "7am",
      weekday: "Monday",
      value: 5715
    }, {
      hour: "8am",
      weekday: "Monday",
      value: 7080
    }, {
      hour: "9am",
      weekday: "Monday",
      value: 8022
    }, {
      hour: "10am",
      weekday: "Monday",
      value: 8446
    }, {
      hour: "11am",
      weekday: "Monday",
      value: 9313
    }, {
      hour: "12am",
      weekday: "Monday",
      value: 9011
    }, {
      hour: "1pm",
      weekday: "Monday",
      value: 8508
    }, {
      hour: "2pm",
      weekday: "Monday",
      value: 8515
    }, {
      hour: "3pm",
      weekday: "Monday",
      value: 8399
    }, {
      hour: "4pm",
      weekday: "Monday",
      value: 8649
    }, {
      hour: "5pm",
      weekday: "Monday",
      value: 7869
    }, {
      hour: "6pm",
      weekday: "Monday",
      value: 6933
    }, {
      hour: "7pm",
      weekday: "Monday",
      value: 5969
    }, {
      hour: "8pm",
      weekday: "Monday",
      value: 5552
    }, {
      hour: "9pm",
      weekday: "Monday",
      value: 5434
    }, {
      hour: "10pm",
      weekday: "Monday",
      value: 5070
    }, {
      hour: "11pm",
      weekday: "Monday",
      value: 4851
    }, {
      hour: "12pm",
      weekday: "Tuesday",
      value: 4468
    }, {
      hour: "1am",
      weekday: "Tuesday",
      value: 3306
    }, {
      hour: "2am",
      weekday: "Tuesday",
      value: 3906
    }, {
      hour: "3am",
      weekday: "Tuesday",
      value: 4413
    }, {
      hour: "4am",
      weekday: "Tuesday",
      value: 4726
    }, {
      hour: "5am",
      weekday: "Tuesday",
      value: 4584
    }, {
      hour: "6am",
      weekday: "Tuesday",
      value: 5717
    }, {
      hour: "7am",
      weekday: "Tuesday",
      value: 6504
    }, {
      hour: "8am",
      weekday: "Tuesday",
      value: 8104
    }, {
      hour: "9am",
      weekday: "Tuesday",
      value: 8813
    }, {
      hour: "10am",
      weekday: "Tuesday",
      value: 9278
    }, {
      hour: "11am",
      weekday: "Tuesday",
      value: 10425
    }, {
      hour: "12am",
      weekday: "Tuesday",
      value: 10137
    }, {
      hour: "1pm",
      weekday: "Tuesday",
      value: 9290
    }, {
      hour: "2pm",
      weekday: "Tuesday",
      value: 9255
    }, {
      hour: "3pm",
      weekday: "Tuesday",
      value: 9614
    }, {
      hour: "4pm",
      weekday: "Tuesday",
      value: 9713
    }, {
      hour: "5pm",
      weekday: "Tuesday",
      value: 9667
    }, {
      hour: "6pm",
      weekday: "Tuesday",
      value: 8774
    }, {
      hour: "7pm",
      weekday: "Tuesday",
      value: 8649
    }, {
      hour: "8pm",
      weekday: "Tuesday",
      value: 9937
    }, {
      hour: "9pm",
      weekday: "Tuesday",
      value: 10286
    }, {
      hour: "10pm",
      weekday: "Tuesday",
      value: 9175
    }, {
      hour: "11pm",
      weekday: "Tuesday",
      value: 8581
    }, {
      hour: "12pm",
      weekday: "Wednesday",
      value: 8145
    }, {
      hour: "1am",
      weekday: "Wednesday",
      value: 7177
    }, {
      hour: "2am",
      weekday: "Wednesday",
      value: 5657
    }, {
      hour: "3am",
      weekday: "Wednesday",
      value: 6802
    }, {
      hour: "4am",
      weekday: "Wednesday",
      value: 8159
    }, {
      hour: "5am",
      weekday: "Wednesday",
      value: 8449
    }, {
      hour: "6am",
      weekday: "Wednesday",
      value: 9453
    }, {
      hour: "7am",
      weekday: "Wednesday",
      value: 9947
    }, {
      hour: "8am",
      weekday: "Wednesday",
      value: 11471
    }, {
      hour: "9am",
      weekday: "Wednesday",
      value: 12492
    }, {
      hour: "10am",
      weekday: "Wednesday",
      value: 9388
    }, {
      hour: "11am",
      weekday: "Wednesday",
      value: 9928
    }, {
      hour: "12am",
      weekday: "Wednesday",
      value: 9644
    }, {
      hour: "1pm",
      weekday: "Wednesday",
      value: 9034
    }, {
      hour: "2pm",
      weekday: "Wednesday",
      value: 8964
    }, {
      hour: "3pm",
      weekday: "Wednesday",
      value: 9069
    }, {
      hour: "4pm",
      weekday: "Wednesday",
      value: 8898
    }, {
      hour: "5pm",
      weekday: "Wednesday",
      value: 8322
    }, {
      hour: "6pm",
      weekday: "Wednesday",
      value: 6909
    }, {
      hour: "7pm",
      weekday: "Wednesday",
      value: 5810
    }, {
      hour: "8pm",
      weekday: "Wednesday",
      value: 5151
    }, {
      hour: "9pm",
      weekday: "Wednesday",
      value: 4911
    }, {
      hour: "10pm",
      weekday: "Wednesday",
      value: 4487
    }, {
      hour: "11pm",
      weekday: "Wednesday",
      value: 4118
    }, {
      hour: "12pm",
      weekday: "Thursday",
      value: 3689
    }, {
      hour: "1am",
      weekday: "Thursday",
      value: 3081
    }, {
      hour: "2am",
      weekday: "Thursday",
      value: 6525
    }, {
      hour: "3am",
      weekday: "Thursday",
      value: 6228
    }, {
      hour: "4am",
      weekday: "Thursday",
      value: 6917
    }, {
      hour: "5am",
      weekday: "Thursday",
      value: 6568
    }, {
      hour: "6am",
      weekday: "Thursday",
      value: 6405
    }, {
      hour: "7am",
      weekday: "Thursday",
      value: 8106
    }, {
      hour: "8am",
      weekday: "Thursday",
      value: 8542
    }, {
      hour: "9am",
      weekday: "Thursday",
      value: 8501
    }, {
      hour: "10am",
      weekday: "Thursday",
      value: 8802
    }, {
      hour: "11am",
      weekday: "Thursday",
      value: 9420
    }, {
      hour: "12am",
      weekday: "Thursday",
      value: 8966
    }, {
      hour: "1pm",
      weekday: "Thursday",
      value: 8135
    }, {
      hour: "2pm",
      weekday: "Thursday",
      value: 8224
    }, {
      hour: "3pm",
      weekday: "Thursday",
      value: 8387
    }, {
      hour: "4pm",
      weekday: "Thursday",
      value: 8218
    }, {
      hour: "5pm",
      weekday: "Thursday",
      value: 7641
    }, {
      hour: "6pm",
      weekday: "Thursday",
      value: 6469
    }, {
      hour: "7pm",
      weekday: "Thursday",
      value: 5441
    }, {
      hour: "8pm",
      weekday: "Thursday",
      value: 4952
    }, {
      hour: "9pm",
      weekday: "Thursday",
      value: 4643
    }, {
      hour: "10pm",
      weekday: "Thursday",
      value: 4393
    }, {
      hour: "11pm",
      weekday: "Thursday",
      value: 4017
    }, {
      hour: "12pm",
      weekday: "Friday",
      value: 4022
    }, {
      hour: "1am",
      weekday: "Friday",
      value: 3063
    }, {
      hour: "2am",
      weekday: "Friday",
      value: 3638
    }, {
      hour: "3am",
      weekday: "Friday",
      value: 3968
    }, {
      hour: "4am",
      weekday: "Friday",
      value: 4070
    }, {
      hour: "5am",
      weekday: "Friday",
      value: 4019
    }, {
      hour: "6am",
      weekday: "Friday",
      value: 4548
    }, {
      hour: "7am",
      weekday: "Friday",
      value: 5465
    }, {
      hour: "8am",
      weekday: "Friday",
      value: 6909
    }, {
      hour: "9am",
      weekday: "Friday",
      value: 7706
    }, {
      hour: "10am",
      weekday: "Friday",
      value: 7867
    }, {
      hour: "11am",
      weekday: "Friday",
      value: 8615
    }, {
      hour: "12am",
      weekday: "Friday",
      value: 8218
    }, {
      hour: "1pm",
      weekday: "Friday",
      value: 7604
    }, {
      hour: "2pm",
      weekday: "Friday",
      value: 7429
    }, {
      hour: "3pm",
      weekday: "Friday",
      value: 7488
    }, {
      hour: "4pm",
      weekday: "Friday",
      value: 7493
    }, {
      hour: "5pm",
      weekday: "Friday",
      value: 6998
    }, {
      hour: "6pm",
      weekday: "Friday",
      value: 5941
    }, {
      hour: "7pm",
      weekday: "Friday",
      value: 5068
    }, {
      hour: "8pm",
      weekday: "Friday",
      value: 4636
    }, {
      hour: "9pm",
      weekday: "Friday",
      value: 4241
    }, {
      hour: "10pm",
      weekday: "Friday",
      value: 3858
    }, {
      hour: "11pm",
      weekday: "Friday",
      value: 3833
    }, {
      hour: "12pm",
      weekday: "Saturday",
      value: 3503
    }, {
      hour: "1am",
      weekday: "Saturday",
      value: 2842
    }, {
      hour: "2am",
      weekday: "Saturday",
      value: 2808
    }, {
      hour: "3am",
      weekday: "Saturday",
      value: 2399
    }, {
      hour: "4am",
      weekday: "Saturday",
      value: 2280
    }, {
      hour: "5am",
      weekday: "Saturday",
      value: 2139
    }, {
      hour: "6am",
      weekday: "Saturday",
      value: 2527
    }, {
      hour: "7am",
      weekday: "Saturday",
      value: 2940
    }, {
      hour: "8am",
      weekday: "Saturday",
      value: 3066
    }, {
      hour: "9am",
      weekday: "Saturday",
      value: 3494
    }, {
      hour: "10am",
      weekday: "Saturday",
      value: 3287
    }, {
      hour: "11am",
      weekday: "Saturday",
      value: 3416
    }, {
      hour: "12am",
      weekday: "Saturday",
      value: 3432
    }, {
      hour: "1pm",
      weekday: "Saturday",
      value: 3523
    }, {
      hour: "2pm",
      weekday: "Saturday",
      value: 3542
    }, {
      hour: "3pm",
      weekday: "Saturday",
      value: 3347
    }, {
      hour: "4pm",
      weekday: "Saturday",
      value: 3292
    }, {
      hour: "5pm",
      weekday: "Saturday",
      value: 3416
    }, {
      hour: "6pm",
      weekday: "Saturday",
      value: 3131
    }, {
      hour: "7pm",
      weekday: "Saturday",
      value: 3057
    }, {
      hour: "8pm",
      weekday: "Saturday",
      value: 3227
    }, {
      hour: "9pm",
      weekday: "Saturday",
      value: 3060
    }, {
      hour: "10pm",
      weekday: "Saturday",
      value: 2855
    }, {
      hour: "11pm",
      weekday: "Saturday",
      value: 2625
    }
    ];
    
    series.data.setAll(data);
    
    yAxis.data.setAll([
      { weekday: "Sunday" },
      { weekday: "Monday" },
      { weekday: "Tuesday" },
      { weekday: "Wednesday" },
      { weekday: "Thursday" },
      { weekday: "Friday" },
      { weekday: "Saturday" }
    ]);
    
    xAxis.data.setAll([
      { hour: "12pm" },
      { hour: "1am" },
      { hour: "2am" },
      { hour: "3am" },
      { hour: "4am" },
      { hour: "5am" },
      { hour: "6am" },
      { hour: "7am" },
      { hour: "8am" },
      { hour: "9am" },
      { hour: "10am" },
      { hour: "11am" },
      { hour: "12am" },
      { hour: "1pm" },
      { hour: "2pm" },
      { hour: "3pm" },
      { hour: "4pm" },
      { hour: "5pm" },
      { hour: "6pm" },
      { hour: "7pm" },
      { hour: "8pm" },
      { hour: "9pm" },
      { hour: "10pm" },
      { hour: "11pm" }
    ]);
    
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/#Initial_animation
    chart.appear(1000, 100);

};

const datagrid = () => {

  Tabulator.registerModule([DataTreeModule]);

  var tableDataNested = [
    {id: 1, name:"Oli Bob", location:"United Kingdom", gender:"male", col:"red", dob:"14/04/1984", _children:[
        {id: 2, name:"Mary May", location:"Germany", gender:"female", col:"blue", dob:"14/05/1982"},
        {id: 3, name:"Christine Lobowski", location:"France", gender:"female", col:"green", dob:"22/05/1982"},
        {id: 4, name:"Brendon Philips", location:"USA", gender:"male", col:"orange", dob:"01/08/1980", _children:[
            {id: 5, name:"Margret Marmajuke", location:"Canada", gender:"female", col:"yellow", dob:"31/01/1999"},
            {id: 6, name:"Frank Harbours", location:"Russia", gender:"male", col:"red", dob:"12/05/1966"},
        ]},
    ]},
    {id: 7, name:"Jamie Newhart", location:"India", gender:"male", col:"green", dob:"14/05/1985"},
    {id: 8, name:"Gemma Jane", location:"China", gender:"female", col:"red", dob:"22/05/1982", _children:[
        {id: 9, name:"Emily Sykes", location:"South Korea", gender:"female", col:"maroon", dob:"11/11/1970"},
    ]},
    {id: 10, name:"James Newman", location:"Japan", gender:"male", col:"red", dob:"22/03/1998"},
];


const datagridParent = document.getElementById('datagrid').parentNode;
const height = datagridParent.offsetHeight;
console.log('height', height);

//define table
var table = new Tabulator("#datagrid", {
  height: height + 'px',
  data: tableDataNested,
  dataTree: true,
  dataTreeStartExpanded: true,
  // layout:"fitDataStretch",
  // dataTreeChildField:"_children",
  columns:[
  {title:"Name", field:"name", width:100, responsive:0}, //never hide this column
  {title:"Location", field:"location", width:100},
  {title:"Gender", field:"gender", width:100, responsive:2}, //hide this column first
  {title:"Favourite Color", field:"col", width:100},
  {title:"Date Of Birth", field:"dob", hozAlign:"center", sorter:"date", width:100},
  ]
});


};

window.addEventListener('DOMContentLoaded', sampleJsonXYChart);
//window.addEventListener('DOMContentLoaded', sampleJsonPieChart);
//window.addEventListener('DOMContentLoaded', sampleJsonXYColumnChart);
// window.addEventListener('DOMContentLoaded', createJsonMap);
// window.addEventListener('DOMContentLoaded', createJsonMap2);
// window.addEventListener('DOMContentLoaded', createRadialChart);
// window.addEventListener('DOMContentLoaded', createRadialChartJson);
// window.addEventListener('DOMContentLoaded', createRlFootprintChart);
window.addEventListener('DOMContentLoaded', createAMap);
// window.addEventListener('DOMContentLoaded', createAHierachy);
window.addEventListener('DOMContentLoaded', radialHeatmap);
window.addEventListener('DOMContentLoaded', radialEmissionsSummaryChart);
window.addEventListener('DOMContentLoaded', datagrid);