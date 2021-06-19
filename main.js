var next_img =
[ "https://images-na.ssl-images-amazon.com/images/I/71QeARr3R1L.jpg",
"https://images-na.ssl-images-amazon.com/images/I/81Q3h7xT9IL.jpg" ];

var names =
["Wings of fire", "I survived"]

var i = 0;
function update()
{

    alert("Diameter should be numeric");
    i++;
var number_of_FM_in_array = 2
if (i > number_of_FM_in_array )
{
    i = 0
}
var updatedImage = next_img[i];
var updatedNames = names[i];
document.getElementById("family_image").src = updatedImage;
document.getElementById("family_names").innerHTML = updatedNames;}