function MenuChoice()
{
    if (document.getElementById("menu").value == "Show Area 1")
    {
        document.getElementById("section1").style.visibility = "visible";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "hidden";
    }
    else if (document.getElementById("menu").value == "Show Area 2")
    {
        document.getElementById("section2").style.visibility = "visible";
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "hidden";
    }
    else if (document.getElementById("menu").value == "Show Area 3")
    {
        document.getElementById("section3").style.visibility = "visible";
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "hidden";
    }
    else
    {
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "hidden";
    }
}


function GetOrders()
{
var objRequest = new XMLHttpRequest(); //Create AJAX request object

//Create URL and Query string
var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getOrdersForCustomer/";
url += document.getElementById("custid").value;

//Checks that the object has returned data
objRequest.onreadystatechange = function()
{
    
if (objRequest.readyState == 4 && objRequest.status == 200)
{
    
var output = JSON.parse(objRequest.responseText);
GenerateOutput(output);
}
}

//Initiate the server request
objRequest.open("GET", url, true);
objRequest.send();

}
function GenerateOutput(result)
{
    
var count = 0;
var displaytext = "<table><tr><th><h4>Order Date</h4></th><th><h4>Order ID</h4></th><th><h4>Shipping Address</h4></th><th><h4>Shipping City</h4></th><th><h4>Shipping Name</h4></th><th><h4>Postal Code</h4></th><th><h4>Shipped Date" + "</td><td>"; //Table header and first row;

//Loop to extract data from the response object
for (count = 0; count < result.GetOrdersForCustomerResult.length; count++)
{
    
displaytext += "<tr><td>" + result.GetOrdersForCustomerResult[count].OrderDate + "</td><td>" + result.GetOrdersForCustomerResult[count].OrderID + "</td><td>" + result.GetOrdersForCustomerResult[count].ShipAddress + "</td><td>" + result.GetOrdersForCustomerResult[count].ShipCity + "</td><td>" + result.GetOrdersForCustomerResult[count].ShipName + "</td><td>" + result.GetOrdersForCustomerResult[count].ShipPostcode + "</td><td>" + result.GetOrdersForCustomerResult[count].ShippedDate + "</td></tr>";
}

document.getElementById("orderdisplay").innerHTML = displaytext;
}

function GetOrderHistory()
{
var objRequest = new XMLHttpRequest(); //Create AJAX request object

//Create URL and Query string
var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getCustomerOrderHistory/";
url += document.getElementById("custid2").value;

//Checks that the object has returned data
objRequest.onreadystatechange = function()
{
    
if (objRequest.readyState == 4 && objRequest.status == 200)
{
    
var output = JSON.parse(objRequest.responseText);
GenerateOutput2(output);
}
}

//Initiate the server request
objRequest.open("GET", url, true);
objRequest.send();

}
function GenerateOutput2(result)
{
    
var count = 0;
var displaytext2 = "<table><tr><th><h4>Product Name</h4></th><th><h4>Quantity Ordered</h4></th><th><h4>" + "</td><td>"; //Table header and first row;

//Loop to extract data from the response object
for (count = 0; count < result.length; count++)
{
    
displaytext2 += "<tr><td>" + result[count].ProductName + "</td><td>" + result[count].Total + "</td></tr>";
}

document.getElementById("displayhistory").innerHTML = displaytext2;
}


function GetCustomers()
{
var objRequest = new XMLHttpRequest(); //Create AJAX request object

//Create URL and Query string
var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getAllCustomers";


//Checks that the object has returned data
objRequest.onreadystatechange = function()
{
    
if (objRequest.readyState == 4 && objRequest.status == 200)
{
    
var output = JSON.parse(objRequest.responseText);
GenerateOutput3(output);
}
}

//Initiate the server request
objRequest.open("GET", url, true);
objRequest.send();

}
function GenerateOutput3(result)
{
    
var count = 0;
var displaytext = "<table><tr><th><h4>Customer ID</h4></th><th><h4>Customer Name</h4></th><th><h4>Customer City</h4></th><th><h4>" + "</td><td>"; //Table header and first row;

//Loop to extract data from the response object
for (count = 0; count < result.GetAllCustomersResult.length; count++)
{
    
displaytext += "<tr><td>" + result.GetAllCustomersResult[count].CustomerID + "</td><td>" + result.GetAllCustomersResult[count].CompanyName + "</td><td>" + result.GetAllCustomersResult[count].City + "</td></tr>";
}

document.getElementById("displaycustomer").innerHTML = displaytext;
}