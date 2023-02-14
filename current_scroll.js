thumb = $x("/html/body/div/div/div/div[2]/div[1]/div[2]/div/div/div/div[3]/div");
var pos_str = thumb[0].outerHTML.substring(176, 183);
var regex = /(\d+)/;
var match = pos_str.match(regex);
pos = parseFloat(match[0]);

bar = $x("/html/body/div/div/div/div[2]/div[1]/div[2]/div/div/div/div[3]");
h = bar[0].clientHeight - 30;

total = 844 // Total number of images
total * pos / h;