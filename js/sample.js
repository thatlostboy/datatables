// followed exzmple in https://datatables.net/examples/data_sources/ajax to create a ajax query
// data is in the productlist.txt 
// make sure data format in productlist.txt is {"data": [ [item1, price1, store1, etc], [item2, price2, store2, etc]...    ]}






$(document).ready(function() {

    /* 
        for datatables, the ajax option assumes the return value is in this format
        {"data": [ [item1, price1, store1, etc], [item2, price2, store2, etc]...    ]}
        I created a csv file, and used this tool to convert it to that format: 
            http://www.convertcsv.com/csv-to-json.htm
        When using the above tool, make sure you select csv to JSON array.
    */

    // https://datatables.net/examples/basic_init/zero_configuration.html
    // on datatables.html sample
    $('#productlist').DataTable();

    // ajax sourced from TXT file
    // https://datatables.net/examples/data_sources/ajax
    // on datatables2.html sample
    $('#ajaxloadbasic').DataTable({
        "ajax": './js/productlist.txt'
    });

    // same as above but added in scrolling
    // https://datatables.net/examples/basic_init/scroll_y.html
    // on datatables2.html sample
    $('#ajaxloadbasicscroll').DataTable({
        "ajax": './js/productlist.txt',
        "scrollY": "500px",
        "scrollCollapse": true,
        "paging": false
    });

    // same as above but added in sort
    // https://datatables.net/examples/basic_init/scroll_y.html
    // on datatables2.html sample
    // [3, "asc"] says to use the 4th column (array index start at 0) and 
    // show in ascending ordr
    $('#ajaxloadbasicscrollsort').DataTable({
        "ajax": './js/productlist.txt',
        "scrollY": "500px",
        "scrollCollapse": true,
        "paging": false, 
        "order": [[ 3, "asc" ]]
    });

        // same as above but added in sort
    // https://datatables.net/examples/basic_init/scroll_y.html
    // on datatables2.html sample
    // [3, "asc"] says to use the 4th column (array index start at 0) and 
    // show in ascending ordr
    $('#ajaxapicall').DataTable({
        "ajax": {
            url: "http://127.0.0.1:8080/api/products",
            method: 'GET', 
        },
        "scrollY": "500px",
        "scrollCollapse": true,
        "paging": false, 
        "order": [[ 3, "asc" ]]
    });


    // this is that test button on datatables3.html page
    //  I was testing to make sure it works

    $("#testajaxget").on("click", outputData)

    function outputData() {
        $.ajax({ url: "http://127.0.0.1:8080/api/products", method: "GET" })
        .then(function(tableData){
            console.log(tableData);
        });
    }


} );
