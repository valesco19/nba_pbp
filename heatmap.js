
function positionFilterBox(orientation) {
    
    if (orientation != last_orientation) {
        if (orientation == 'landscape') {
            d3.select('#filter_div').transition().duration(100)
                    .style('opacity', 0)
                    .style('width', 0)
                    .style('height', 0)
                    .transition().duration(700)
                    .style('width', text_box.landscape_width)
                    .style('height', text_box.landscape_height)
                    .attr('right', 0)
                    .attr('bottom', 0)
                    .style('opacity', 1);

        } else {
            d3.select('#filter_div').transition().duration(100)
                    .style('opacity', 0)
                    .style('width', '100%')
                    .style('height', '0%')
                    .transition().duration(700)
                    .style('height', '5%')
                    .attr('bottom', 0)
                    .attr('right', 0)
                     .style('opacity', 1);
        }
        last_orientation = orientation
    };
};

function filterBoxClicked() {
    
       if (orientation == 'landscape') {
            d3.select('#filter_div')
                    .transition().duration(500)
                    .style('width', width)
                    .style('height', height * .5)
                    .attr('right', 0)
                    .attr('bottom', 0);

        } else {
            d3.select('#filter_div')
                    .transition().duration(500)
                    .style('height', '50%');
        }

}

function filterBoxNotClicked() {

        if (orientation == 'landscape') {
            d3.select('#filter_div')
                    .transition().duration(500)
                    .style('width', width)
                    .style('height', height * .5)
                    .attr('right', 0)
                    .attr('bottom', 0);

        } else {
            d3.select('#filter_div')
                    .transition().duration(500)
                    .style('height', '5%');
        }
};


/* Draw Elements */
var width = d3.select('#vis').node().getBoundingClientRect().width;
var height = d3.select('#vis').node().getBoundingClientRect().height;
var orientation = (width / height) > (4 / 3)   ? 'landscape' : 'portrait';
var last_orientation = orientation;

//Set margins depending on orientation
var margin = orientation == 'landscape' ?  { top: 30, left: 40, bottom: 200, right: 40 } : {top: 30, left : 40, bottom: 50, right: 240};

var text_box = {landscape_width: '200px', landscape_height: '80%', portrait_width: '95%', portrait_height: '40px'};
    

/// position filter_div
positionFilterBox()

//Add filter div click listeners to close filter div if anywhere on screen is clicked
var except = document.getElementById('filter_div');

document.addEventListener('click', function() {
    filterBoxNotClicked();
    }, false);

except.addEventListener('click', function(ev) {
    filterBoxClicked();
    ev.stopPropagation();
}, false);

//var connection = new WebSocket('ws://localhost:9191/websocket');

var dummy_player_data = [
    {player_name: 'Trae Young', 
     data: [1,1,1,1,0.9,0.8,0.5,0.4,0.2,0.1,0.1,0.1,
            0.5,0.5,0.6,0.8,0.9,0.8,0.9,0.95,0.85,0.7,0.6,0.5,
            1,0.95,0.95,0.85,0.7,0.3,0.2,0.1,0.0,0.0,0.0,0.0,
            0.8,0.85,0.85,0.9,0.9,0.9,0.9,0.9,0.9,0.95,0.85,0.7
           ]},
    {player_name: 'Dewayne Dedmon', 
     data: [.8,.8,.7,.7,0.9,0.8,0.5,0.4,0.2,0.1,0.1,0.1,
            0.9,0.9,0.9,0.7,0.7,0.6,0.4,0.3,0.2,0.2,0.4,0.1,
            0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.8,0.6,0.4,0.1,
            0.1,0.2,0.3,0.4,0.5,0.9,0.9,0.9,0.8,0.6,0.4,0.1
           ]},
    {player_name: 'John Collins', 
     data: [0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.8,0.6,0.4,0.1,
            0.0,0.1,0.2,0.2,0.7,0.9,0.9,0.9,0.8,0.6,0.4,0.1,
            0.0,0.0,0.6,0.6,0.7,0.7,0.9,0.9,0.8,0.6,0.4,0.1,
            0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.85,0.75
           ]},
    {player_name: "De'Andre Hunter", 
     data: [0.9,0.9,0.9,0.9,0.9,0.6,0.5,0.4,0.4,0.4,0.4,0.4,
            0.3,0.3,0.3,0.4,0.5,0.5,0.7,0.9,0.8,0.6,0.4,0.3,
            0.9,0.9,0.9,0.9,0.9,0.6,0.5,0.4,0.4,0.4,0.4,0.4,
            0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.8,0.6,0.4,0.1
           ]},
    {player_name: 'Kevin Huerter', 
     data: [1,1,.9,.8,0.7,0.7,0.5,0.4,0.2,0.1,0.1,0.1,
             0.0,0.1,0.2,0.2,0.7,0.9,0.9,0.9,0.8,0.6,0.4,0.1,
            0.1,0.2,0.3,0.4,0.5,0.9,0.9,0.9,0.8,0.6,0.4,0.1,
            0.1,0.2,0.3,0.4,0.5,0.9,0.9,0.9,0.8,0.6,0.4,0.1
           ]},
    {player_name: 'Cam Reddish', 
     data: [0.0,0.1,0.2,0.2,0.7,0.9,0.9,0.9,0.8,0.6,0.7,0.6,
            0.3,0.3,0.3,0.4,0.5,0.5,0.7,0.9,0.8,0.6,0.4,0.3,
            0.0,0.1,0.2,0.2,0.7,0.9,0.9,0.9,0.8,0.6,0.4,0.1,
            0.3,0.3,0.3,0.4,0.5,0.5,0.7,0.9,0.8,0.6,0.4,0.3
           ]},
    {player_name: 'Bruno Fernando', 
     data: [0.0,0.1,0.2,0.2,0.7,0.9,0.9,0.9,0.8,0.6,0.7,0.6,
            0.3,0.3,0.3,0.4,0.5,0.5,0.7,0.9,0.8,0.6,0.4,0.3,
            0.0,0.0,0.0,0.0,0.1,0.4,0.5,0.6,0.8,0.8,0.8,0.9,
            .7,0.85,0.75,0.75,0.7,0.3,0.2,0.1,0.0,0.0,0.0,0.0
           ]},
    {player_name: 'Jeff Teague', 
     data: [0.0,0.1,0.2,0.2,0.2,0.5,0.5,0.6,0.4,0.4,0.7,0.7,
            0.7,0.7,0.6,0.6,0.55,0.4,0.4,0.4,0.3,0.4,0.2,0.1,
            0.0,0.0,0.0,0.0,0.1,0.1,0.3,0.5,0.9,0.9,0.9,0.9,
            .8,0.85,0.85,0.65,0.7,0.3,0.2,0.1,0.0,0.0,0.0,0.0
           ]},
    {player_name: 'Treveon Graham', 
     data: [0.0,0.1,0.2,0.2,0.2,0.5,0.5,0.7,0.7,0.8,0.8,0.7,
            0.9,0.9,0.9,0.7,0.7,0.6,0.4,0.3,0.2,0.2,0.4,0.1,
            0.0,0.0,0.0,0.0,0.1,0.4,0.5,0.6,0.8,0.8,0.8,0.9,
            0.9,0.9,0.9,0.9,0.9,0.6,0.5,0.4,0.4,0.3,0.2,0.0
           ]},
    {player_name: 'Vince Carter', 
     data: [0.0,0.1,0.2,0.2,0.2,0.5,0.5,0.7,0.7,0.8,0.8,0.7,
            0.9,0.7,0.6,0.5,0.5,0.6,0.4,0.3,0.2,0.2,0.4,0.1,
            0.0,0.0,0.0,0.0,0.1,0.4,0.5,0.6,0.8,0.8,0.8,0.9,
            0.0,0.1,0.2,0.2,0.2,0.2,0.1,0.0,0.0,0.3,0.2,0.1,
           ]},
    
];

var dummy_team_data = [
    {'team_loc': 'Atlanta', 
     'team_name': 'Hawks',
     'img_url': 'atlanta_hawks_logo.png'}
];

var dummy_line_chart_data = {
    title: 'Plus/Minus',
    max: 10,
    min: -15,
    data: [
      0, 1, 2, 5, 5, 3, 7, 4, 2, 1, 0, -1, -2,
      0, 2, 5, 5, 3, 7, 4, 2, 1, 0, -1, -2,  
      0, 2, 5, 5, 3, 7, 4, 2, 1, 0, -1, -2,
      0, 2, 5, 5, 3, 7, 4, 2, 1, 0, -1, -7
    ]
    
};

var title_margin = {left: width * .05, top: height * .08};
var title_svg_height = .2;
var vis_svg_height = 1 - title_svg_height;


// Create SVG
var title_svg = d3.select('#vis').append('svg')
                        .attr('width', width)
                        .attr('height', height * title_svg_height)
                        .attr('id', 'title_svg');

// Create Title 
var title_g = title_svg.append('g')
                .attr('transform', 'translate(' + title_margin.left + ',' + title_margin.top + ')')
                .attr('id', 'title_g');

//Set max width of logo to calc right margin
var logo_img_max_width = 160

var logo_img = title_g.append('svg:image')
                    .attr('x', width - (logo_img_max_width + title_margin.left))
                    .attr('max-width', logo_img_max_width) 
                    .attr('height', 80)
                    .attr('xlink:href', 'https://img.favpng.com/11/25/13/logo-atlanta-hawks-png-favpng-fQbGFDxg8Z0wzMvyKaLU7XuGJ.jpg');

var logo_img_y = logo_img.node().getBBox().y;
var logo_img_height = logo_img.node().getBBox().height;


var team_name_text = title_g.append('text')
                    .text(dummy_team_data[0]['team_name'])
                    .attr('fill', '#272727')
                    .attr('id', 'team_name_text')
                    .attr('font-size', '36px')
                    .attr('text-anchor', 'top')
                    .attr('y', logo_img_y + logo_img_height)
                    .attr('x', 0);

var team_loc_text_y = team_name_text.node().getBBox().y;
var team_loc_text_margin = 0;

var team_name_loc = title_g.append('text')
                    .text(dummy_team_data[0]['team_loc'])
                    .attr('fill', '#272727')
                    .attr('id', 'team_loc_text')
                    .attr('font-size', '18px')
                    .attr('text-anchor', 'bottom')
                    .attr('y', team_loc_text_y - team_loc_text_margin);                    

//Create Heatmap
var vis_svg = d3.select('#vis').append('svg')
                        .attr('width', width)
                        .attr('height', vis_svg_height * height)
                        .attr('id', 'vis_svg')

var heatmap_margin = {left: 0.05, top: 0.05};
var heatmap_width = width * (1 - (heatmap_margin.left * 2));
var heatmap_block_size = heatmap_width / 48;
var heatmap_height_multiple = 2.5

var heatmap_g = vis_svg.append('g')
                    .attr('id', 'heatmap_g')
                    .attr('transform', 'translate(' + width * heatmap_margin.left + ',' + height * heatmap_margin.top + ')');

var heatmap_color_scale = d3.scaleLinear()
                            .domain([0, 1])
                            .interpolate(d3.interpolateHcl)
                            .range([d3.rgb('#ffd3bd'), d3.rgb('#e63e3e')]);


for (z = 0; z < dummy_player_data.length; z++) {
    
    heatmap_g.selectAll('#heatmap_row_' + z)
        .data(dummy_player_data[z].data)
            .enter()
            .append('rect')
                .attr('width', heatmap_block_size)
                .attr('height', heatmap_block_size * heatmap_height_multiple)
                .attr('x', function(d,i) {
                    return i * heatmap_block_size})
                .attr('fill', function(d,i) {
                    return heatmap_color_scale(d);
                    })
                .attr('stroke', '#f2f2f2')
                .attr('stroke-width', .3)
                .attr('class', 'heatmap_row')
                .attr('id', function(d, i) {return 'heatmap_row_' + z})
                .attr('transform', function(d, i) {
                    var transform_down = (heatmap_block_size * heatmap_height_multiple) * z + 2;

                    return 'translate(0,' + transform_down + ')'
                });

    heatmap_g.append('text')
        .text(function() {
                            var name_array = dummy_player_data[z].player_name.split(' ');
                            var first_initial = name_array[0][0] + '.';
                            var last_name = name_array[name_array.length - 1];
                                                    
                            return first_initial + ' '  + last_name;
                        
                })
        .attr('dominant-baseline', 'hanging')
        .attr('font-size', '12px')
        .attr('font-weight', 600)
        .attr('transform', function(d, i) {
                var transform_down = (heatmap_block_size * heatmap_height_multiple) * z + heatmap_block_size;

                return 'translate(0,' + transform_down + ')'
                })
        .attr('id', function() {return 'heatmap_text_' + z})
        .attr('fill', '#272727');
        
    
};

var heatmap_min_ticks = heatmap_g.selectAll('.heatmap_min_ticks')
                            .data(dummy_player_data[0].data)
                            .enter()
                            .append('text')
                                .text(function (d,i) {
                                    return i + 1;
                                })
                                .attr('x', function(d, i) {
                                    return i * heatmap_block_size + (heatmap_block_size / 2);
                                })
                                .attr('y', 0)
                                .attr('text-anchor', 'middle')
                                .attr('dominant-baseline', 'ideographic')
                                .attr('font-size', '6px')
                                .attr('fill', '#878787');

var heatmap_qtr_lines = heatmap_g.selectAll('.heatmap_qtr_lines')
                            .data([1,2,3,4])
                            .enter()
                            .append('line')
                                .attr('x1', function(d,i) {
                                    return d * (12 * heatmap_block_size);
                                })
                                .attr('x2', function(d,i) {
                                    return d * (12 * heatmap_block_size);
                                })
                                .attr('y1', 2)
                                .attr('y2', function() {
                                    return dummy_player_data.length * heatmap_block_size * heatmap_height_multiple;
                                })
                                .attr('stroke', '#878787')
                                .attr('stroke-width', '.5px');

var heatmap_qtr_titles = heatmap_g.selectAll('.heatmap_qtr_titles')
                                .data(['1Q', '2Q', '3Q', '4Q'])
                                .enter()
                                .append('text')
                                    .text(function(d) {return d;})
                                    .attr('x', function(d,i) {
                                        return (i + 1) * (12 * heatmap_block_size);
                                    })
                                    .attr('y', - 10)
                                    .attr('text-anchor', 'middle')
                                    .attr('font-size', '10px')
                                    .attr('fill', '#878787');

var heatmap_g_bottom = heatmap_g.node().getBBox().height;
var heatmap_g_y = heatmap_g.node().getBBox().y;
var heatmap_to_bottom = heatmap_g.node().getBoundingClientRect().bottom;
var line_chart_height = height * .2;
var line_chart_width = width * (1 - heatmap_margin.left * 2);

var line_chart_g = vis_svg.append('g')
                        .attr('id', 'line_chart_g')
                        .attr('transform', function() {
                            return 'translate(' + (heatmap_margin.left * width) + ',' + (heatmap_g_bottom + Math.abs(heatmap_g_y)) + ')';
                        })

var line_chart_border = line_chart_g.append('rect')
                                    .attr('y', 0)
                                    .attr('x', 0)
                                    .attr('width', line_chart_width)
                                    .attr('height', line_chart_height)
                                    .attr('fill', '#fff')

var line_chart_zero_line = line_chart_g.append('line')
                                    .attr('id', 'line_chart_zero_line')
                                    .attr('x1', 0)
                                    .attr('x2', line_chart_width)
                                    .attr('y1', line_chart_height / 2)
                                    .attr('y2', line_chart_height / 2)
                                    .attr('stroke', '#f2f2f2');

var line_chart_zero_text = line_chart_g.selectAll('.line_chart_zero_text')
                                    .data(['0'])
                                    .enter()
                                    .append('text')
                                        .text(function(d) {return d;})
                                        .attr('x', function(d, i) {
                                            
                                            var text_margin = 10;
                                            
                                            if (i == 0) {return text_margin * -1}
                                            else {return line_chart_width + text_margin};
                                            })
                                        .attr('y', line_chart_height / 2)
                                        .attr('font-size', '10px')
                                        .attr('fill', '#878787')
                                        .attr('text-anchor', 'middle');


var max_line_chart_y = Math.max(dummy_line_chart_data.max, dummy_line_chart_data.min);

var line_chart_max_text = line_chart_g.selectAll('.line_chart_max_text')
                                        .data([-1 * max_line_chart_y, max_line_chart_y])
                                        .enter()
                                            .append('text')
                                            .text(function(d) {return d;})
                                            .attr('x', -10)
                                            .attr('y', function(d, i) {
                                                if (i == 0) {return 0}
                                                else {return line_chart_height};
                                            })
                                            .attr('font-size', '10px')
                                            .attr('fill', '#878787')
                                            .attr('text-anchor', 'middle')  
                                            .attr('dominant-baseline', function(d,i) {
                                                if (i == 0) {return 'hanging'}
                                                else {return 'ideographic'};
                                            })


var x_scale = d3.scaleLinear().range([0, line_chart_width])
                            .domain([0, dummy_line_chart_data.data.length - 1]);

var y_scale = d3.scaleLinear().range([line_chart_height, 0])
                            .domain([-1 * max_line_chart_y, max_line_chart_y]);

var line_chart_function = d3.line()
                             .x(function(d, i) {return x_scale(i);})
                             .y(function(d) {return y_scale(d);});

var line_chart_path = line_chart_g.append('path')
                            .data([dummy_line_chart_data.data])
                            .attr('fill', 'none')
                            .attr('stroke', '#e63e3e')
                            .attr('stroke-width', 2)
                            .attr('d', line_chart_function);

var line_chart_title = line_chart_g.append('text')
                                .text(function() {
                                    return dummy_line_chart_data.title
                                })
                                .attr('x', line_chart_width / 2)
                                .attr('y', line_chart_height)
                                .attr('dominant-baseline', 'ideographic')
                                .attr('text-anchor', 'middle')
                                .attr('font_size', '16px')
                                .attr('fill', '#878787')
                                .attr('id', 'line_chart_title');
                                


// APP
var APP = (function () {

  // Debounce is a private function
	function debounce(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			clearTimeout(timeout);
			timeout = setTimeout(function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			}, wait);
			if (immediate && !timeout) func.apply(context, args);
		};
	}

  // onResize function is made public
	var me = {onResize : function(callback) {
		callback(); // optionally execute callback func imediatly
    
    window.addEventListener('resize', debounce(function() {
      callback();
    }, 50), false);
	}};

  // returns the me object that has all the public functions in it
	return me;
})();

// Call onResize like this
APP.onResize(function() {
  // this stuff will be debounced
    var width = d3.select('#vis').node().getBoundingClientRect().width;
	var height = d3.select('#vis').node().getBoundingClientRect().height;
 
    orientation = (width / height > 4 / 3) ? 'landscape' : 'portrait';
    margin = orientation == 'landscape' ?  { top: 30, left: 40, bottom: 40, right: 220 } : {top: 30, left : 40, bottom: 200, right: 40};
    
    
    //positionFilterBox(orientation);

  
    //display([0,2,3,4,5], width, height, orientation);
});

