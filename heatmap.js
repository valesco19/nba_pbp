let dummy_player_data = [
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

let dummy_team_data = [
    {'team_loc': 'Atlanta', 
     'team_name': 'Hawks',
     'img_url': 'https://img.favpng.com/11/25/13/logo-atlanta-hawks-png-favpng-fQbGFDxg8Z0wzMvyKaLU7XuGJ.jpg'}
];

let dummy_line_chart_data = {
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

let line_chart_dropdown_values = ['Plus/Minus', 'Points For', 'Points Against', '2pt Att For', '2pt Made For',               '3pt Att For', '3pt Made For',
            'Layups Att For', 'Layups Made For', 'Jumpshots Att For', 'Jumpshots Made For', 'Assists For', 'Turnovers For'];

let team_filter_dropdown_values = ['Select Team','Atlanta Hawks', 'Boston Celtics', 'Brooklyn Nets', 'Charlotte Hornets',
                'Chicago Bulls', 'Cleveland Cavaliers', 'Dallas Mavericks', 'Denver Nuggets', 'Detroit Pistons',
                'Golden State Warriors', 'Houston Rockets', 'Indiana Pacers', 'Los Angeles Clippers', 
                'Los Angeles Lakers', 'Memphis Grizzlies'];


/// position filter_div and add event listeners
positionFilterBox();
let filter_box_open = false;


//Add filter div click listeners to close filter div if anywhere on screen is clicked
let except_filter_div = document.getElementById('filter_div');

document.addEventListener('click', function() {
    filterBoxNotClicked(width);
    }, false);

except_filter_div.addEventListener('click', function(ev)   {
    filterBoxClicked();
    ev.stopPropagation();
    }, false);



function positionFilterBox() {
        let width = d3.select('#vis').node().getBoundingClientRect().width;
        let height = d3.select('#vis').node().getBoundingClientRect().height;
        let orientation = (width / height) > (4 / 3)   ? 'landscape' : 'portrait';
        
        if (orientation == 'landscape') {

                let filter_box_width = width < 750 ? '25px' : '35px';

                d3.select('#filter_div').transition().duration(100)
                        .style('opacity', 0)
                        .style('width', '0px')
                        .style('height', '100%')
                        .transition().duration(400)
                        .style('width', filter_box_width)
                        .style('height', '100%')
                        .attr('right', 0)
                        .attr('bottom', 0)
                        .style('opacity', 1);

            } else {
                d3.select('#filter_div').transition().duration(100)
                        .style('opacity', 0)
                        .style('width', '100%')
                        .style('height', '0px')
                        .transition().duration(400)
                        .style('height', '40px')
                        .attr('bottom', 0)
                        .attr('right', 0)
                         .style('opacity', 1);
            }  
};

function repositionFilterBox(last_orientation) {
        let width = d3.select('#vis').node().getBoundingClientRect().width;
        let height = d3.select('#vis').node().getBoundingClientRect().height;
        let orientation = (width / height) > (4 / 3)   ? 'landscape' : 'portrait';
        
        if (orientation == 'landscape') {

                let filter_box_width = width < 750 ? '25px' : '35px';

                d3.select('#filter_div')
                        .style('width', filter_box_width)
                        .style('height', '100%')
                        .attr('right', 0)
                        .attr('bottom', 0)
                        .style('opacity', 1);

            } else {
                d3.select('#filter_div')
                        .style('opacity', 0)
                        .style('width', '100%')
                        .style('height', '0px')
                        .style('height', '40px')
                        .attr('bottom', 0)
                        .attr('right', 0)
                         .style('opacity', 1);
            }  

        
        let chevron_div_width = 30;
        let chevron_rotation = orientation == 'portrait' ? 0 : 270;
        let chevron_div_x = orientation == 'portrait' ? (width / 2) - (chevron_div_width / 2) : 5;
        let chevron_div_y = orientation == 'portrait' ? 5 : (height / 2);
        let chevron_open_dir = 'images/chevron_open.png';
        let chevron_close_dir = 'images/chevron_close.png';
    
        let chevron_div = d3.select('#chevron_div')
                            .attr('width', chevron_div_width)
                            .attr('height', chevron_div_width)
                            .style('left', chevron_div_x + 'px')
                            .style('top', chevron_div_y + 'px')
                            .style('transform', 'rotate(' + chevron_rotation + 'deg)')
        
        filter_box_open = false;
        
        d3.select('filter_contents_div').style('opacity', 0);
        
        filterClosed();
                            
        
};


function filterBoxClicked() {
        filter_box_open = true;
    
        let width = d3.select('#vis').node().getBoundingClientRect().width;
        let height = d3.select('#vis').node().getBoundingClientRect().height;
        let orientation = (width / height) > (4 / 3)   ? 'landscape' : 'portrait';
    
        let filter_div = d3.select('#filter_div');
        
        filter_div.style('cursor', 'default');
    
       if (orientation == 'landscape') {
            filter_div.transition().duration(500)
                    .style('width', '300px')
                    .attr('right', 0)
                    .attr('bottom', 0);

        } else {
            filter_div.transition().duration(500)
                    .style('height', height * .75 + 'px');
        }
    
        
        filterOpened()
      

}

function filterBoxNotClicked() {
        filter_box_open = false;
        
        let width = d3.select('#vis').node().getBoundingClientRect().width;
        let height = d3.select('#vis').node().getBoundingClientRect().height;
        let orientation = (width / height) > (4 / 3)   ? 'landscape' : 'portrait';
    
        let filter_box_width = width < 750 ? '25px' : '35px';
    
    
        let filter_div = d3.select('#filter_div');
        
        filter_div.style('cursor', 'pointer');

        if (orientation == 'landscape') {
            filter_div.transition().duration(500)
                    .style('width', filter_box_width)
                    .attr('right', 0)
                    .attr('bottom', 0);

        } else {
            filter_div.transition().duration(500)
                    .style('height', '40px');
        }
    
        filterClosed()
};


function filterApplyButtonClicked() {
        filter_box_open = false;    
    
        let width = d3.select('#vis').node().getBoundingClientRect().width;
        let height = d3.select('#vis').node().getBoundingClientRect().height;
        let orientation = (width / height) > (4 / 3)   ? 'landscape' : 'portrait';
    
        let filter_box_width = width < 750 ? '25px' : '35px';
    
        if (orientation == 'landscape') {
            d3.select('#filter_div')
                    .transition().duration(800)
                    .style('width', filter_box_width)
                    .attr('right', 0)
                    .attr('bottom', 0);

        } else {
            d3.select('#filter_div')
                    .transition().duration(800)
                    .style('height', '40px');
        }
    
        filterClosed()
    
        
}

function filterOpened(){
    
    d3.select('#chevron_open_img')
        .transition()
        .duration(600)
        .style('opacity', 0);
    
    d3.select('#chevron_close_img')
        .transition()
        .delay(300)
        .duration(600)
        .style('opacity', .7);
    
    d3.select('#filter_div_contents')
        .transition()
        .delay(300)
        .duration(300)
        .style('opacity', 1);
    
}

function filterClosed(){
    
    d3.select('#chevron_close_img')
        .transition()
        .duration(600)
        .style('opacity', 0);
    
    d3.select('#chevron_open_img')
        .transition()
        .delay(300)
        .duration(600)
        .style('opacity', .7);
    
    d3.select('#filter_div_contents')
        .transition()
        .duration(300)
        .style('opacity', 0);
}

function drawFilterBoxElements () {
    
    
    //Draw Chevron
    let width = d3.select('#vis').node().getBoundingClientRect().width;
    let height = d3.select('#vis').node().getBoundingClientRect().height;
    let orientation = (width / height) > (4 / 3)   ? 'landscape' : 'portrait';
    
    let chevron_div_width = 30;
    let chevron_rotation = orientation == 'portrait' ? 0 : 270;
    let chevron_div_x = orientation == 'portrait' ? (width / 2) - (chevron_div_width / 2) : 5;
    let chevron_div_y = orientation == 'portrait' ? 5 : (height / 2);
    let chevron_open_dir = 'https://imgur.com/FEHwbKB';
    let chevron_close_dir = 'https://imgur.com/E7PELco';
    
    console.log(height, chevron_div_y);
    
    let chevron_div = d3.select('#filter_div')
                            .append('div')
                            .attr('width', chevron_div_width)
                            .attr('height', chevron_div_width)
                            .style('transform', 'rotate(' + chevron_rotation + 'deg)')
                            .attr('id', 'chevron_div')
                            .style('position', 'absolute')
                            .style('left', chevron_div_x + 'px')
                            .style('top', chevron_div_y + 'px')
                            .style('cursor', 'pointer');
    
    let open_chevron = chevron_div.append('img')
                            .attr('src', chevron_open_dir)
                            .attr('id', 'chevron_open_img')
                            .attr('width', chevron_div_width)
                            .style('position', 'absolute')
                            .style('opacity', .7);
    
    let close_chevron = chevron_div.append('img')
                            .attr('src', chevron_close_dir)
                            .attr('id', 'chevron_close_img')
                            .attr('width', chevron_div_width)
                            .style('position', 'absolute')
                            .style('opacity', 0);
    
    let filter_div_contents_padding = orientation == 'portrait' ? '0px': '20px';
    
    let filter_div_contents = d3.select('#filter_div_contents')
                                .style('opacity', 0);
    
    let filter_header_div = filter_div_contents.append('div')
                                .attr('id', 'filter_header_div');
    
    
    let filter_div_header = filter_header_div.append('h3')
                                .text('Filters')
                                .attr('id', 'filter_div_header')
                                .attr('font-size', '36px')
                                .style('text-align', 'center')
                                .style('color', '#f2f2f2')
                                .style('font-weight', 500)
                                .style('letter-spacing', '2px')
                                .style('padding-top', '15px')
                                .style('margin-left', 'auto')
                                .style('margin-right', 'auto')
                                .style('width', '200px')
                                .style('border-bottom', '1px solid #f2f2f2');
    
    let team_filter_div = filter_div_contents.append('div')
                                .attr('id', 'team_filter_div')
    
    let team_filter_select = team_filter_div.append('select')
                                .attr('id', 'team_filter_select')
                                .style('position', 'relative')
                                .style('left', '50%')
                                .style('transform', 'translate(-50%,0)')
                                .style('width', '200px')
                                .style('font-size', '16px')
                                .style('text-align', 'center')
                                .style('background-color', '#454545')
                                .style('color', '#f2f2f2')
                                .style('border', 'none')
                                .style('outline', 'none')
                                .style('height', '28px')
                                .style('cursor', 'pointer');
                                    
    
    let team_filter_select_text = team_filter_select.selectAll('.team_filter_select_text')
                                    .data(team_filter_dropdown_values)
                                    .enter()
                                    .append('option')
                                    .text(function(d) {return d;})
                                    .attr('selected', function(d,i) {
                                        if (i == 0) {
                                            return 'true'
                                        }
                                    })
                                    .attr('disabled', function(d,i) {
                                        if (i == 0) {
                                            return 'true'
                                        }
                                    })
                                    .attr('value', function(d) {return d})
                                    .attr('class', 'team_filter_select_text');
    
    let start_date_filter_div = filter_div_contents.append('div')
                                    .attr('id', 'start_date_filter_div')
                                    .style('padding-top', '10px');
    
    
    let start_date_input = start_date_filter_div.append('input')
                                    .attr('type', 'date')
                                    .attr('name', 'start_date')
                                    .attr('id', 'start_date_input')
                                    .attr('min', '2017-10-21')
                                    .attr('max', '2020-4-26')
                                    .attr('value', '2019-10-20')
                                    .style('position', 'relative')
                                    .style('left', '50%')
                                    .style('transform', 'translate(-50%,0)')
                                    .style('width', '200px')
                                    .style('font-size', '16px')
                                    .style('background-color', '#454545')
                                    .style('color', '#f2f2f2')
                                    .style('border', 'none')
                                    .style('outline', 'none')
                                    .style('height', '28px')
                                    .style('cursor', 'pointer');
    
    let end_date_filter_div = filter_div_contents.append('div')
                                    .attr('id', 'end_date_filter_div')
                                    .style('padding-top', '10px');
    
    
    let end_date_input = end_date_filter_div.append('input')
                                    .attr('type', 'date')
                                    .attr('name', 'start_date')
                                    .attr('id', 'end_date_input')
                                    .attr('min', '2017-10-21')
                                    .attr('max', '2020-4-26')
                                    .attr('value', '2020-10-20')
                                    .style('position', 'relative')
                                    .style('left', '50%')
                                    .style('transform', 'translate(-50%,0)')
                                    .style('width', '200px')
                                    .style('font-size', '16px')
                                    .style('background-color', '#454545')
                                    .style('color', '#f2f2f2')
                                    .style('border', 'none')
                                    .style('outline', 'none')
                                    .style('height', '28px')
                                    .style('cursor', 'pointer');
    
    let player_filter_div = filter_div_contents.append('div')
                                    .attr('id', 'player_filter_div')
                                    .style('padding-top', '10px');
    
    let player_filter_select = player_filter_div.append('select')
                                    .attr('id', 'player_filter_select')
                                    .attr('multiple', '7')
                                    .style('position', 'relative')
                                    .style('left', '50%')
                                    .style('transform', 'translate(-50%,0)')
                                    .style('width', '200px')
                                    .style('font-size', '16px')
                                    .style('background-color', '#454545')
                                    .style('color', '#f2f2f2')
                                    .style('border', 'none')
                                    .style('outline', 'none')
                                    .style('height', '180px')
                                    .style('cursor', 'pointer');
    
    let player_filter_select_text = player_filter_select.selectAll('.player_filter_select_text')
                                    .data(dummy_player_data)
                                    .enter()
                                    .append('option')
                                    .text(function(d) {return d.player_name;})
                                    .attr('value', function(d) {return d.player_name})
                                    .attr('class', 'player_filter_select_text');
    
    let filter_button_div = filter_div_contents.append('div')
                                    .attr('id', 'filter_button_div')
                                    .style('padding-top', '30px');
    
    let filter_button = filter_button_div.append('button')
                                    .attr('id', 'filter_button')
                                    .attr('type', 'button')
                                    .text('Update Chart')
                                    .style('font-size', '16px')
                                    .style('position', 'relative')
                                    .style('background-color', '#454545')
                                    .style('color', '#f2f2f2')
                                    .style('border', '1px solid #878787')
                                    .style('outline', 'none')
                                    .style('left', '50%')
                                    .style('transform', 'translate(-50%,0)')
                                    .style('width', '200px')
                                    .style('cursor', 'pointer');
    
    
    
    //Add filter div event listeners
    let except_filter_button = document.getElementById('filter_button');
    let except_chevron_div = document.getElementById('chevron_div');
    
    except_filter_button.addEventListener('click', function(ev)   {
        filterApplyButtonClicked();
        ev.stopPropagation();
        }, false);
    
    
    
    except_chevron_div.addEventListener('click', function(ev)   {
        
        if (filter_box_open) {
        
            filterApplyButtonClicked();
            ev.stopPropagation(); 
        } else {
            
            filterBoxClicked();
        }
            
            
        }, false);


                                        
      
                            
    };



drawFilterBoxElements();




function drawVizElements(dummy_player_data) {

    /* Draw Elements */
    let width = d3.select('#vis').node().getBoundingClientRect().width;
    let height = d3.select('#vis').node().getBoundingClientRect().height;
    let orientation = (width / height) > (4 / 3)   ? 'landscape' : 'portrait';

    //let connection = new WebSocket('ws://localhost:9191/websocket');

    // Set margins based on orientation
    let title_margin = orientation == 'portrait' ? {left: width * .05, top: height * .0} : {left: width * .01, top:                                             height * .08};

    let title_svg_height_pct = orientation == 'portrait' ? .15 : 1;
    let title_svg_height = height * title_svg_height_pct;
    let title_svg_width = orientation == 'portrait' ? width : .15 * width;
    let vis_svg_height = orientation == 'portrait' ?  height - title_svg_height : height;
    let svg_display = orientation == 'portrait' ? 'block' : 'inline-block';


    // Create SVG
    let title_svg = d3.select('#vis').append('svg')
                            .attr('width', title_svg_width)
                            .style('position', 'fixed')
                            .attr('height', title_svg_height)
                            .attr('id', 'title_svg');

    // Create Title 
    let title_g = title_svg.append('g')
                    .attr('transform', 'translate(' + title_margin.left + ',' + title_margin.top + ')')
                    .attr('id', 'title_g');

    //Set max width of logo to calc right margin
    let logo_img_max_width = height < 750 ? (width < 650 ? 70 : 90) : 120;

    let logo_img_x = orientation == 'portrait' ? width - (logo_img_max_width + (2 *  title_margin.left)) : title_svg_width * .0;
    let logo_img_y = orientation == 'portrait' ? title_svg_height * .2 : 0;
    let logo_img_height = orientation == 'portrait' ? '100%' : logo_img_max_width;

    let logo_img = title_g.append('svg:image')
                        .attr('x', logo_img_x)
                        .attr('width', logo_img_max_width)
                        .attr('height', logo_img_height)
                        .attr('y', logo_img_y)
                        .attr('id', 'logo_img')
                        .attr('xlink:href', dummy_team_data[0].img_url);

    let logo_img_node_height = logo_img.node().getBBox().height;
    let logo_img_y_pos = orientation == 'portrait' ? logo_img_node_height : logo_img_node_height *  1.2;

    let team_name_font_size = height < 650 ? '22px' : '36px';
    let team_dy_offset = orientation == 'portrait' ? '-0.25em' : '.75em';
    let team_loc_font_size = height < 650 ? '14px' : '18px';

    let team_name_text = title_g.append('text')
                        .text(dummy_team_data[0]['team_name'])
                        .attr('fill', '#272727')
                        .attr('id', 'team_name_text')
                        .attr('font-size', team_name_font_size)
                        .attr('dy', team_dy_offset)
                        .attr('y', logo_img_y_pos)
                        .attr('x', 0);

    let team_loc_text_y = team_name_text.node().getBBox().y;
    let team_loc_text_margin = 0;

    let team_name_loc = title_g.append('text')
                        .text(dummy_team_data[0]['team_loc'])
                        .attr('fill', '#272727')
                        .attr('id', 'team_loc_text')
                        .attr('font-size', team_loc_font_size)
                        .attr('text-anchor', team_dy_offset)
                        .attr('y', team_loc_text_y - team_loc_text_margin);                    

    //Create Heatmap
    let vis_svg_width = orientation == 'portrait' ? width : width - title_svg_width;
    let vis_svg_margin = orientation == 'portrait' ? {left: 0, top: title_svg_height} : {left: title_svg_width, top: 0};

    let vis_svg = d3.select('#vis').append('svg')
                            .attr('width', vis_svg_width)
                            .attr('height', vis_svg_height)
                            .attr('id', 'vis_svg')
                            .style('position', 'fixed')
                            .style('margin-left', vis_svg_margin.left)
                            .style('margin-top', vis_svg_margin.top);

    let heatmap_margin = orientation == 'portrait' ? {left: 0.05, top: 0.05} : {left: 0, top: .1};
    let heatmap_width = orientation == 'portrait' ? width * (1 - (heatmap_margin.left * 2)) : (width - title_svg_width) * .9;
    let heatmap_block_size = heatmap_width / 48;
    let heatmap_height = orientation == 'portrait' ? vis_svg_height : height;
    let heatmap_line_chart_split = .55;
    let heatmap_height_multiple = heatmap_height * heatmap_line_chart_split / dummy_player_data.length / heatmap_block_size;

    let heatmap_g = vis_svg.append('g')
                        .attr('id', 'heatmap_g')
                        .attr('transform', 'translate(' + width * heatmap_margin.left + ',' + height * heatmap_margin.top + ')');

    let heatmap_color_scale = d3.scaleLinear()
                                .domain([0, 1])
                                .interpolate(d3.interpolateHcl)
                                .range([d3.rgb('#ffd3bd'), d3.rgb('#e63e3e')]);


    for (z = 0; z < dummy_player_data.length; z++) {

        heatmap_g.selectAll('.heatmap_row_' + z)
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
                    .attr('class', 'heatmap_row_' + z)
                    .attr('stroke', '#f2f2f2')
                    .attr('stroke-width', .3)
                    .attr('id', function(d, i) {return 'heatmap_row_' + z + '_' + i})
                    .attr('transform', function(d, i) {
                        let transform_down = (heatmap_block_size * heatmap_height_multiple) * z + 2;

                        return 'translate(0,' + transform_down + ')'
                    });


        let player_name_font_size = heatmap_block_size * heatmap_height_multiple < 35 ? '10px' : '12px';

        heatmap_g.append('text')
            .text(function() {
                                let name_array = dummy_player_data[z].player_name.split(' ');
                                let first_initial = name_array[0][0] + '.';
                                let last_name = name_array[name_array.length - 1];

                                return first_initial + ' '  + last_name;

                    })
            .attr('dy', '-0.25em')
            .attr('font-size', player_name_font_size)
            .attr('font-weight', 600)
            .attr('transform', function(d, i) {
                    let transform_down = (heatmap_block_size * heatmap_height_multiple) * (z + 1);

                    return 'translate(5,' + transform_down + ')'
                    })
            .attr('id', function() {return 'heatmap_text_' + z})
            .attr('fill', '#272727');


    };

    let heatmap_min_ticks = heatmap_g.selectAll('.heatmap_min_ticks')
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
                                    .attr('dy', '-0.25em')
                                    .attr('font-size', '6px')
                                    .attr('fill', '#878787')
                                    .attr('class', 'heatmap_min_ticks');

    let heatmap_qtr_lines = heatmap_g.selectAll('.heatmap_qtr_lines')
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
                                    .attr('stroke-width', '1px')
                                    .attr('class', 'heatmap_qtr_lines');

    let heatmap_qtr_titles = heatmap_g.selectAll('.heatmap_qtr_titles')
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
                                        .attr('fill', '#878787')
                                        .attr('class', 'heatmap_qtr_titles');

    let heatmap_g_bottom = heatmap_g.node().getBBox().height;
    let heatmap_g_y = heatmap_g.node().getBBox().y;
    let heatmap_to_bottom = heatmap_g.node().getBoundingClientRect().bottom;
    let line_chart_height = vis_svg_height * (.8 - heatmap_line_chart_split);
    let line_chart_width = heatmap_width;

    let line_chart_g = vis_svg.append('g')
                            .attr('id', 'line_chart_g')
                            .attr('transform', function() {
                                return 'translate(' + (heatmap_margin.left * width) + ',' + (heatmap_g_bottom + heatmap_g_y + (height * heatmap_margin.top)) + ')';
                            })

    let line_chart_border = line_chart_g.append('rect')
                                        .attr('y', 0)
                                        .attr('x', 0)
                                        .attr('width', line_chart_width)
                                        .attr('height', line_chart_height)
                                        .attr('fill', '#fff')
                                        .attr('id', 'line_chart_border');

    let line_chart_zero_line = line_chart_g.append('line')
                                        .attr('id', 'line_chart_zero_line')
                                        .attr('x1', 0)
                                        .attr('x2', line_chart_width)
                                        .attr('y1', line_chart_height / 2)
                                        .attr('y2', line_chart_height / 2)
                                        .attr('stroke', '#f2f2f2');
    
    let line_chart_text_margin = orientation == 'portrait' ? -10 : 5;
    
    let line_chart_zero_text = line_chart_g.selectAll('#line_chart_zero_text')
                                        .data(['0'])
                                        .enter()
                                        .append('text')
                                            .text(function(d) {return d;})
                                            .attr('x', line_chart_text_margin)
                                            .attr('y', line_chart_height / 2)
                                            .attr('font-size', '10px')
                                            .attr('fill', '#878787')
                                            .attr('text-anchor', 'middle')
                                            .attr('id', 'line_chart_zero_text');


    let max_line_chart_y = Math.max(dummy_line_chart_data.max, dummy_line_chart_data.min);

    let line_chart_max_text = line_chart_g.selectAll('.line_chart_max_text')
                                            .data([-1 * max_line_chart_y, max_line_chart_y])
                                            .enter()
                                                .append('text')
                                                .text(function(d) {return d;})
                                                .attr('x', line_chart_text_margin)
                                                .attr('y', function(d, i) {
                                                    if (i == 0) {return 0}
                                                    else {return line_chart_height};
                                                })
                                                .attr('font-size', '10px')
                                                .attr('fill', '#878787')
                                                .attr('class', 'line_chart_max_text')
                                                .attr('text-anchor', 'middle')  
                                                .attr('dy', function(d,i) {
                                                    if (i == 0) {return '.75em'}
                                                    else {return '-0.25em'};
                                                });


    let x_scale = d3.scaleLinear().range([0, line_chart_width])
                                .domain([0, dummy_line_chart_data.data.length - 1]);

    let y_scale = d3.scaleLinear().range([line_chart_height, 0])
                                .domain([-1 * max_line_chart_y, max_line_chart_y]);

    let line_chart_function = d3.line()
                                 .x(function(d, i) {return x_scale(i);})
                                 .y(function(d) {return y_scale(d);});

    let line_chart_path = line_chart_g.append('path')
                                .data([dummy_line_chart_data.data])
                                .attr('fill', 'none')
                                .attr('stroke', '#e63e3e')
                                .attr('stroke-width', 2)
                                .attr('d', line_chart_function)
                                .attr('id', 'line_chart_path');

    

    let line_chart_title = line_chart_g.append('text')
                                    .text('_')
                                    .attr('x', line_chart_width / 2)
                                    .attr('y', line_chart_height)
                                    .attr('dy', '-0.25em')
                                    .attr('text-anchor', 'middle')
                                    .attr('font_size', '1px')
                                    .attr('fill', 'none')
                                    .attr('id', 'line_chart_title');
    
    let line_chart_title_left = d3.select('#line_chart_title').node().getBoundingClientRect().x + 'px';
    let line_chart_title_top = d3.select('#line_chart_title').node().getBoundingClientRect().y + 'px';
    let line_chart_select_font_size = width < 800 ? '12px' : '14px';
    
    let line_chart_select = d3.select('#vis')
                                    .append('select')
                                    .attr('id', 'line_chart_select')
                                    .style('position', 'absolute')
                                    .style('z-index', 1)
                                    .style('left', line_chart_title_left)
                                    .style('top', line_chart_title_top)
                                    .style('text-align-last', 'center')
                                    .style('-webkit-transform', 'translate(-50%,0%)')
                                    .style('border', '1px solid #e8e8e8')
                                    .style('outline', '1px')
                                    .style('font-size', line_chart_select_font_size)
                                    .style('color', '#878787')
                                    .style('letter-spacing', '1px')
                                    .style('padding-left', '5px')
                                    .style('padding-right', '5px')
                                    .style('cursor', 'pointer');
    
    let line_chart_select_text = line_chart_select.selectAll('.line_chart_select_text')
                                    .data(line_chart_dropdown_values)
                                    .enter()
                                    .append('option')
                                    .text(function(d) {return d})
                                    .attr('value', function(d) {return d})
                                    .attr('class',  'line_chart_select_text');
                                
}


function repositionVizElements(player_data) {
    
    repositionFilterBox();
    
    let width = d3.select('#vis').node().getBoundingClientRect().width;
    let height = d3.select('#vis').node().getBoundingClientRect().height;
    let orientation = (width / height) > (4 / 3)   ? 'landscape' : 'portrait';
    
    let title_margin = orientation == 'portrait' ? {left: width * .05, top: height * .0} : {left: width * .01, top:                                             height * .08};
    let title_svg_height_pct = orientation == 'portrait' ? .15 : 1;
    let title_svg_height = height * title_svg_height_pct;
    let title_svg_width = orientation == 'portrait' ? width : .15 * width;
    let vis_svg_height = orientation == 'portrait' ?  height - title_svg_height : height;
    let svg_display = orientation == 'portrait' ? 'block' : 'inline-block';

    
    let title_svg = d3.select('#title_svg')
                        .attr('width', title_svg_width)
                        .attr('height', title_svg_height);
    
    let title_g = d3.select('#title_g')
                        .attr('transform', 'translate(' + title_margin.left + ',' + title_margin.top + ')');
    
    //Set max width of logo to calc right margin
    let logo_img_max_width = height < 750 ? (width < 650 ? 70 : 90) : 120;

    let logo_img_x = orientation == 'portrait' ? width - (logo_img_max_width + (2 *  title_margin.left)) : title_svg_width * .0;
    let logo_img_y = orientation == 'portrait' ? title_svg_height * .2 : 0;
    let logo_img_height = orientation == 'portrait' ? '100%' : logo_img_max_width;
    
    let logo_img = d3.select('#logo_img')
                        .attr('x', logo_img_x)
                        .attr('width', logo_img_max_width)
                        .attr('height', logo_img_height)
                        .attr('y', logo_img_y);
    
    let logo_img_node_height = logo_img.node().getBBox().height;
    let logo_img_y_pos = orientation == 'portrait' ? logo_img_node_height : logo_img_node_height *  1.2;

    let team_name_font_size = height < 650 ? '22px' : '36px';
    let team_dy_offset = orientation == 'portrait' ? '-0.25em' : '.75em';
    let team_loc_font_size = height < 650 ? '14px' : '18px';
    
    let team_name_text = d3.select('#team_name_text')
                            .attr('font-size', team_name_font_size)
                            .attr('dy', team_dy_offset)
                            .attr('y', logo_img_y_pos);
    
    let team_loc_text_y = team_name_text.node().getBBox().y;
    let team_loc_text_margin = 0;
    
    let team_name_loc = d3.select('#team_loc_text')
                            .attr('font-size', team_loc_font_size)
                            .attr('text-anchor', team_dy_offset)
                            .attr('y', team_loc_text_y - team_loc_text_margin);    
    
    let vis_svg_width = orientation == 'portrait' ? width : width - title_svg_width;
    let vis_svg_margin = orientation == 'portrait' ? {left: 0, top: title_svg_height} :                                                     {left: title_svg_width, top: 0};
    
    let vis_svg = d3.select('#vis_svg')
                    .attr('width', vis_svg_width)
                    .attr('height', vis_svg_height)
                    .style('margin-left', vis_svg_margin.left)
                    .style('margin-top', vis_svg_margin.top);
    
    let heatmap_margin = orientation == 'portrait' ? {left: 0.05, top: 0.05} : {left: 0, top: .1};
    let heatmap_width = orientation == 'portrait' ? width * (1 - (heatmap_margin.left * 2)) : (width - title_svg_width) * .9;
    let heatmap_block_size = heatmap_width / 48;
    let heatmap_height = orientation == 'portrait' ? vis_svg_height : height;
    let heatmap_line_chart_split = .55;
    let heatmap_height_multiple = heatmap_height * heatmap_line_chart_split / dummy_player_data.length / heatmap_block_size;
 
    let heatmap_g = d3.select('#heatmap_g')
                        .attr('transform', 'translate(' + width * heatmap_margin.left + ',' + height * heatmap_margin.top + ')');
    
    let heatmap_color_scale = d3.scaleLinear()
                                .domain([0, 1])
                                .interpolate(d3.interpolateHcl)
                                .range([d3.rgb('#ffd3bd'), d3.rgb('#e63e3e')]);
    
    
    for (z = 0; z < dummy_player_data.length; z++) {

                d3.selectAll('.heatmap_row_' + z)
                    .attr('width', heatmap_block_size)
                    .attr('height', heatmap_block_size * heatmap_height_multiple)
                    .attr('x', function(d,i) {
                        return i * heatmap_block_size})
                    .attr('fill', function(d,i) {
                        return heatmap_color_scale(d);
                        })
                    .attr('stroke-width', .3)
                    .attr('transform', function(d, i) {
                        let transform_down = (heatmap_block_size * heatmap_height_multiple) * z + 2;

                        return 'translate(0,' + transform_down + ')'
                    });
        
                let player_name_font_size = heatmap_block_size * heatmap_height_multiple < 35 ? '10px' : '12px';
        
                d3.select('#heatmap_text_' + z)
                    .attr('dy', '-0.25em')
                    .attr('font-size', player_name_font_size)
                    .attr('font-weight', 600)
                    .attr('transform', function(d, i) {
                    let transform_down = (heatmap_block_size * heatmap_height_multiple) * (z + 1);

                    return 'translate(5,' + transform_down + ')'
                    })

            };   
    
    let heatmap_min_ticks = d3.selectAll('.heatmap_min_ticks')
                                .attr('x', function(d, i) {
                                    return i * heatmap_block_size + (heatmap_block_size / 2);
                                })
                                .attr('y', 0)
                                .attr('dy', '-0.25em');
    
    let heatmap_qtr_lines = d3.selectAll('.heatmap_qtr_lines')
                                .attr('x1', function(d,i) {
                                    return d * (12 * heatmap_block_size);
                                })
                                .attr('x2', function(d,i) {
                                    return d * (12 * heatmap_block_size);
                                })
                                .attr('y1', 2)
                                .attr('y2', function() {
                                    return dummy_player_data.length * heatmap_block_size * heatmap_height_multiple;
                                });  
    
    let heatmap_qtr_titles = d3.selectAll('.heatmap_qtr_titles')
                                .attr('x', function(d,i) {
                                            return (i + 1) * (12 * heatmap_block_size);
                                        })
                                .attr('y', - 10);
    
    let heatmap_g_bottom = heatmap_g.node().getBBox().height;
    let heatmap_g_y = heatmap_g.node().getBBox().y;
    let heatmap_to_bottom = heatmap_g.node().getBoundingClientRect().bottom;
    let line_chart_height = vis_svg_height * (.8 - heatmap_line_chart_split);
    let line_chart_width = heatmap_width;
    
    let line_chart_g = d3.select('#line_chart_g')
                            .attr('transform', function() {
                                return 'translate(' + (heatmap_margin.left * width) + ',' + (heatmap_g_bottom + heatmap_g_y + (height * heatmap_margin.top)) + ')';
                            })
    
    let line_chart_border = d3.select('#line_chart_border')
                                .attr('y', 0)
                                .attr('x', 0)
                                .attr('width', line_chart_width)
                                .attr('height', line_chart_height)
    
    let line_chart_zero_line = d3.select('#line_chart_zero_line')
                                .attr('x1', 0)
                                .attr('x2', line_chart_width)
                                .attr('y1', line_chart_height / 2)
                                .attr('y2', line_chart_height / 2);
    
    let line_chart_text_margin = orientation == 'portrait' ? -10 : 5;
    
    let line_chart_zero_text = d3.select('#line_chart_zero_text')
                                .attr('x', line_chart_text_margin)
                                .attr('y', line_chart_height / 2);
    
    let max_line_chart_y = Math.max(dummy_line_chart_data.max, dummy_line_chart_data.min);
    
    let line_chart_max_text = d3.selectAll('.line_chart_max_text')
                                .attr('x', line_chart_text_margin)
                                .attr('y', function(d, i) {
                                    if (i == 0) {return 0}
                                    else {return line_chart_height};
                                })
                                .attr('dy', function(d,i) {
                                                    if (i == 0) {return '.75em'}
                                                    else {return '-0.25em'};
                                    });
    
    let x_scale = d3.scaleLinear().range([0, line_chart_width])
                                .domain([0, dummy_line_chart_data.data.length - 1]);

    let y_scale = d3.scaleLinear().range([line_chart_height, 0])
                                .domain([-1 * max_line_chart_y, max_line_chart_y]);

    let line_chart_function = d3.line()
                                 .x(function(d, i) {return x_scale(i);})
                                 .y(function(d) {return y_scale(d);});
    
    let line_chart_path = d3.select('#line_chart_path')
                                .attr('d', line_chart_function);
    
    
    let line_chart_title = d3.select('#line_chart_title')
                                .attr('x', line_chart_width / 2)
                                .attr('y', line_chart_height)
    
    
    let line_chart_title_left = d3.select('#line_chart_title').node().getBoundingClientRect().x + 'px';
    let line_chart_title_top = d3.select('#line_chart_title').node().getBoundingClientRect().y + 'px';
    let line_chart_select_font_size = width < 800 ? '12px' : '14px';
                            
    let line_chart_select = d3.select('#line_chart_select')
                                .style('left', line_chart_title_left)
                                .style('top', line_chart_title_top)
                                .style('font-size', line_chart_select_font_size);
                                
                                
                            
                                
}
    



// APP
let APP = (function () {

  // Debounce is a private function
	function debounce(func, wait, immediate) {
		let timeout;
		return function() {
			let context = this, args = arguments;
			clearTimeout(timeout);
			timeout = setTimeout(function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			}, wait);
			if (immediate && !timeout) func.apply(context, args);
		};
	}

  // onResize function is made public
	let me = {onResize : function(callback) {
		callback(); // optionally execute callback func imediatly
    
    window.addEventListener('resize', debounce(function() {
      callback();
    }, 50), false);
	}};

  // returns the me object that has all the public functions in it
	return me;
})();


setTimeout(function() {
    
        drawVizElements(dummy_player_data);
    
        width = d3.select('#vis').node().getBoundingClientRect().width;
        height = d3.select('#vis').node().getBoundingClientRect().height;
        orientation = (width / height) > (4 / 3)   ? 'landscape' : 'portrait';
    
        APP.onResize(function() {
            
            let player_data = dummy_player_data;
            
            repositionVizElements(player_data);
            });
    
    
    
    }, 500);

// Call onResize like this



